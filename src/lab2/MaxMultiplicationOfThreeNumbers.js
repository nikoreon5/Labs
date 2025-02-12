const readline = require('readline');

const rl = readline.createInterface({ // для чтения из консоли
  input: process.stdin,
  output: process.stdout
});

rl.question('', (input) => {
  let arr = input.split(' ').map(Number);
  arr.sort((a, b) => a - b);
  // произведение двух наименьших и наибольшего
  let mult1 = arr[0] * arr[1] * arr[arr.length - 1];
  // произведение трех наибольших
  let mult2 = arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3];
  if (mult1 <= mult2) {
    console.log(arr[arr.length - 1], arr[arr.length - 2], arr[arr.length - 3]);
  } else {
    console.log(arr[0], arr[1], arr[arr.length - 1]);
  }
  rl.close();
});