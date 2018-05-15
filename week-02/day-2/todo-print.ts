'use strict';

let todoText: string = ' - Buy milk\n';
let todoList: string [] = [];

todoList.splice(0,0,'My todo:\n');
todoList.splice(1,0,todoText);
todoList.splice(2,0,' - Download games\n');
todoList.splice(3,0,'     - Diablo');

todoText = todoList.join('');

console.log(todoText);
