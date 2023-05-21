'use strict';

const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    let str = 0;
    const newArr = funds.filter(sum => {
       return sum.amount >= 0;
    });
    newArr.forEach(e => {
       str += e.amount;
    });
    return str;
};

getPositiveIncomeAmount(funds);

const getTotalIncomeAmount = (data) => {
    data.some(amounts => {
        amounts.amount < 0 ? data.reduce((acc, curr) => acc + curr.amount, 0) : getPositiveIncomeAmount(funds);
    });
};


getTotalIncomeAmount (funds);