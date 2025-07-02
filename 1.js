const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Enter a number: ', (answer) => {
  const num = parseInt(answer);
  if (!Number.isInteger(num) || num < 0) {
      console.log(`Please enter a valid non-negative integer.`);
  }
  console.log(`Factorial of ${num} is ${factorial(num)}`);
  rl.close();
});
function factorial(n) {
  if (n < 0) {
    return "Factorial is not defined for negative numbers.";
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
