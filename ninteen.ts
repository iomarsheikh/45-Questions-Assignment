const dinneGuests: string[] = ["Omar Sheikh", "Talha Joiya", "Bilal Ali"];

// Calculate the number of people you are inviting to dinner
const numberOfGuests = dinneGuests.length;

console.log(`You are inviting ${numberOfGuests} people to dinner.`);

// Print the updated guest list
console.log("Updated Guest List:");
for (const guest of dinneGuests) {
  console.log(`- ${guest}`);
}

console.log("\nInvitation Messages for the Updated Guest List:");
for (const guest of dinneGuests) {
  console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for a memorable evening.`);
}
