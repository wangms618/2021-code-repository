/*
 * @Author: your name
 * @Date: 2021-11-02 15:00:04
 * @LastEditTime: 2021-11-02 15:15:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /typescript/b站TS/src/13.ts
 */
export {};
interface Post {
  title: string;
  content: string;
  subtitle?: string; // ?表示可选成员
  readonly summary?: string; // 只读成员
}
const hello: Post = {
  title: "Hello TypeScript",
  content: "A javascript superset",
};

// 动态成员
// interface Cache{
//   [prop: string]: string
// }
// const cache: Cache = {
//   cache.foo = 'abc' // 任意添加string类型的属性
// }
