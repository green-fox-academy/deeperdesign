'use-strict';

import {Animal} from './zoo';

interface Flyable {
    land():string;
    fly():string;
    takeOff():string;
    info():string;
}

abstract class Vehicle {
    brand: string;
    make: string;
    numberOfDorrs: number;
    fuel: string;

    constructor(brand: string, make: string, numberOfDorrs: number, fuel: string){
        this.brand = brand;
        this.make = make;
        this.numberOfDorrs = numberOfDorrs;
        this.fuel = fuel;
    }
}

class Helicopter extends Vehicle implements Flyable {

    land():string {
        return `I am going to land`;
    }

    fly():string {
        return `I am flying`;
    }

    takeOff():string {
        return `I am going to take off`;
    }

    info():string {
        return `Hello my name is ${this.brand} ${this.make}. I have ${this.numberOfDorrs} doors and I run by ${this.fuel}`;
    }
}

class Bird extends Animal implements Flyable {
    breed():string {
        return 'laying eggs';
    }
    getName():string {
        return this.name;
    }
    land():string {
        return `I am catching a worm`;
    }

    fly():string {
        return `I am going to see the forest`;
    }

    takeOff():string {
        return `I escape from the cat`;
    }

    info():string {
        return `Hello my name is ${this.name}. I'm a ${this.color} ${this.gender} ${this.age} years old bird. My weight is ${this.weight} kg`;
    }
}

//test cases
let helikopp1 = new Helicopter('HeliBrand','Helimake',2,'kerozin');
let bird = new Bird("Vereb", 10, 'male', 1, 'grey');

console.log(helikopp1.info());
console.log(bird.info());