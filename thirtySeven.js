"use strict";
function make_shirt(size = 'Large', message = 'I love TypeScript') {
    console.log(`You have ordered a ${size}-sized T-shirt with the message: "${message}".`);
}
// Create large shirt with default message
make_shirt();
// Create medium shirt with default message
const mediumShirt = make_shirt('Medium');
// Create a small shirt with a custom message
const smallShirt = make_shirt('Small', 'Hello World!');
