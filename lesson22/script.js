'use strict';

/*1. Дан массив с числами (Пример: var arr = [2, -5, 1, -2, 0, -3, 2, -14]) - массив может быть и другим.
1) В начале вам нужно убрать из него все отрицательные числа используя filter
2) Извлесь корень из каждого значения этого массива и записать в переменную. Используя map.
3) Вывести массив в консоль */

let arr = [36, -5, 121, -2, 0, -3, 25, -14];

let result = arr.filter(function(number) {
    return number > 0;
  });

result = result.map(function(item) {
  return  Math.sqrt(item);
});

 console.log(result); 

/*2. Дан массив с числами (Пример: var arr = [4, 3, 5, 5, 0, 4, 8, 6]) - массив может быть и другим.
Нужно найти сумму элементов от начала и до нуля. (В примере это первые 4 элемента)
Использовать функция reduce */

arr = [4, 3, 5, 5, 0, 4, 8, 6];

result = arr.reduceRight(function(sum, current ) {
    if (current == 0) {
		return false;
  } 
  return sum + current;
  }, 0);
  
console.log( result );

/*3. Напишите функцию summArguments, которая сложит все аргументы переданные в функцию. Например
summArguments(10, 1, 2, 5); // 18
summArguments(10); // 10 */


function summArguments() {
  let summ = 0;
  for(let i = 0; i < arguments.length; i++){
  summ+=arguments[i];
}
  return summ;
}
  console.log(summArguments(10, 1, 2, 5) );
  console.log(summArguments(10));
