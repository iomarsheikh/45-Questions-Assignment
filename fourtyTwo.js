"use strict";
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function makegreat(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}
const magician_Names = ['David Copperfield', 'Houdini', 'Penn & Teller', 'Derren Brown'];
// Original list of magicians
console.log('Original Magicians:');
showMagicians(magician_Names);
// Modify the list to make them "the Great"
makegreat(magician_Names);
// List of magicians after modification
console.log('Great Magicians:');
showMagicians(magician_Names);
