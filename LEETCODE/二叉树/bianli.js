// 先序遍历
function preorder(root) {
  if (!root) return
  console.log(root.val);
  preorder(root.left)
  preorder(root.right)
}
// 中序遍历
function inorder(root) {
  if (!root) return
  preorder(root.left)
  console.log(root.val);
  preorder(root.right)
}
// 后序遍历
function postorder(root) {
  if (!root) return
  preorder(root.left)
  console.log(root.val);
  preorder(root.right)
}