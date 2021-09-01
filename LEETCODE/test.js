function test(i) {
  let result = 0;
  switch (i) {
    case 1:
      result = result + i;
    case 2:
      result = result + i * 2;
    case 3:
      result = result + i * 3;
    default:
      result = result + i * 4;
  }
  console.log(result);
}
test(2)