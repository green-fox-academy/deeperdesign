'use strict';

const Panama = {
  cash: 0,
  name: 'Panama',
  tax: '1%',
  deposit: function (amt) {
    //this.cash += amt*(1-(parseFloat(this.tax)/100));
    this.cash += amt;
  }
};

const Cyprus = {
  cash: 0,
  name: 'Cyprus',
  tax: '5%',
  deposit: function (amt) {
    //this.cash += amt*(1-(parseFloat(this.tax)/100));
    this.cash += amt;
  }
}

const Shuffler = {
  cash: 10000,
  count: 0,
  pick: function () {
    this.cash -= 1000;
    this.count += 1;

    if(this.count % 2 == 0){
      Cyprus.deposit(1000);
      console.log(`Cyprus got 1000`);
    } else {
      Panama.deposit(1000);
      console.log(`Panama got 1000`);
    }
  }
};

Shuffler.pick(); // prints Panama got 1000
Shuffler.pick(); // prints Cyprus got 1000
Shuffler.pick(); // prints Panama got 1000
Shuffler.pick(); // prints Cyprus got 1000

console.log(Panama.cash); // 2000 
console.log(Cyprus.cash); // 2000 