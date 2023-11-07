"use strict";
function create_car(manufacturer, model, options) {
    const carInfo = Object.assign({ manufacturer: manufacturer, model: model }, options);
    return carInfo;
}
// Call the function with car information and additional options
const car = create_car('Toyota', 'Camry', { color: 'Silver', features: ['Navigation', 'Sunroof'] });
// Print the returned object to check if all information was stored correctly
console.log(car);
