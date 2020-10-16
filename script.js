let country = {     
    name: "Hungary", 
    capital: "Budapest",
    president:"Janos Ader",
    square: 90030,
    population: 9772765,
    
    toString: function() {
        return "Hungary" + this.name;
      }
  };

  console.log(country.name);
  console.log(country.capital);
  console.log(country.president);
  console.log(country.square);
  console.log(country.population);