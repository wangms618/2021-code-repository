    // 二叉树中序遍历出来的数组是有序的，从小到大，所以可以得出一个有序数组，再寻找第k大的节点
    var kthLargest = function(root, k) {
      // 边界
      if(!root) return 
      // 中序遍历将遍历的节点值压入栈
      let stack = []
      function check(root){
          if(!root) return 
          check(root.left)
          stack.push(root.val)
          check(root.right)
      }
      check(root)
      // 将多余节点值弹出栈
      for(let i = 1;i<k;i++){
          stack.pop()
      }
      return stack[stack.length-1]
  };