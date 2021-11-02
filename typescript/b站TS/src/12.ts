export {};
interface Post {
  title: string;
  content: string;
}
function printPost(post: Post) { // 使用接口
  console.log(post.title);
  console.log(post.content);
}

printPost({
    title: 'hts',
    content:'nihao'
})
// 接口就是用来去约束对象结构，一个对象去实现一个接口
