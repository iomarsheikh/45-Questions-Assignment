"use strict";
const originalGuests = ["Ada Lovelace", "Nelson Mandela", "Marie Curie"];
console.log("Original Guest List:");
for (const guest of originalGuests) {
    console.log(`- ${guest}`);
}
const guestUnableToAttend = "Albert Einstein";
console.log(`Unfortunately, ${guestUnableToAttend} can't make it to the dinner.\n`);
const newInvitee = "Grace Hopper";
const indexGuestUnableToAttend = originalGuests.indexOf(guestUnableToAttend);
if (indexGuestUnableToAttend !== -1) {
    originalGuests[indexGuestUnableToAttend] = newInvitee;
}
console.log("Good news! We found a bigger dinner table.\n");
originalGuests.unshift("Omar Sheikh");
originalGuests.splice(2, 0, "Talha Joiya");
originalGuests.push("Bilal Ali");
console.log("Updated Guest List:");
for (const guest of originalGuests) {
    console.log(`- ${guest}`);
}
console.log("\nInvitation Messages for the Updated Guest List:");
for (const guest of originalGuests) {
    console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for a memorable evening.`);
}
