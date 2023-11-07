const againNames: string[] = ["Omar", "Talha", "Bilal", "Usman", "Mubashir"];
const greetingMessage: string = "Hello, ";

// Print a personalized message to each person
for (const name of againNames) {
  console.log(`${greetingMessage}${name}!`);
}
