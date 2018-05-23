class PostIt {
  backgroundColor: string;
  text: string;
  textColor: string;
  constructor(backgroundColor: string, text: string, textColor: string) {
    this.backgroundColor = backgroundColor;
    this.text = text;
    this.textColor = textColor;
  }
}
let postit1 = new PostIt('orange','Idea1','blue');
let postit2 = new PostIt('pink','Awesome','black');
let postit3 = new PostIt('yellow','Superb','green');

console.log(postit1);
console.log(postit2);
console.log(postit3);
