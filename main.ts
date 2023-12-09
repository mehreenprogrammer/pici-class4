let firstName="hamzah"
let lastName="syed"

//           true                   false   
if (firstName==="hamzah"||firstName==="okasha"){
console.log ("you're allowed")
}

function greet(){
    console.log("hello hamza")
}

function sum (){
    console.log(2+2)
}

greet();
sum();
greet();

function greet2 (name:string){
    console.log("hello",name);
}
greet2("Hamzah");
greet2 ("Ali");

function sum1 (num1:number,num2:number){
    console.log(num1+num2)
}

sum1(5 ,10);
function sum2(num1: number, num2:number){
console.log(num1+ num2);
return num1+num2
}

15
let ans =sum2(5,10);//15
function multiply(num1: number){
    console.log(num1*2)
}
            //15
         multiply(ans)    
         
         


//multiply()
let fruit1="apple";
let furit2="orange";
let fruit3="banana";
let furit4="pineapple";

let subject:string[]=["math", "science","english","history"];
let age:number[]=[10,20,30,40,50,60,70,80,90,100];

let a=[true,false,true];

    //      0          1         2        3 //index number
let fruits=["apple","orange","banana","pineapple",];
        
console.log(fruits[1]);
console.log(fruits[2],fruits[3]);

let fruits2=["apple","orange","banana",4];


let menu=["kofta","khree","biryani","gajar ka halwa"];

let myfirstpopped =menu.pop();

console.log( myfirstpopped);

let pushedreturn = menu.push("chicken tikha","chicken karahi");

console.log(pushedreturn);

menu.pop();
         
console.log(menu);




const fruits3=["banana","orange","apple","mango"];

let b= fruits.splice(2,0,"lemo","kiwi");

console.log(a);

