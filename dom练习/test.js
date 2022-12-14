const depthFirstSearchWithRecursive = source => {
  const result = []; // 存放结果的数组
  // 递归方法
  const dfs = data => {
    // 遍历数组
    data.forEach(element => {
      // 将当前节点 id 存放进结果
      result.push(element.id);
      // 如果当前节点有子节点，则递归调用
      if (element.children && element.children.length > 0) {
        dfs(element.children);
      }
    });
  };
  // 开始搜索
  dfs(source);
  return result;
};

const depthFirstSearchWithoutRecursive = source => {
  const result = []; // 存放结果的数组
  // 当前栈内为全部数组
  const stack = JSON.parse(JSON.stringify(source));
  // 循环条件，栈不为空
  while (stack.length !== 0) {
    // 最上层节点出栈
    const node = stack.shift();
    // 存放节点
    result.push(node.id);
    // 如果该节点有子节点，将子节点存入栈中，继续下一次循环
    const len = node.children && node.children.length;
    for (let i = len - 1; i >= 0; i -= 1) {
      stack.unshift(node.children[i]);
    }
  }
  return result;
};
