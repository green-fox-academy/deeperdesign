'use-strict';

export abstract class Animal {
    protected name: string;
    protected age: number;
    protected gender: string;
    protected weight: number;
    protected color: string;

    constructor(name: string, age?: number, gender?: string, weight?: number, color?: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.weight = weight;
        this.color = color;
    }

    abstract getName():void;
    abstract breed():void;
}

class Mammal extends Animal {

    //water or land
    location: string;

    constructor(name:string, location: string = 'land'){
        super(name);
        this.location = location;
    }

    getName():string {
        return this.name
    }

    breed():string {
        return 'pushing miniature versions out'
    }

    findIt():string {
        return `Hello I'm a(n) ${this.name}, You can find me at ${this.location}`
    }

}

abstract class Eggers extends Animal {
    constructor(name:string) {
        super(name);
    }

    breed():string {
        return 'laying eggs';
    }
}

class Reptile extends Eggers {

    constructor(name:string){
        super(name);
    }

    getName():string {
        return this.name
    }
}

class Bird extends Eggers {
    fly: boolean;

    constructor(name:string, fly: boolean = true){
        super(name);
        this.fly = fly;
    }

    getName():string {
        return this.name
    }

    canFly():string {
        return `This ${this.name} can fly: ${this.fly}`
    }
}

/*let reptile = new Reptile("Crocodile");
let mammal = new Mammal("Koala");
let bird = new Bird("Parrot");
let bird2 = new Bird("DagadtVereb",false);

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed());

console.log(bird.canFly());
console.log(bird2.canFly());
console.log(mammal.findIt());*/