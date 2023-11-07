const countriesData = [
    {
      name: "United States",
      capital: "Washington, D.C.",
      population: 331002651,
      officialLanguage: "English",
    },
    {
      name: "Canada",
      capital: "Ottawa",
      population: 37742154,
      officialLanguage: "English, French",
    },
    {
      name: "United Kingdom",
      capital: "London",
      population: 67886011,
      officialLanguage: "English",
    },
    {
      name: "France",
      capital: "Paris",
      population: 65273511,
      officialLanguage: "French",
    },
  ];
  
  console.log("Information About Countries:");
  for (const country of countriesData) {
    console.log(`Name: ${country.name}`);
    console.log(`Capital: ${country.capital}`);
    console.log(`Population: ${country.population}`);
    console.log(`Official Language(s): ${country.officialLanguage}`);
    console.log("\n");
  }
  