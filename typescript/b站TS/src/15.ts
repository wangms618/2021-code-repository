export {};
class Person {
  public name: string; // = 'init name;
  private age: number; // 表示age属性是一个私有属性
  protected gender: boolean; // 受保护的
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

// console.log(tom.age); // age无法访问，因为他被private修饰成了私有属性
// console.log(tom.gender); // 无法访问，也是不能读取的
// protected和private的区别

class Student extends Person {
    constructor(name: string, age: number) {
        super(name, age)
        console.log(this.gender); // 可以访问
    }
    static create(name: string, age: number) {
        return new Student(name,age)
    }
}
// 得出protected只允许在子类当中去访问对应的成员

// 构造函数修饰符默认是public,如果是private，那么他不能被实例化，也无法被继承
// 解决方法 ： 在类的内部添加静态方法，在静态方法中去创建类型的实例

const jack = Student.create('jack',18)
