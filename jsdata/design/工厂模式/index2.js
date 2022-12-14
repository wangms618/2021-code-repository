// 抽象工厂
// 普通工厂没有遵守开放封闭原则（对拓展开放，对修改封闭）


class MobilePhoneFactory {
  // 提供操作系统的接口
  createOS() {
    throw new Error('抽象工厂方法不允许直接调用， 你需要将我重写')
  }
  // 提供硬件的接口
  createHardWare() {
    throw new Error('抽象工厂方法不允许直接调用， 你需要将我重写')
  }
}

class wnStarFactory extends MobilePhoneFactory {
  createOS() { // 提供安卓系统
    return new AndroidOS()
  }

  createHardWare() { // 提供高通硬件
    return new QualcommHardWare()
  }
}


// ----------------------------------------
// 定义操作系统这类产品的抽象产品类
class OS {
  controlHardWare() {
    throw new Error('抽象产品方法不允许直接调用， 你需要将我重写')
  }
}

class AndroidOS extends OS {
  controlHardWare() {
    console.log('我会用安卓的方式去操作硬件');
  }
}

class AppleOS extends OS {
  controlHardWare() {
    console.log('我会用苹果的方式去操作硬件');
  }
}


// ----------------------------------------
class HardWare{
  operateByOrder() {
    throw new Error('抽象产品方法不允许直接调用， 你需要将我重写')
  }
}

class QualcommHardWare extends HardWare {
  operateByOrder() {
    console.log('我会用高通的方式运转');
  }
}

class HuaWei extends HardWare {
  operateByOrder() {
    console.log('我会用华为的方式运转');
  }
}

const myPhone = new wnStarFactory()
const myOS = myPhone.createOS()
const myHardWare = myPhone.createHardWare()

myOS.controlHardWare()
myHardWare.operateByOrder()