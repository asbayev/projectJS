'use strict';

console.group('arr' + ' - object');
console.group(4 +  ' 9');


let incr = 10, 
    decr = 10;


// incr++;  //Оператор увелечения incriment он прибавляет значение на 1
// decr--; //Оператор уменьшения decriment он уменьшает значение на 1

// ++incr;  //Оператор увелечения incriment он прибавляет значение на 1
// --decr; //Оператор уменьшения decriment он уменьшает значение на 1


console.log(++incr);
console.log(--decr);

console.log(5%2);

console.log(2 + 2 * 2 === 8); // Строгое равенство состоит из === таких символов

// && оператор И
// || оператор ИЛИ

const isChecked = false,
      isClose = false;

 console.log(isChecked || !isClose);