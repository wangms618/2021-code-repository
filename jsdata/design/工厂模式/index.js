// 将创建对象的过程封装，把共性与个性彻底分离


const junde = {
  name: '俊德',
  age: 20,
  career: 'coder'
}

const yangzong = {
  name: '杨总',
  age: 19,
  career: 'manager'
}

function User(name, age, career, work) {
  this.name = name;
  this.age = age;
  this.career = career;
  this.work = work;
}
// 构造器只是在确保共性不变
// const a = new User('王铭顺', 19, 'coder')
// console.log(a);


// function Coder(name, age) {
//   this.name = name
//   this.age = age
//   this.career = 'coder'
//   this.work = ['写代码', '改bug', '摸鱼']
// }
// function ProductManager(name, age) {
//   this.name = name
//   this.age = age
//   this.career = 'product manager'
//   this.work = ['订会议室', '写PRD', '催更']
// }

// function Factory(name, age, career) {
//   switch (career) {
//     case 'coder':
//       return new Coder(name, age); break;
//     case 'product manager':
//       return new ProductManager(name, age); break;
//   }
// }


// 降低耦合度
function Factory(name, age, career) {
  switch (career) {
    case 'coder':
      work = ['写代码', '改bug', '摸鱼']; break;
    case 'product manager':
      work = ['订会议室', '写PRD', '催更']; break;
  }
  return new User(name, age, career, work)
}

