export {};
class Person {
  name: string; // = 'init name;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  sayHi(msg: string): void {
    console.log(`I am ${this.name},${msg}`);
  }
}

// 类的属性在使用之前必须要在类型当中去声明，目的是给属性去做类型的标注
