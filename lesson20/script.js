"use strict";
/*1. Задание: Напишите функцию fib(n), которая возвращает n-е число Фибоначчи. 
Последовательность чисел Фибоначчи имеет формулу Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.
Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....
Главное условие, чтобы функция работала быстро.*/

/*function fib(n) {
    if (n <= 1) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}
console.log(fib(30));*/

function fib(n) {

    let fa = 1, fb = 1;
    for (let i = 3; i <= n; i++) {
    let fc = fa + fb;
        fa = fb;
        fb = fc;
    }
    return fb;
  }
console.log(fib(30));

/*2. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50.
Посчитайте количество итераций, необходимых для этого (итерация -
это проход цикла), и запишите его в переменную num.*/

function nums(n) {
    let num = 0;
    while (n > 50) {
        n /= 2;  
        num++;  
    if(n < 50){
        console.log(num);
        console.log(n);
        break;
    }} 
}
console.log(nums(1000));


