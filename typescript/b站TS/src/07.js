"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// enum PostStatus { // 枚举，使用 = 指定,第一个成员指定值，后面是依据第一个成员去累加
//   Draft = 6,
//   Unpublished,
//   Published,
// }
// enum PostStatus { // 枚举，使用 = 指定
//   Draft = "aaa",
//   Unpublished = "bbb",
//   Published = "ccc",
// }
const post = {
    title: "Hello TypeScript",
    content: "TypeScript is a typed superset of JavaScript.",
    status: 0 /* Draft */, // 1 , 2 , 0
};
