const Guests: string[] = ["Omar Sheikh", "Talha Joiya", "Bilal Ali"];

// Print the original guest list
console.log("Original Guest List:");
for (const guest of Guests) {
  console.log(`- ${guest}`);
}

// Identify the guest who can't make it and print their name
const guestWhoCantMakeIt: string = "Omar Sheikh";
console.log(`\nUnfortunately, ${guestWhoCantMakeIt} can't make it to the dinner.\n`);

// Find the index of the guest who can't make it and replace them with the new guest
const newGuest: string = "Talha Joiya";
const indexOfGuestWhoCantMakeIt: number = Guests.indexOf(guestWhoCantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
  Guests[indexOfGuestWhoCantMakeIt] = newGuest;
}

// Print the updated guest list
console.log("Updated Guest List:");
for (const guest of Guests) {
  console.log(`- ${guest}`);
}

// Print invitation messages to the new set of guests
console.log("\nInvitation Messages for the Updated Guest List:");
for (const guest of Guests) {
  console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for a memorable evening.`);
}
