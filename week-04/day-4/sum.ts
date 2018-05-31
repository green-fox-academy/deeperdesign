'use-strict';

export class myClass {
    myList:any [];

    constructor(myList:any [] = []) {
        this.myList = myList;
    }
    sum() {
        if (typeof this.myList[0] === 'string') {
            let sumofNumbers:string = '';
            for(let i:number = 0; i< this.myList.length; i++){
                sumofNumbers += this.myList[i]
            }
            return sumofNumbers;    
        }
        else if (typeof this.myList[0] === 'number') {
            let sumofNumbers:number = null;
            for(let i:number = 0; i< this.myList.length; i++){
                sumofNumbers += this.myList[i]
            }
            return sumofNumbers;
        }
        else if (typeof this.myList[0] === 'undefined') {
            let sumofNumbers:number = null;
            console.log('Please add some value');
            return null;
        }
    }
}