export {};
function stringify(value: any) {
  return JSON.stringify(value);
}
stringify("string");
stringify(100);
stringify(true);
let foo: any = "string"; // any不会有任何的类型检查
foo = 200;
foo.bar();
