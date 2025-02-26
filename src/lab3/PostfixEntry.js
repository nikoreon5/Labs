const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (input) => {
    const stack = [];
    const splitted = input.split(' ');
    for (let i = 0; i < splitted.length; i++) {
        if (splitted[i] !== '+' && splitted[i] !== '-' && splitted[i] !== '*') {
            stack.push(parseInt(splitted[i]));
        } else {
            const operand1 = parseInt(stack.pop());
            const operand2 = parseInt(stack.pop());
            if (splitted[i] === '+') {
                stack.push(operand2 + operand1);
            } else if (splitted[i] === '-') {
                stack.push(operand2 - operand1);
            } else if (splitted[i] === '*') {
                stack.push(operand2 * operand1);
            }
        }
    }
    console.log(stack[0]);
})