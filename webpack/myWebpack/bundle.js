// 获取主入口文件
const fs = require('fs')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const path = require('path')
const babel = require('@babel/core')


const getModuleInfo = (file) => {
  const body = fs.readFileSync(file, 'utf-8')
  const ast = parser.parse(body, {
    sourceType: 'module' // 表示我们要解析的是ES模块
  })

  const deps = {} // 收集到的依赖
  traverse(ast, {
    ImportDeclaration({
      node
    }) {
      const dirname = path.dirname(file)
      const adspath = './' + path.join(dirname, node.source.value)
      // console.log(dirname, node.source.value);
      deps[node.source.value] = adspath
    }
  })
  const {
    code
  } = babel.transformFromAst(ast, null, {
    presets: ['@babel/preset-env'] // 配置preset
  })
  const moduleInfo = {
    file,
    deps,
    code
  }
  return moduleInfo
}
// 递归获取依赖
const parseModules = (file) => {
  const entry = getModuleInfo(file)
  const temp = [entry]
  const depsGraph = {}
  for (let i = 0; i < temp.length; i++) {
    const deps = temp[i].deps
    if (deps) {
      for (let key in deps) {
        if (deps.hasOwnProperty(key)) {
          temp.push(getModuleInfo(deps[key]))
        }
      }
    }
  }
  temp.forEach(moduleInfo => {
    depsGraph[moduleInfo.file] = {
      deps: moduleInfo.deps,
      code: moduleInfo.code
    }
  })
  console.log(depsGraph);
  return depsGraph
}
// 处理require,exports关键字的
const bundle = (file) => {
  const depsGraph = JSON.stringify(parseModules(file))
  console.log(depsGraph);
  return `(function (graph) {
    function require(file) {
        function absRequire(relPath) {
            return require(graph[file].deps[relPath])
        }
        var exports = {};
        (function (require,exports,code) {
            eval(code)
        })(absRequire,exports,graph[file].code)
        return exports
    }
    require('${file}')
  })(${depsGraph})`
}

const content = bundle('./src/index.js')
console.log(content);

// 创建一个文件
fs.mkdirSync('./dist')
// 写入
fs.writeFileSync('./dist/bundle.js', content)