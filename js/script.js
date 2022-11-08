// let js = "Amazing";
// if (js === "Amazing") alert("javascript is fun!!!");
//
// console.log(40 + 8 + 23 -10);
// console.log(23);

// let firstName = "Emilio";
// let first = "mike";
// let myFirstJob = "programmer";
// let myCurrentJob = "Teacher";

// console.log(myCurrentJob);
// console.log(firstName);

// console.log(`Hello
// my name
// is Emilio`);
//
// const age =15;
//
// if (age >= 18) {
//     console.log('Sara can start driving license 🚗');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sara is too young. Wait another ${yearsLeft} years :)`);
// }
//
// let century;
// const birthYear = 1998;
// if (birthYear <= 2000) {
//      century = 20;
// } else {
//     century = 21;// conditional reassignment
// }
// console.log(century);


//type conversion
// const inputYear = '1991';
// console.log(Number(inputYear));
// console.log(inputYear + 18);
// console.log(Number(inputYear) + 18);
//
// console.log(Number('Jonas'));
// console.log(typeof NaN);
//
// console.log(String(23));

// type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - '3');

// 5 falsy values
// 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
// in the example below the console prints out the second response because 0 is a falsy value
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}

let height = 123;
if (height) {
    console.log('Yay height is defined');
} else {
    console.log('Height is UNDEFINED');
}