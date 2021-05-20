// try { throw 2; } catch (a) {
//   console.log(a);//2
// }
// console.log(a);//error

{
  try {
    throw undefined;
  } catch (a) {
    a = 2;
    console.log(a); // 2
  }
}
console.log(a); // err