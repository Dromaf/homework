'use strict';
/*1. Написать функцию с названием searchArrayWord и ищет слово в массиве. 
    Она принимает 2 параметра - 
   1) Слово которое нужно найти
   2) Массив в котором находятся элементы со словами. Например ['Кот', 'Собака', 'Жираф' ]
Функция должна вернуть true или false*/

function searchArrayWord(a,b){
    if (b.indexOf(a) >= 0 ){
        return true;
    }
    else {
        console.log(b.indexOf(a));
        return false;
       
    }
}

console.log(searchArrayWord("Кот", ['Кот', 'Собака', 'Жираф' ]));

/*2. Определить среднее арифмитическое чисел из массива.
   var arr = [1, 2, 3, 7, 6, 9];*/

    let arr = [1, 2, 3, 7, 6, 9];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    sum /= arr.length;    
    console.log( sum );


/*3. Перевернуть элементы массива задом наперед. Не используя reverse(мы еще не учили его)
   var arr2 = [1, 3, 5, 6, 7, 9];*/
   let arr2 = [1, 3, 5, 6, 7, 9];
   let arrNoEmpty;
   for(let i=0,j=arr2.length-1; i<j; i++,j--)
   {
       arrNoEmpty = arr2[j];
       arr2[j] = arr2[i];
       arr2[i] = arrNoEmpty;
   }
   console.log(arr2);


/*4. Дан объект {html:'HTML', css: 'CSS', js: 'ECMA'}
Нужно получить массив ключей этого объекта и отобразить в консоли.*/

let lang = {html:'HTML', css: 'CSS', js: 'ECMA'}, arr3 = [];

for(let key in lang){
    arr3.push(lang[key]);
}
console.log(arr3);
/*5. Создайте объект описывающий Заказ на сайте.
Создать можно любым из способов - даже просто написать консрукцию var obj = {...}. 
Главное учесть, что единицы измерения обычно не записываются в объект, а 
записываются просто цифры переведенные к общей единице измерения(например кг переводятся в граммы).


В нем должно храниться:
- Имя покупателя
- Телефон покупателя
- Адрес покупателя
- Общая сумма заказа
- Общий вес заказа
- Купленные товары:
1 товар - Чашка \ 100 грн. \ вес 200 грамм
2 товар - Ложка \ 30 грн. \ вес 100 грамм
3 товар - Чайник \ 550 грн. \ вес 2 кг
4 товар - Кружка \ 150 грн \ вес 400 грамм*/
 

let obj = { 
    'nameBuyer' : "Ivan",
    'phoneBuyer' : +3099666999,
    'adressBuyer' : "Vavilova 12",
    'totalOrder' : '830UAH',
    'totalWeight' : 2700,
    
    'productBuy' : [
        {
            'name': 'cup',
            'price': '5UAH',
            'weight': 200
        }, 
        {
            'name': 'spoon',
            'price': '30UAH',
            'weight': 100
        }, 
        {
            'name': 'kettle',
            'price': '550UAH',
            'weight': 2000
        },
         
        {
            'name': 'mug',
            'price': '150UAH',
            'weight': 400
        }
    ]
}

console.log(obj);


