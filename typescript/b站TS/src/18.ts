// 抽象类
// 可以包含一些具体的实现
export {};
// 定义抽象类
abstract class Animal {
  eat(food: string): void {
    console.log(`吃:${food}`);
  }
  abstract run(distance: number): void; // 方法体
}
class Dog extends Animal {
  run(distance: number): void {
    console.log("四脚爬行", distance); // 父类有这个方法，子类必须要实现这个方法
  }
}
const d = new Dog();
d.eat("面包");
d.run(100);
