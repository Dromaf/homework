'use strict';

/* TASK 1 */

  let todayDate = new Date();
  let newDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate()+1);
  let minutes = newDate - todayDate;
  minutes = Math.ceil(minutes / 60000);

console.log(minutes);
/* TASK 2 */

let time1 = new Date();
let time2 = new Date(time1.getFullYear(), time1.getMonth(), time1.getDate());

let res = Math.round((time1-time2) / 1000);

console.log(res);

/* TASK 3 */

function getWeekDay(date) {
  let days = ['Воскресени', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

  return days[date.getDay()];
}
let date = new Date(2013, 0, 25); 
console.log( getWeekDay(date) ); 

/* TASK 4 */


function daysOst() { 
  let dnuxa = prompt('Пожалуйста введите дату вашего рождения в формате YYYY-MM-DD', '');

  let birthday = new Date(Date.parse(dnuxa));
  let today = new Date();
  let nDate = birthday.setFullYear(today.getFullYear());
  if (nDate < today) {
    birthday.setFullYear(today.getFullYear()+1);
  }
  let allSec = 24*60*60*1000; 
  let dayswait = Math.round((birthday.getTime() - today.getTime())/allSec);
  
  console.log(`До вашего дня рождения осталось ${dayswait} дней`);
  }

  daysOst();
