// 枚举(Enum)
export {};
// const PostStatus = {
//   Draft: 0,
//   Unpublished: 1,
//   Published: 2,
// };

// enum PostStatus { // 枚举，使用 = 指定
//   Draft = 0,
//   Unpublished = 1,
//   Published = 2,
// }

const enum PostStatus { // 枚举，使用 = 指定  ， 不指定的话默认从0开始
  Draft,
  Unpublished,
  Published,
}
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
  status: PostStatus.Draft, // 1 , 2 , 0
};
