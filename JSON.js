'use strict';

// const persone = {
//     name: 'Alex',
//     phone: '+79929315523',
//     parents: {
//         mom: 'Olga',
//         dad: 'Mike'
//     }
// };

// console.log(JSON.parse(JSON.stringify(persone)));


const persone = {
    name: 'Alex',
    phone: '+79929315523',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Ann';
console.log(persone);
console.log(clone);