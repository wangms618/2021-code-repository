"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.gender = true;
    }
    sayHi(msg) {
        console.log(`I am ${this.name},${msg}`);
        console.log(this.age); // 只能在类的内部访问
    }
}
const tom = new Person("tom", 18);
console.log(tom.name);
