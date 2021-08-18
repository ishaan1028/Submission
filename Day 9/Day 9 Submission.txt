
// Day 9 Tasks Submission

// Solving problems using array functions on rest countries data.
//     Get all the countries from Asia continent / region using Filter function
//     Get all the countries with a population of less than 2 lakhs using Filter function
//     Print the following details name, capital, flag using forEach function
//     Print the total population of countries using reduce function
//     Print the country which uses US Dollars as currency.


/*
// 1. Get all the countries from Asia continent / region using Filter function

let countries = new XMLHttpRequest();
countries.open("GET", "https://restcountries.eu/rest/v2/all");
countries.onload = function () {
    let countryz = JSON.parse(this.response);
    countryz = countryz.filter(v => v.region == "Asia");
    console.log("Countries from Asia", countryz);
};
countries.send();

*/



/*
// 2. Get all the countries with a population of less than 2 lakhs using Filter function

let countries = new XMLHttpRequest();
countries.open("GET", "https://restcountries.eu/rest/v2/all");
countries.onload = function () {
    let countryz = JSON.parse(this.response);
    countryz = countryz.filter(v => v.population < 200000);
    console.log("Countries w less than 2 lakh population", countryz);
};
countries.send();

*/

/*
// 3. Print the following details name, capital, flag using forEach function

let countries = new XMLHttpRequest();
countries.open("GET", "https://restcountries.eu/rest/v2/all");
countries.onload = function () {
    let countryz = JSON.parse(this.response);
    countryz = countryz.forEach(v => {
        console.log("Name", v.name);
        console.log("Capital", v.capital);
        console.log("Flag", v.flag);
    });

};
countries.send();
*/





/*
// 4.  Print the total population of countries using reduce function

let countries = new XMLHttpRequest();
countries.open("GET", "https://restcountries.eu/rest/v2/all");
countries.onload = function () {
    let countryz = JSON.parse(this.response);
  
    let sum =
        countryz.reduce((a, b) => a + b.population, 0);

    console.log("Total population of all countries", sum);
};
countries.send();

*/



// 5. Print the country which uses US Dollars as currency.

let countries = new XMLHttpRequest();
countries.open("GET", "https://restcountries.eu/rest/v2/all");
countries.onload = function () {
    let countryz = JSON.parse(this.response);
    let usdCountries = [];

    countryz.forEach(v => {

        v.currencies.forEach(s => {
            if (s.code == "USD") {
                usdCountries.push(v);
            }
        })
    });

    console.log("All countries that use USD as a currency", usdCountries);
};
countries.send();



