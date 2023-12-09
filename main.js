var firstName = "hamzah";
var lastName = "syed";
//           true                   false   
if (firstName === "hamzah" || firstName === "okasha") {
    console.log("you're allowed");
}
function greet() {
    console.log("hello hamza");
}
function sum() {
    console.log(2 + 2);
}
greet();
sum();
greet();
function greet2(name) {
    console.log("hello", name);
}
greet2("Hamzah");
greet2("Ali");
function sum1(num1, num2) {
    console.log(num1 + num2);
}
sum1(5, 10);
function sum2(num1, num2) {
    console.log(num1 + num2);
    return num1 + num2;
}
15;
var ans = sum2(5, 10); //15
function multiply(num1) {
    console.log(num1 * 2);
}
//15
multiply(ans);
//multiply()
var fruit1 = "apple";
var furit2 = "orange";
var fruit3 = "banana";
var furit4 = "pineapple";
var subject = ["math", "science", "english", "history"];
var age = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var a = [true, false, true];
//      0          1         2        3 //index number
var fruits = ["apple", "orange", "banana", "pineapple",];
console.log(fruits[1]);
console.log(fruits[2], fruits[3]);
var fruits2 = ["apple", "orange", "banana", 4];
var menu = ["kofta", "khree", "biryani", "gajar ka halwa"];
var myfirstpopped = menu.pop();
console.log(myfirstpopped);
var pushedreturn = menu.push("chicken tikha", "chicken karahi");
console.log(pushedreturn);
menu.pop();
console.log(menu);
var fruits3 = ["banana", "orange", "apple", "mango"];
var b = fruits.splice(2, 0, "lemo", "kiwi");
console.log(a);
