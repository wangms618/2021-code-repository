"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printPost(post) {
    console.log(post.title);
    console.log(post.content);
}
printPost({
    title: 'hts',
    content: 'nihao'
});
// 接口就是用来去约束对象结构，一个对象去实现一个接口
