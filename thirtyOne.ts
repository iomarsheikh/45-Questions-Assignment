const userNames = ['admin', 'Alice', 'Bob', 'Charlie', 'David', 'Eve'];

if (userNames.length === 0) {
  console.log("We need to find some users!");
} else {
  for (const username of userNames) {
    if (username === 'admin') {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
}

// Removing all usernames to test the "empty list" case
userNames.length = 0;

if (userNames.length === 0) {
  console.log("We need to find some users!");
}
