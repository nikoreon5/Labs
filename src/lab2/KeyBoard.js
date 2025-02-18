const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];

rl.on('line', (line) => {
  inputLines.push(line);
}).on('close', () => {
  const n = parseInt(inputLines[0]);
  const keyLimits = inputLines[1].split(' ').map(Number);
  const k = parseInt(inputLines[2]);
  const presses = inputLines[3].split(' ').map(Number);

  // количество нажатий на каждую клавишу (изначально все по нулям)
  let keyPresses = new Array(n).fill(0);

  for (let press of presses) {
    keyPresses[press - 1]++;
  }

  for (let i = 0; i < n; i++) {
    console.log(keyPresses[i] > keyLimits[i] ? "YES" : "NO");
  }
});