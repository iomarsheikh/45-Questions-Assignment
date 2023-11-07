"use strict";
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    const originalMagiciansCopy = magicians.slice(); // Create a copy of the original array
    for (let i = 0; i < originalMagiciansCopy.length; i++) {
        originalMagiciansCopy[i] = `the Great ${originalMagiciansCopy[i]}`;
    }
    return originalMagiciansCopy; // Return the modified array
}
const originalMagiciansList = ['David Copperfield', 'Houdini', 'Penn & Teller', 'Derren Brown'];
// Original list of magicians
console.log('Original Magicians:');
show_magicians(originalMagiciansList);
// Modify the copy of the list to make them "the Great"
const greatMagiciansList = make_great(originalMagiciansList);
// List of magicians after modification
console.log('Great Magicians:');
show_magicians(greatMagiciansList);
// Original list remains unchanged
console.log('Original Magicians (Unchanged):');
show_magicians(originalMagiciansList);
