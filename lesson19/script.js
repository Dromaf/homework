"use strict";

/*TASK1*/
function isNumberInRange(a) {
    if (a > 0 && a < 10){
        console.log(true);
    } else {
        console.log(false);
    }
    return
}
isNumberInRange(prompt("Ввведите число", ""));
/*TASK2*/
function isEven(even) {
    if (even%2 == 0) {
        console.log(true);
    }else {
        console.log(false);
    }
}
isEven(prompt("Ввведите число", ""));
/*TASK3*/
let value = +prompt("value?", "");

switch(value){
    case 0:
        console.log('0');
        break;
    case 1: 
        console.log('1');
        break;
    case 2:
    case 3:
        console.log('2,3');
        break;
    default:
        console.log('Я таких значений не знаю');
}
/*TASK4*/

function min(){
    let a = (prompt("Ввведите число a", ""));
    let b = (prompt("Ввведите число b", ""));
    if (a < b) {
        return console.log(`Меньше число ${a}`);
    } else if (a > b){
        return console.log(`Меньше число ${b}`);
    }
}
min();