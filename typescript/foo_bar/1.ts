// ts是js超集
interface Foo{
  type: 'foo'
}
interface Bar{
  type: 'bar'
}
type All = Foo | Bar;
function handleValue(val: All) {// val 需要 All 类型
  switch (val.type) {
    case 'foo':
      break;
    case 'bar':
      break;
    default:
  }
}