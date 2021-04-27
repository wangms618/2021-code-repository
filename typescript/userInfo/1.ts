//参数需要满足 name age 接口
interface IUser{
    name:string;//接口定义区分号隔开
    age:number;
    hometown:string;
}
const yxy = {
    name:'袁欣雨',
    age: 17,
    hometown:'宜春'
}
const getUserInfo = (user:IUser) =>{

}
getUserInfo(yxy);