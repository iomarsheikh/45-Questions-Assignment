"use strict";
const currentUsers = ['alice', 'bob', 'charlie', 'david', 'eve'];
const newUsers = ['frank', 'david', 'hannah', 'ALICE', 'george'];
for (const newUser of newUsers) {
    // Convert both the current username and new username to lowercase for case-insensitive comparison
    const lowercaseNewUser = newUser.toLowerCase();
    if (currentUsers.includes(lowercaseNewUser)) {
        console.log(`Sorry, the username '${newUser}' is already taken. Please choose a different username.`);
    }
    else {
        console.log(`Username '${newUser}' is available.`);
    }
}
