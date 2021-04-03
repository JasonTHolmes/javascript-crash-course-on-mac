console.log('hello');

// alert('hello this is jason');

// how to write a comment inline

// variables
var b = 'smoothie';
console.log(b);

var someNumber = 45;
// console.log(someNumber);

// Manipulate DOM with JavaScript
/* ... Just a fancy way of saying 
change HTML with JavaScript. */

// var age = prompt('What is your age?');

// document.getElementById('someText').innerHTML = age;

// Numbers in JavaScript
var num1 = 10;

// increment num1 by 1
num1 = num1++;

// Decrement num1 by 1
num1 = num1--;
console.log(num1);

// Divide, multiply *, remainder %
console.log(num1 % 6);

// increment/decrement by any number you want.
num1 += 10;
console.log(num1);

/* Functions
1. create a function
2. call the function
*/

// Create
function fun(){
console.log('this is a function');
}

// Call
fun()

/* Lets create a function that takes in a name
and says hello followed by your name.

For example:

name: "Jason"
Return: "Hello Jason"
*/


function greeting(yourName) {
    var result = 'hello' + ' ' + yourName; // string concatenation.
    console.log(result);
}

// var name = prompt('What is your name?');
// greeting(name);

// How do arguments work in functions?
// How do  we add 2 numbers  together in a function?

function sumNumbers(num1, num2) {
    var result = num1 + num2;
    console.log(num1 + num2);
}

sumNumbers(10, 10);

// While loops

var num = 0;

while (num < 100){
    num+=1;
    console.log(num)
}