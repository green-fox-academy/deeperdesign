'use strict';

// Create a function that
// - takes a filename as a parameter,
// - reads a csv file which rows contains data in the following format: <person name>;<birthdate in YYYY-MM-DD format>;<city name>
// - returns the year when the most births happend.
// You can find such a csv file in this directory: births.csv
// If you pass births.csv to your function, the result should be 2006.


declare function require(path: string): any;
const fs = require('fs');
let charEncoding = 'utf-8';


function mostBirths(filename: string) {

  //Read the file
  function readfile(): string {
    let filecontent: string = fs.readFileSync(filename, charEncoding);
    return filecontent;
  }

  let namesAndBirthdatesArray: string[] = readfile().split(';');
  let nthElement: number = -1;
  let datesArray: string[] = [];
  let yearsArray: string[] = [];

  //Create an array of the dates
  for (let i: number = 0; i < namesAndBirthdatesArray.length; i++) {
    nthElement += 2;
    if (namesAndBirthdatesArray[nthElement]) {
      datesArray.push(namesAndBirthdatesArray[nthElement]);
    }
  }

  //Strip down the dates into years only
  for (let i: number = 0; i < datesArray.length; i++) {
    yearsArray.push(datesArray[i].slice(0, -6));
  }

  //Count occurances in the array and return the highest
  function countOccurances() {
    let counter: Object = {};

    for (let i: number = 0; i < yearsArray.length; i++) {
      let letter = yearsArray[i];
      if (counter[letter]) {
        counter[letter]++;
      } else {
        counter[letter] = 1;
      }
    }

    let objectKey: number = 0;
    let objectName: string = '';

    for (let i: number = 0; i < Object.keys(counter).length; i++) {
      if (counter[Object.keys(counter)[i]] > objectKey) {
        objectKey = counter[Object.keys(counter)[i]];
        objectName = Object.keys(counter)[i];
      }
    }
    console.log(`IN year of ${objectName} happened the most births: ${objectKey}`);

  }

  countOccurances();

}

mostBirths('births.csv');