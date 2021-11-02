// 类与接口
export {};
// 接口
// interface EatAndRun {
//   // 约束这两个方法的类型
//   eat(food: string): void;
//   run(distance: number): void;
// }
// class Person implements EatAndRun {
//     eat(food: string): void {
//       console.log(`优雅的进餐:${food}`);
//     }
//     run(distance: number) {
//       console.log(`直立行走:${distance}`);
//     }
//   }

//   class Animal implements EatAndRun {
//     eat(food: string): void {
//       console.log(`吃:${food}`);
//     }
//     run(distance: number) {
//       console.log(`爬行:${distance}`);
//     }
//   }
interface Eat {
  eat(food: string): void;
}

interface Run {
  run(distance: number): void;
}
class Person implements Eat, Run { // 同时使用Eat,Run去使用两个接口
  eat(food: string): void {
    console.log(`优雅的进餐:${food}`);
  }
  run(distance: number) {
    console.log(`直立行走:${distance}`);
  }
}

class Animal implements Eat, Run {
  eat(food: string): void {
    console.log(`吃:${food}`);
  }
  run(distance: number) {
    console.log(`爬行:${distance}`);
  }
}

// 合理化，一个接口去约束一个能力
// 让一个类型同时去实现多个接口
