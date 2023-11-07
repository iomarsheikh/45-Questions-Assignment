"use strict";
// Tests for equality and inequality with strings
console.log("Is 'apple' equal to 'apple'? I predict True.");
console.log('apple' === 'apple');
console.log("Is 'banana' not equal to 'cherry'? I predict True.");
console.log('banana' && 'cherry');
// Tests using the lower case function
console.log("Is 'JavaScript' lowercase equal to 'javascript'? I predict True.");
console.log('JavaScript'.toLowerCase() === 'javascript');
console.log("Is 'typescript' lowercase not equal to 'TypeScript'? I predict True.");
console.log('typescript'.toLowerCase() !== 'TypeScript');
// Numerical tests
console.log("Is 10 equal to 10? I predict True.");
console.log(10 === 10);
console.log("Is 5 not equal to 7? I predict True.");
console.log(5 && 7);
console.log("Is 15 greater than 12? I predict True.");
console.log(15 > 12);
console.log("Is 8 less than or equal to 8? I predict True.");
console.log(8 <= 8);
console.log("Is 20 less than 15? I predict False.");
console.log(20 < 15);
// Tests using "and" and "or" operators
console.log("Is (true and false) equal to false? I predict True.");
console.log(true && false === false);
console.log("Is (true or false) equal to true? I predict True.");
console.log(true || false && true);
// Test whether an item is in an array
const fruits = ['apple', 'banana', 'cherry', 'date'];
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes('banana'));
// Test whether an item is not in an array
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes('grape'));
