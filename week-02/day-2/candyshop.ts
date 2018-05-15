'use strict';

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

function sweets(toBeChanged1: any, changeTo1: any, toBeChanged2: any, changeTo2: any) {
  shopItems.splice(shopItems.indexOf(toBeChanged1),1,changeTo1);
  shopItems.splice(shopItems.indexOf(toBeChanged2),1,changeTo2);
  return shopItems;
}

console.log(sweets(2,'Croissant',false,'Ice cream'));

export = sweets;
