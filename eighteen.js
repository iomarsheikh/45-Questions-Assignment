"use strict";
const dreamDestinations = ["Paris", "Tokyo", "Santorini", "New York City", "Machu Picchu"];
console.log("Original Order:");
console.log(dreamDestinations.join(', '));
const sortedAlphabetically = [...dreamDestinations].sort();
console.log("\nAlphabetical Order (without modifying the original list):");
console.log(sortedAlphabetically.join(', '));
console.log("\nOriginal Order (still intact):");
console.log(dreamDestinations.join(', '));
const sortedReverseAlphabetically = [...dreamDestinations].sort().reverse();
console.log("\nReverse Alphabetical Order (without modifying the original list):");
console.log(sortedReverseAlphabetically.join(', '));
console.log("\nOriginal Order (still intact):");
console.log(dreamDestinations.join(', '));
dreamDestinations.reverse();
console.log("\nReversed Order (modifying the original list):");
console.log(dreamDestinations.join(', '));
dreamDestinations.reverse();
console.log("\nOriginal Order (reversed again to return to its original order):");
console.log(dreamDestinations.join(', '));
dreamDestinations.sort();
console.log("\nAlphabetical Order (modifying the original list):");
console.log(dreamDestinations.join(', '));
dreamDestinations.sort((a, b) => b.localeCompare(a));
console.log("\nReverse Alphabetical Order (modifying the original list):");
console.log(dreamDestinations.join(', '));
