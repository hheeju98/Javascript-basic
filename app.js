//const age = NaN; // 자바 스크립트 일시정지

// console.log(); // false -> age is number라는 의미
const age = parseInt(prompt("How old are you?"));
if(isNaN(age)){
 // condition == true
 console.log("Please write a number");
}else{
// condition == false
console.log("Thank you for writing your age.");
}