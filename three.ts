const personName: string = "Muhammad Omar Sheikh"; 

const nameInLowerCase: string = personName.toLowerCase();

const nameInUpperCase: string = personName.toUpperCase();

function toTitleCase(name: string): string {
  return name.replace(/\w\S*/g, (text) => {
    return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
  });
}

const nameInTitleCase: string = toTitleCase(personName);

console.log("Original Name: " + personName);
console.log("Name in Lowercase: " + nameInLowerCase);
console.log("Name in Uppercase: " + nameInUpperCase);
console.log("Name in Title Case: " + nameInTitleCase);
