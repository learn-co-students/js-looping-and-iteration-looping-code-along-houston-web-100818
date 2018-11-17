function printBadges(nameArray){
    for(let i = 0; i < nameArray.length; i++){
        console.log(`Welcome ${nameArray[i]}! You are employee #${i+1}.`);
    }
    return nameArray;
};

function tailsNeverFails(){
    let i = 0;

    function coinFlip(){
        return Math.random() >= 0.5;
    };

    while (coinFlip()) {
        i++;
    };
    return `You got ${i} tails in a row!`;
};