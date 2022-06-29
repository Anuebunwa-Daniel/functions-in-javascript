//basic functions
//what is a functions
//A function performs a task, gives us results ,and does something!
//syntax
//function theName of the Function() {
    //      //code to execute
//}
//exmaple of a basic function

function sayHello(){
    console.log('Hello');
}
//inovoking/call the function
sayHello();

//Naming functions
//1. use camelCase for your functions
//2. Make sure that name decribes what the funtion is doing 
//3. use a verb to describe what the function is doing

//Exercise
//create a function to print out good bye! in the console.

 function sayGoodbye(){
    console.log ('good bye!')
 }
 sayGoodbye();


 //Parameters and arguments
 let myName = 'Daniel';
 function sayHelloToSomeone (num, name){
    var greeting = 'Hello ';
    console.log (greeting + myName + ' you are ' + num + ' years old');
 }
 sayHelloToSomeone( 'Dahumble');


 //exercise
 let g =4;
 let y =6; 
 function addNumbers(){
    console.log (g+y);
 }
 addNumbers();

 let num1 = 20;
 let num2= 10;
 function addNum (num1, num2){
 let added =num1 +num2;
 console.log ( added);
 }
 addNum (num1, num2);

 //exercise
  var describePerson = ['good', 'bad', 'ugly' ,'lucky','beaut', 'happy']
function userName(){
    var _userName =window.prompt ('tell me your name!')
    var randomValue = Math.floor(Math.random()* describePerson.length);
    console.log(_userName + ' is ' + describePerson [randomValue ] );
}
userName();


//return
//There is a key word called return
function myAge(age){
    return age;
}
var a = myAge ( 100);
console.log(a);



function Age(){
    return 10;
}
var a = Age ( );
console.log(a);


//Variables Scope in functions
//we have two types of variable scopes
//1. Global variable
//2. Local variable

var outside =3; //global
function church(){
    var inside = 'saints'; //local
    console.log (inside);   
    console.log (outside);
}
church();





//classwork
//what value is outputed into the console and why?
//state your reasons

let val = 10;
function tester (val){
    val += 10;
    if (val < 100){
        return tester (val);
    }
return val;
}
tester(val);
console.log(val);



let values = [];
let counter = 10;
let num3 = 20;
let num4= 10;

// var  value =addNum (num3, num4);

for (let i = 0; i < counter; i++){
let num5 = i*5;
let num6 =i *i;
function addNumber (num1, num2){
    var add= num1 +num2;
    return add;
}
var x = addNumber (num6, num5);
values.push (x);
  
}
console.log(values);

// values [0] = '0' ;
// values [1] =' 6';
// console.log (values);
// values [2] ='14';
// console.log (values)
// values [3] ='24'
// values [4] ='36'
// values [5] ='50'
// values [6] = '66'
// values [7] = '84'
// values [8] = '104'
// values [9] = '126'
// console.log (values);



const f = function (a, b) {return a * b};
let z = f(4, 3);

console.log(z);