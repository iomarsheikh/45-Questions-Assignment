"use strict";
const usernames = ['admin', 'Alice', 'Bob', 'Charlie', 'David', 'Eve'];
for (const username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
