function sayHello(nameOfPerson, age){
    console.log("Hello my name is "+ nameOfPerson + " and I'm " + age);
}

sayHello("nico", 10);
sayHello("dal", 23);

function plus(a, b){
    console.log(a + b);
}

function divide(a,b){
    console.log(a / b);
}
// a , b 는 function박스 안에서만 존재한다. console.log(a); 불가
plus(8, 60);
divide(98, 2);

const player = {
name: "nico",
sayHello: function(OtherPersonsName){
console.log("hello! " + OtherPersonsName+ " nice to meet you");
    },
};
console.log(player.name);
player.sayHello("lynn");
player.sayHello("nico");


