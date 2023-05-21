'use strict';

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    console.log(arr.filter(film => film.rating >= 8));
}
// const newArr = arr.forEach(item => {
//     Object.entries(item);
// })
// console.log(newArr);
    // arr.filter(item => {    
    // const newArr = Object.entries(item);
    // newArr.filter(item => {
    //     console.log(item[0]);
    // })
//      console.log(newArr);
// });


showGoodFilms(films);


function showListOfFilms(arr) {
//     let str = '';
//     arr.filter( film => {
//         if ((film.name) === ('Some bad film')) {
//             str += `${film.name}`;
//         } else {
//         str += `${film.name}, `; 
//         };
//     });
//    return str;
return arr.reduce((acc, curr) =>`${typeof(acc) === 'object' ? acc.name : acc}, ${curr.name}`);
}

showListOfFilms(films);


function setFilmsIds(arr) {
    const filmId = arr.map((film, i) => {
        film.id = i;
    });
    console.log(films);
}

setFilmsIds(films);

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    console.log(arr.every(film => film.id || film.id === '0' ? true : false));
}

checkFilms(tranformedArray);