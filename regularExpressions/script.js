'use strict';

// new RegExp('pattern', 'flags');
// /pattern/flags

// const ans = prompt('Введите ваше число');

// const reg = /\d/g;
// console.log(ans.match(reg));

const str = 'My name is R2D2';

console.log(str.match(/\W/ig));

// \D // ищем не цифры
// \W // ищем не буквы
// \d // ищем цифры
// \w // ищем буквы
// \s // ищем пробелы

// i   // поиск внезависимости от регистра
// g   // поиск нескольких вхождений
// m  // включает многострочный режим

// console.log(ans.search(reg));
// console.log(ans.match(reg));
// console.log(reg.test(ans));

// const pass = prompt('Password');

// console.log(pass.replace(/./g, "*"));

// console.log('12-34-56'.replace(/-/g, ':'));

