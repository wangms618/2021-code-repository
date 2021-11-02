"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function stringify(value) {
    return JSON.stringify(value);
}
stringify("string");
stringify(100);
stringify(true);
let foo = "string"; // any不会有任何的类型检查
foo = 200;
foo.bar();
