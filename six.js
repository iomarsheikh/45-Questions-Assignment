"use strict";
const nameWithWhitespace = "\t \n   John Doe   \n \t";
console.log("Name with Whitespace: \"" + nameWithWhitespace + "\"");
const strippedName = nameWithWhitespace.trim();
console.log("Stripped Name: \"" + strippedName + "\"");
