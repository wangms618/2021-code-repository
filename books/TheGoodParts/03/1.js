let num = 1,
  f = 1.0;
// 冯诺依曼
  // console.log(typeof num,typeof f);// ctrl+/快速注释
  let name = '杨周林';
  console.log(typeof name,name.length);//面向对象的写法
  // 姓 与 名
  // 姓一定是确定的，两个字的姓，忽略 枚举
  let lastName = name[0];
  // 除了姓之外就是名
  console.log(lastName);
  //文档 https://www.w3school.com.cn/js/jsref_substring.asp
  let firstName = name.substring(1);
  console.log(firstName);
  // 优先级
  console.log(1 + lastName); // 拼接字符串
  console.log(1 + true);
  // let gf = undefined;
  let gf = null;//声明了，但是没有值
  // JS typeof 是有点错位的，精神大条
  console.log(typeof gf);//undefined;object
  let xiaodong = {
    name:'小董',
    age:20,
    hometown:'昭通'
  }
  console.log(xiaodong, typeof xiaodong);

  let arr = [1,2,3];
  console.log(typeof arr);

  let a = 1;
  console.log(typeof a);
    a ="abc";
  console.log(typeof a);

  // let func = () => {}
  function func(){

  }
  //除了基本数据类型，只有对象，
  console.log(typeof func);//the bad parts

  const b = 1.01;//常量，常量是不可变的
  // 貌似对象 ？
  // 
  console.log(b.toFixed(1));
  //b = 2.1;
  //console.log(b);
  //对象当然是对象 一切皆是对象，JSON Object 对象，是对象的一种
  const obj = {
    name:'王杰',
    isSingle: true
  }
  obj.isSingle = false;
  console.log(obj);