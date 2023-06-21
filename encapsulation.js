'use strict';

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    #surname = 'Petrychenko';

    say = () => {
        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this._age}`);
    }

    get age() {
        return this._age;
    }
    
    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение');  
        }
        
    }
}

const ivan = new User('Ivan', 27);
console.log(ivan.surname);
ivan.say();

class product {
    constructor(name, price, weight) {
        this._name = name;
        this.price = price;
        this.weight = weight;
    }

    #problems = 'дистанция';

    yell = () => {
        console.log(` Продается ${this._name} за ${this.price} рублей. Вес товара ${this.weight} грамм, зарядки хватает на 4 часа. Короткая ${this.#problems} связи.`);
    }

    get name() {
        return this._name;
    }

    set name(hyro) {
        this._name = hyro;
    }

}

const hyrocopter = new product ('Гирокоптер', 25000, 2500);
console.log(hyrocopter.name);
hyrocopter.yell();
hyrocopter._name = 'Летающий дрон';
console.log(hyrocopter.name);