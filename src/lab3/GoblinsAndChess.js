const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];
rl.on('line', (line) => {
    inputLines.push(line);
}).on('close', () => {
    const stack = [];
    for (let i = 1; i < inputLines.length; i++) {
        if (inputLines[i][0] === '+') {
            stack.push(parseInt(inputLines[i].split(' ')[1]));
        } else if (inputLines[i][0] === '*') {
            stack.splice(Math.ceil(stack.length / 2), 0, parseInt(inputLines[i].split(' ')[1]));
        } else if (inputLines[i][0] === '-') {
            console.log(stack.shift());
        }
    }
});