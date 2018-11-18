const names = ["Ada", "Brendan", "Ali"];

function printBadges(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`);
  }
  return names;
}

function tailsNeverFails() {
  let i = 0;
  function flip() {
    return Math.random() >= 0.5;
  }
  while (flip()) {
    i++;
  }
  return `You got ${i} tails in a row!`;
}
