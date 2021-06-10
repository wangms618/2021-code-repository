// 链表节点
function TreeNode(val) {
  this.val = val // 数据域
  this.left = null
  this.right = null
}
// const node = new TreeNode(1)

const root = {
  val: 'A',
  left: {
    val: 'B',
    left: {
      val: 'D'
    },
    right: {
      val: 'E'
    }
  },
  right: {
    val: 'C',
    right: {
      val: 'G'
    }
  }
}

// // 先序遍历
// function preorder(root) {
//   // 只要遍历到一个空节点，就跳出递归
//   if (!root)
//     return
//   console.log('当前遍历的节点', root.val);
//   preorder(root.left)
//   preorder(root.right)
// }
// preorder(root)

// // 中序遍历
// function inorder(root) {
//   if (!root) return
//   inorder(root.left)
//   console.log('当前遍历的节点',root.val)
//   inorder(root.right)
// }
// inorder(root)

// 后序遍历
function postorder(root) {
  if (!root) return
  postorder(root.left)
  postorder(root.right)
  console.log('当前遍历的节点', root.val);
}
postorder(root)