let massInKg: number = 81.2;
let heightInM: number = 1.78;
'use strict';
// Print the Body mass index (BMI) based on these values

//Formula: BMI=kg/(height 2square)

let bmiCalculatedValue: number = massInKg / (heightInM ** 2);

console.log(`Your BMI calculated value is ${Math.ceil(bmiCalculatedValue)}(this is a rounded number)`);

