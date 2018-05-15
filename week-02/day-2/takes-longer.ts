'use strict';

let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.'

let quoteSplitted: string [] = quote.split('');
let positionOfIt: number = quote.indexOf('you');

quoteSplitted.splice(positionOfIt, 0, 'always takes longer than ');
quote = quoteSplitted.join('');

console.log(quote);
