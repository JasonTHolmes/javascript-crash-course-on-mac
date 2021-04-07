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

/* While loops

var num = 0;

while (num < 100){
    num+=1;
    console.log(num)
}

*/

// For loops
for (let num = 0; num <= 100; num++){
    console.log(num);
}

// Data types
let yourAge = 18; // Number
let yourName = 'Bob'; // string
let name = {first: 'Jane', last: 'Doe'}; // object
let truth = false; // Boolean
let groceries = ['apple', 'banana', 'orange']; // array
let random = undefined; // undefined
let nothing = null; // value null

// String in javaScript (common methods)
let fruit = 'banana,apple,orange,blackberry';
let moreFruit = 'banana\napple';        // new line

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(',')); // split by a comma
console.log(fruit.split('')); // split by characters

// Array
let fruits =  ['banana', 'apple', 'orange', 'pineapples'];
fruits = new Array('banana', 'apple', 'orange', 'pineapples');

console.log(fruits[1]); // access value at index 2nd

fruits[0] = 'pear';
console.log(fruits);

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// Array common Methods
console.log('to string', fruits.toString());