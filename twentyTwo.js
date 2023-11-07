"use strict";
const numbers = [1, 2, 3, 4, 5];
try {
    // Intentionally try to access an index that doesn't exist (e.g., index 10)
    const value = numbers[10];
    console.log("Value at index 10:", value);
}
catch (error) {
    console.error("Array index error:", error); // Print the error object itself
}
// Corrected code: Access a valid index (e.g., index 2)
const correctedValue = numbers[2];
console.log("Value at index 2:", correctedValue);
