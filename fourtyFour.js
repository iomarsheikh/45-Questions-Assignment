"use strict";
function order_sandwich(...items) {
    console.log('You have ordered a sandwich with the following items:');
    for (const item of items) {
        console.log(`- ${item}`);
    }
    console.log('Enjoy your sandwich!\n');
}
// Call the function with different numbers of arguments
order_sandwich('Ham', 'Cheese', 'Lettuce');
order_sandwich('Turkey', 'Tomato');
order_sandwich('Peanut Butter', 'Jelly', 'Banana', 'Honey');
