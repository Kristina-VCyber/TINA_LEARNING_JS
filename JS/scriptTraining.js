'use strict';
// Передача данных по ссылке или по значению. Spread оператор
let a = 5;
let b = a;

b = b + 5;
console.log(b);
console.log(a);

const object = {
  a: 5,
  b: 1
};
// Эта запись передает не саму структуру объекта, а ссылку
//  const copy = object;


function copy(mainObj) {
  let objCopy = {};
  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4
  }
};
const newNumbers = copy(numbers);
newNumbers.a = 10;
// console.log(newNumbers);
// console.log (numbers);


// object assign practice

const add = {
  d: 17,
  e: 20,
};

//
// console.log(Object.assign(numbers, add));

// Создание копии объекта. Через пустой объект
const clone = Object.assign({}, add);
clone.d = 20;
console.log(add);
console.log(clone);

// создание копии массива
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1] = 'I\'m so happy';
console.log(newArray);
console.log(oldArray)

// оператор разворота Spread
const video = ['youtube', 'vimeo', 'rutube'];
const blogs = ['wordpress', 'livejournal', 'blogger'];
const internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

// example2
function log(date, time, destination) {
  console.log(date);
  console.log(time);
  console.log(destination);
}

const schedule = ['25.01', '3 p.m', 'London'];
log(...schedule);

// 4-й способ создания поверхностных копий объекта

const favoriteMovies = ['Harry Potter', 'Lord of Rings'];

const moviesNew = [...favoriteMovies, 'The Witcher'];
console.log(moviesNew);

// копии объектов
const witcher = {
  1: 'Geralt',
  2: 'Ciri',
  3: 'Yennifer'
};

const newWitcherCharacters = { ...witcher, 4: 'Lambert' };
console.log(newWitcherCharacters);
// Урок 23. Основы ООП

console.dir([1, 2, 3, 4]);

const soldier = {
  health: 400,
  armor: 100
};
const john = {
  health: 100
}

// code wars

function even_or_odd(number) {
  if (number % 2 ) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

function numberToString(num) {
  const firstOption = num.toString();
  const secondOption = `${num}`;
  const thirdOption = String(num);
  const fourthOption = '' + num;
  const fifthOption = num + '';
  return firstOption;

}

numberToString(7);

