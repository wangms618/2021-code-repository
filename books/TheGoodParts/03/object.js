//对象字面量
//3.1
var empty_object = {};
var stooge = {
    // first-name: "Jerome",  first-name需要用引号括其来，因为它不是一个合法的标识符
    "first-name": "Jerome",
    "last-name": "Howard"
};

var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city:"Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:24",
        city:"Los Angeles"
    }
}

//3.2
console.log(stooge["first-name"]);
console.log(flight.departure.IATA);

//3.3
// 对象中的值可以通过赋值语句来更新。如果属性名已经存在于对象中，那么这个属性的值被替换
stooge['first-name'] = 'Jerome';
// 如果对象之前并没有拥有那个属性名，那么该属性就被扩充到该对象中
stooge['middle-name'] = 'Lester';
stooge.nickname = 'Curly';
flight.equipment = {
    model: 'Boeing 777'
};
flight.status = 'overdue';

//3.4
var x = stooge;
x.nickname = 'Curly';
var nick = stooge.nickname;
console.log(nick);


//3.5
if (typeof Object.beget !== "function") {
    Object.beget = function (o) {
        var F = function () { };
        F.prototype = o;
        return new F();
    };
}
//以原对象作为其原型的新对象
var another_stooge = Object.beget(stooge);
// 原型连接在更新时是不起作用的。当我们对某个对象作出改变时，不会触及到该对象的原型
another_stooge['first-name'] = 'Harry';
console.log(another_stooge["first-name"]);
console.log(stooge["first-name"]);



//3.6
console.log(typeof flight.number);//number
console.log(flight.manifest);//undefined
//原型链
console.log(typeof flight.toString);//function
console.log(flight.hasOwnProperty('number'));//true
console.log(flight.hasOwnProperty('constructor'));//false


//3.7
var name;
for (name in another_stooge) {
    if (typeof another_stooge[name] !== 'function') {
        console.log(name+':'+another_stooge[name]);
    }
}

//3.8
another_stooge.nickname = "Moe";
console.log(another_stooge.nickname);//Moe
delete another_stooge.nickname;
console.log(another_stooge.nickname);//Curly