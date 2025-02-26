const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (input) => {
    const stack = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '(' || input[i] === '[' || input[i] === '{') {
            stack.push(input[i]);
        } else {
            if (stack.length === 0) {
                console.log('no');
                return;
            }
            if (input[i] === ')') {
                if (stack[stack.length - 1] !== '(') {
                    console.log('no');
                    return;
                }
            } else if (input[i] === ']') {
                if (stack[stack.length - 1] !== '[') {
                    console.log('no');
                    return;
                }
            } else if (input[i] === '}') {
                if (stack[stack.length - 1] !== '{') {
                    console.log('no');
                    return;
                }
            }
            stack.pop();
        }
    }
    console.log(stack.length === 0 ? 'yes' : 'no');
});