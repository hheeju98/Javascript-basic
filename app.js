//const age = NaN; // 자바 스크립트 일시정지

// console.log(); // false -> age is number라는 의미
const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0){
    console.log("Please write a number");
}else if (age < 18){
console.log("Your are too young.");
}else if(age >= 18 && age <= 50){
    console.log("You can drink");
}else{
console.log("You can't drink");
}