"use strict";
const initialGuests = ["Ada Lovelace", "Nelson Mandela", "Marie Curie", "Grace Hopper", "Omar Sheikh", "Talha Joiya", "Bilal Ali"];
const maxGuestsAllowed = 2;
console.log("Original Guest List:");
for (const guest of initialGuests) {
    console.log(`- ${guest}`);
}
console.log("\nDue to unexpected circumstances, we can only invite two guests for dinner.\n");
// Remove guests until only two names remain
while (initialGuests.length > maxGuestsAllowed) {
    const removedGuest = initialGuests.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
// Print messages to the two guests still invited
for (const invitedGuest of initialGuests) {
    console.log(`Dear ${invitedGuest}, you are still invited to dinner.`);
}
// Clear the guest list to have an empty list
while (initialGuests.length > 0) {
    initialGuests.pop();
}
console.log("\nUpdated Guest List (Empty):");
for (const guest of initialGuests) {
    console.log(`- ${guest}`);
}
