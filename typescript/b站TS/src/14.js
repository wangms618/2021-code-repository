"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi(msg) {
        console.log(`I am ${this.name},${msg}`);
    }
}
// 类的属性在使用之前必须要在类型当中去声明，目的是给属性去做类型的标注
