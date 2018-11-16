// Code your solutions in this file
function printBadges(employees) {
  for (let i = 0; i < employees.length; i++) {
    console.log(`Welcome ${employees[i]}! You are employee #${i+1}.`);
  }
  return employees
}

function tailsNeverFails() {
  var flip = Math.random()
  let count = 0
  while (flip >= 0.5) {
    count++;
    flip = Math.random();
  }
  return `You got ${count} tails in a row!`
}