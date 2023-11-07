function create_car(manufacturer: string, model: string, options: { [key: string]: any }): Record<string, any> {
    const carInfo: Record<string, any> = {
      manufacturer: manufacturer,
      model: model,
      ...options,
    };
  
    return carInfo;
  }
  
  // Call the function with car information and additional options
  const car = create_car('Toyota', 'Camry', { color: 'Silver', features: ['Navigation', 'Sunroof'] });
  
  // Print the returned object to check if all information was stored correctly
  console.log(car);
  