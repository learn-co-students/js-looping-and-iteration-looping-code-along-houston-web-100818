// Code your solutions in this file

// const employees = ['Ada', 'Brendan', 'Ali']

function printBadges (employees){
   for (let i = 0; i < employees.length; i++)  {
    console.log(`Welcome ${employees[i]}! You are employee #${i+1}.`);
   }
    return employees;
}


function tailsNeverFails() {
    let i = 0;

    function flipCoin(){
        return Math.random() >= 0.5;
    };

    while (flipCoin()) {
        i++;
    };

    return `You got ${i} tails in a row!`;
};