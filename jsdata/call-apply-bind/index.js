let userInfo = {
  name: 'longGe',
  age: 18,
  sex: 'boy',
  updateInfo: function () {
    setTimeout(() => {
      console.log(this);
      this.name = '杜'
      this.age = 17
      this.sex = 'female'
    }, 100)
  }
}
userInfo.updateInfo()
console.log(userInfo); // {name: 'longGe',age: 18,sex: 'boy',updateInfo: [Function: updateInfo]}
setTimeout(function () {
  console.log(userInfo); // {name: 'longGe',age: 18,sex: 'boy',updateInfo: [Function: updateInfo]}
}, 200)