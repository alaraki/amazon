import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {isWeekend as isSatSun} from '../scripts/utils/money.js';

export const deliveryOptions = [{
  id: '1',
  deliveryDays: '7',
  priceCents: 0
}, {
  id: '2',
  deliveryDays: '3',
  priceCents: 499 
}, {
  id: '3',
deliveryDays: '1',
priceCents: 999 
}];

export function getDeliveryOption(deliveryOptionId){
  let deliveryOption;
    
  deliveryOptions.forEach( (option) => {
  if(option.id === deliveryOptionId){
    deliveryOption = option;
  }
  });

  return deliveryOption;
}

export function calculateDeliveryDate(deliveryOption){

  const today = dayjs();

  const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');

 return deliveryDate;
}

// Lesson 15 Exercises.

//15.a
// const today = dayjs();
// const deliveryDate = today.add(5, 'days');
// const dateString = deliveryDate.format(' MMMM D');
// console.log(dateString);

//15.b
// const today = dayjs();
// const deliveryDate = today.add(1, 'month');
// const dateString = deliveryDate.format(' MMMM D');
// console.log(dateString);

//15.c
// const today = dayjs();
// const deliveryDate = today.subtract(1, 'month');
// const dateString = deliveryDate.format(' MMMM D');
// console.log(dateString);

//15.d
// const today = dayjs();
// const dateString = today.format('dddd');
// console.log(dateString);

//15.e
// const date = dayjs('2023-10-29');
// console.log(isWeekend(date));
//15.f
// Move the isWeekend to the utils folder

//15.g
// rename the isWeekend function to isSatSun function.
// const date = dayjs('2023-10-29');
// console.log(isSatSun(date));

// 15.m

// let i = 1;
// const today = dayjs();
// let deliveryDate ;
// const numberOfDays = 7;
// while (i <= numberOfDays){

// //deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
// deliveryDate = today.add(i, 'days');

// if(isSatSun(deliveryDate)){
//   console.log(isSatSun(deliveryDate));
//  }

//  console.log(deliveryDate);
//  i++;
// }

//15.n



