"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  假定这个 nums 来自一个明确的接口
const nums = [110, 120, 130, 140];
const res = nums.find((i) => i > 0); // 系统判断返回值可能是undefined或number
const square = res * res;
// 使用as进行类型断言
const num1 = res; // 断言res就是number,num1就是数字
// 使用<>断言
const num2 = res; // JSX 下不能使用
// 类型断言不是类型转换，并不是把一个类型转换为了另外一个类型，它只是在编译过程中的概念
