// Code your solutions in this file


function printBadges(names) {
    for (let i = 0; i < names.length; i ++) {
        console.log(`Welcome ${names[i]}! You are employee #${i+1}.`); 
    }
    return names;
}

function tailsNeverFails() {
    let coin = Math.random()
    let n = 0;
    while (coin >= 0.5) {
        coin = Math.random();
        n ++;
      }
    return `You got ${n} tails in a row!`;
}