# 云开发 quickstart

1. 在miniprogram下执行npm init -y
2. npm i @vant/weapp -S --production (vant官方文档步骤一)
3. 将 app.json 中的 "style": "v2" 去除
4. 修改 project.config.json 中
```js  
"packNpmManually": true,
    "packNpmRelationList": [
      {
        "packageJsonPath": "./miniprogram/package.json",
        "miniprogramNpmDistDir": "./miniprogram/"
      }
    ]
```js

剩余步骤看官方
