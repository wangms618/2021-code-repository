var mirrorTree = function(root) {
  // 判断root是否是空数组
  if(!root) return root
  // left 和 right 互换
  function swap(root){
  // 边界条件，传入值为空时跳出
  if(!root) return 
  // 交换节点
  let node = root.left
  root.left = root.right
  root.right = node
  // 递归
  swap(root.left)
  swap(root.right)
  }
  swap(root)
  return root
};