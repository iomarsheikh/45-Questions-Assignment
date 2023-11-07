"use strict";
const personName = "Muhammad Omar Sheikh";
const nameInLowerCase = personName.toLowerCase();
const nameInUpperCase = personName.toUpperCase();
function toTitleCase(name) {
    return name.replace(/\w\S*/g, (text) => {
        return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    });
}
const nameInTitleCase = toTitleCase(personName);
console.log("Original Name: " + personName);
console.log("Name in Lowercase: " + nameInLowerCase);
console.log("Name in Uppercase: " + nameInUpperCase);
console.log("Name in Title Case: " + nameInTitleCase);
