'use strict';
// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

let dailyHours: number = 6;
let semesterLenghtDays: number = (17*7)-(17*2); //supposed to be 85
let answer1: number = dailyHours * semesterLenghtDays; //supposed to be 510

console.log(`${answer1} hours is spent with coding in a semester by an attendee`);

let semesterHorswithoutWeekends: number = semesterLenghtDays*24; //suuposed to be 2040
let semesterCodingHours: number = 52*17; //supposed to be 884
let answer2: number = (semesterCodingHours / semesterHorswithoutWeekends)*100;

console.log(`${answer2}% percentage of the coding hours in the semester, weekends not counted.`);