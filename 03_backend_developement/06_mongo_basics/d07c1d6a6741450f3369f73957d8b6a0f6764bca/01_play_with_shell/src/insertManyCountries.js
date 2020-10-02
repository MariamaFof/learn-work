/* global db */
const countries =[
{
    name: "Belgique",
    capital: "bruxelles",
    continent: "Europe",
  },
  
    {
    name: "Australia",
    capital: "Sidney",
    continent: "Europe",
    
     },
  {
    name: "Island",
    capital: "Reykjavik",
    continent: "Europe",
  }
];
db.worldAtlas.insertMany(countries)
 

