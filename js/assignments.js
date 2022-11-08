"use strict";
//Lecture one Values and variables
// let country = "USA";
// let continent = "North America";
// let population = 579;
//
// console.log(country);
// console.log(continent);
// console.log(population);

//Data Types lecture
// let isIsland = true;
// let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// let, const and var lecture
// const language = "English";
// const country = "USA";
// const continent = "North America";
// console.log(typeof isIsland);

//Math operators
// const now = 2037;
// const ageEmilio = now  - 1986;
// const ageSarah = now - 2018;
// console.log(ageEmilio, ageSarah);
// // const firstName = 'Emilio';
// const lastName = 'Benavides';
// console.log(firstName + ' ' + lastName);
// console.log(ageEmilio * 2, ageEmilio / 10, 2 ** 3);

// Assignment Operators
// let x = 10 +5; //15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++;// x = x +1
// x--;
// x--;
// console.log(x);

// Comparison Operators
// console.log(ageEmilio > ageSarah);

//Basic operator lec quiz
// console.log(population / 2);
// console.log(population++);
// console.log(population++);
// let description = country + " is in " + continent + " and its " + population + " million people speak " + language + '.';
//
// console.log(description);

//Coding Challenge #1
let marksHeight = 1.69;
let marksWeight = 78;
let johnsHeight = 1.95;
let johnsWeight = 92;

let marksBMI = marksWeight / marksHeight ** 2;
console.log(marksBMI);
let johnsBMI = johnsWeight / johnsHeight ** 2;
console.log(johnsBMI);
console.log(marksBMI > johnsBMI);

//Temperate literals
// const firstName = 'Emilio';
// const job = 'Programmer';
// const birthYear = 1986;
// const year = 2037;
// const emilio = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(emilio);

// Coding Challenge #2

if (marksBMI > johnsBMI) {
    console.log(`Mark's BMI is higher than John's`)
} else {
    console.log(`John's BMI is higher than Mark's`)
};


