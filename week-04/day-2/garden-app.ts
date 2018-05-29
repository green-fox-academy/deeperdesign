'use-strict';

class Garden {
    wateramount: number;
    constructor(wateramaount: number = 0) {
    }
    waterTHePlants(amount: number) {
        this.wateramount += amount;
    }
}

class Flower extends Garden {
    color: string;
    protected waterAmount: number;

    constructor(color: string, waterAmount: number = 0, wateramount: number) {
        super();
        this.color = color;
        this.waterAmount = waterAmount;
    }
    status():string {
        let statusMessage: string = ``;
        if (this.waterAmount < 10) {
            statusMessage = `The ${this.color} flower needs water`;
        } else {
            statusMessage = `The ${this.color} flower doesn't need water`;
        }
        return statusMessage;
    }
    giveWater() {
        this.waterAmount += this.watering*0,75
        return this.waterAmount;
    }
}

class Tree extends Garden {
    color: string;
    protected waterAmount: number;

    constructor(color: string, waterAmount: number = 0) {
        super();
        this.color = color;
        this.waterAmount = waterAmount;
    }
    status():string {
        let statusMessage: string = ``;
        if (this.waterAmount < 10) {
            statusMessage = `The ${this.color} tree needs water`;
        } else {
            statusMessage = `The ${this.color} tree doesn't need water`;
        }
        return statusMessage;
    }
    giveWater() {
        this.waterAmount += this.watering*0,75
        return this.waterAmount;
    }
}


let plants:any [] = [];

let flower1 = new Flower('yellow');
plants.push(flower1);
let flower2 = new Flower('blue');
plants.push(flower2);
let tree1 = new Tree('purple');
plants.push(tree1);
let tree2 = new Tree('orange');
plants.push(tree2);

for(let i: number = 0; i < plants.length; i++) {
    console.log(plants[i].status());
}