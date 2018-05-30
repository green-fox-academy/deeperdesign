'use-strict';

abstract class Instrument {
    protected name: string;

    constructor(name:string) {
        this.name = name;
    }

    abstract play():void;
}
abstract class StringedInstrument extends Instrument {
    numberOfstring: number;

    constructor(name: string, numberOfstring: number){
        super(name);
        this.numberOfstring = numberOfstring;
    }

    play():void {
        this.sound();
    }
    
    abstract sound():void;
}

class ElectricGuitar extends StringedInstrument {
    numberOfstring: number;
    mySound: string;

    constructor(numberOfstring: number = 6, mySound: string = 'twang') {
        super('Electric Guitar', numberOfstring);
        this.numberOfstring = numberOfstring;
        this.mySound = mySound;
    }

    sound():void {
        console.log(`${this.name} a ${this.numberOfstring}-stringed instrument that goes ${this.mySound}`);
    }

}

class BassGuitar extends StringedInstrument {
    numberOfstring: number;
    mySound: string;

    constructor(numberOfstring: number = 4, mySound: string = 'Duum-duum-duum') {
        super('Bass Guitar', numberOfstring);
        this.numberOfstring = numberOfstring;
        this.mySound = mySound;
    }

    sound():void {
        console.log(`${this.name} a ${this.numberOfstring}-stringed instrument that goes ${this.mySound}`);
    }

}

class Violin extends StringedInstrument {
    numberOfstring: number;
    mySound: string;

    constructor(numberOfstring: number = 4, mySound: string = 'Screech') {
        super('Violin', numberOfstring);
        this.numberOfstring = numberOfstring;
        this.mySound = mySound;
    }

    sound():void {
        console.log(`${this.name} a ${this.numberOfstring}-stringed instrument that goes ${this.mySound}`);
    }

}

//Export app-instrument.ts calls these classes, a test class is present there
export {Instrument};
export {StringedInstrument};
export {ElectricGuitar};
export {BassGuitar};
export {Violin};