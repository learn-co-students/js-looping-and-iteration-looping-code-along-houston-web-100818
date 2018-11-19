// Code your solutions in this file

// const employees = ['Ada', 'Brendan', 'Ali']
function printBadges(employees){
    for ( let i = 0; i < employees.length; i++){
        console.log(`Welcome ${employees[i]}! You are employee #${i + 1}.`);
    }
    return employees;
}

function tailsNeverFails(){
    let coin = Math.round(Math.random());
    i = 0
    function result() {
        return `You got ${i} tails in a row!`
    }
    while (coin === 1){
        i ++
        coin = Math.round(Math.random());
    };
    return result();
}