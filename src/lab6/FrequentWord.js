const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', line => {
    input.push(line);
});

rl.on('close', () => {
    const text = input.join(' ');
    const words = text.split(/\s+/).filter(word => word.length > 0);
    const frequency = {};
    let maxCount = 0;
    let result = '';
    for (const word of words) {
        frequency[word] = (frequency[word] || 0) + 1;
        if (frequency[word] > maxCount ||
            (frequency[word] === maxCount && word < result)) {
            maxCount = frequency[word];
            result = word;
        }
    }
    console.log(result);
});