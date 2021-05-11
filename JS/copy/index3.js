function foo() {
  var myName = '欧文'
  let test1 = 1
  const test2 = 2
  var innerBar = {
    setName: function (newName) {
      myName = newName
    },
    getNane: function () {
      console.log(test1);
      return myName
    }
  }
  return innerBar
}

var bar = foo()
bar.setName('禹嘉')
bar.getNane(bar.getName())