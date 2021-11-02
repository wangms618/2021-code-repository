//  函数类型
export {};
// function func1(a: number, b?: number): string {
//   // 两个参数类型设置为number,返回值设置为string
//   // b?意思是可选参数，可以选择传或不传
//   return "func1";
// }
    
// function func1(a: number, b: number = 10): string { // b有默认值，后续不传b的值也不会报错
//     // 两个参数类型设置为number,返回值设置为string
//     return "func1";
// }
function func1(a: number, b: number = 10,...rest:number[]): string { // ...rest后续任意参数
    // 两个参数类型设置为number,返回值设置为string
    return "func1";
}
func1(100, 200);


const func2: (a: number, b: number) => string = function (a: number, b: number): string{
    return 'func2'
}