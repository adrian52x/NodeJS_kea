// Homework review

const numbers = [1, 2, 3, 4];

//spread operator
const copiedNumbers = [...numbers];
const anotherCopiedNumbers = numbers.slice();

anotherCopiedNumbers.pop(); // remove last element

const whynot = numbers; // this one has reference to the original array and not copied

console.log(numbers);
console.log(whynot);
console.log(anotherCopiedNumbers);