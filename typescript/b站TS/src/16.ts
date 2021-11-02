export {};
class Person {
  public name: string; // = 'init name;
  private age: number; // 表示age属性是一个私有属性
  protected readonly gender: boolean; // 只读属性
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.gender = true;
  }
  sayHi(msg: string): void {
    console.log(`I am ${this.name},${msg}`);
    console.log(this.age); // 只能在类的内部访问
  }
}
const tom = new Person("tom", 18);
console.log(tom.name);
