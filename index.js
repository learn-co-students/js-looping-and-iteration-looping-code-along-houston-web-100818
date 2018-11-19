const arrayOfNames = ['Ada', 'Brendan', 'Ali'];

function printBadges(arrayOfNames) {
  for (let i = 0; i < arrayOfNames.length; i++) {
    console.log(`Welcome ${arrayOfNames[i]}! You are employee #${i+1}.`)
  }
  return arrayOfNames;
}

function tailsNeverFails() {
  function maybeTrue(){
    return Math.random() >= 0.5;
  }
  let count = 0;
  while (maybeTrue()) {
    count++
  }
  return `You got ${count} tails in a row!`
}
