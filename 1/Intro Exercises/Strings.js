// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

console.log(parseFloat(numberOne) + parseFloat(numberTwo));

// --------------------------------------


// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

console.log((parseFloat(numberOne) + parseFloat(numberTwo)).toFixed(2));

// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals


console.log(((one + two + three)/3).toFixed(5));


// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"

const index1 = letters.indexOf('c');
console.log(letters[index1]);


// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";
console.log(fact);

// capitalize the J in Javascript

let index2 = 0

const myWord = 'javascript!'


const array = fact.split(' ')

array.forEach((word) =>{
    if(word === myWord)
    index2 = array.indexOf(word)
})


array[index2] = array[index2].charAt(0).toUpperCase() + array[index2].slice(1);
console.log(array[index2]);

const newFact = array.join(' ');
console.log(newFact);

// --------------------------------------