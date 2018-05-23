'use-strict';
class DiceSet {
// You have a `DiceSet` class which has a list for 6 dices
// You can roll all of them with roll()
// Check the current rolled numbers with getCurrent()
// You can reroll with reroll()
// Your task is to roll the dices until all of the dices are 6
    dices: number[];
    readonly numOfDices: number = 6;

    roll(): number[] {
        this.dices = [];
        for(var i = 0; i < this.numOfDices; i++) {
            this.dices.push(Math.floor(Math.random() * 6 + 1));
        }
        return this.dices;
    }

    reroll(index?: number) {
        if(index == undefined) {
            for(var i = 0; i < this.numOfDices; i++) {
                this.dices[i] = Math.floor(Math.random() * 6 + 1);
            }
        } else {
            this.dices[index] = Math.floor(Math.random() * 6 + 1);
        }
    }

    getCurrent(index?: number) {
        if(index == undefined) {
            for(var i = 0; i < this.numOfDices; i++) {
                console.log(this.dices[i]);
            }
        } else {
            console.log(this.dices[index]);
        }
    }
}


function myRoll() {
  let diceSet = new DiceSet();
  diceSet.roll();
  while(diceSet.dices[0]+diceSet.dices[1]+diceSet.dices[2]+diceSet.dices[3]+diceSet.dices[4]+diceSet.dices[5] < 6*diceSet.numOfDices) {
    diceSet.reroll();
  }
  diceSet.getCurrent();
}

myRoll();
