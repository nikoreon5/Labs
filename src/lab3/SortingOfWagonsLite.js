const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];
rl.on('line', (line) => {
    inputLines.push(line);
}).on('close', () => {
    const track1 = inputLines[1].split(' ').map(Number);
    if (track1.length === 1) {
        console.log('YES');
        return;
    }
    const path = [];
    let wagonToFind = 1;
    while (track1.length !== 0) {
        if (track1[0] === wagonToFind) {
            track1.shift();
            wagonToFind++;
        } else if (path[path.length - 1] === wagonToFind) {
            path.pop();
            wagonToFind++;
        } else {
            path.push(track1.shift());
        }
    }
    while (path.length > 0) {
        if (path.pop() !== wagonToFind) {
            console.log("NO");
            return;
        }
        wagonToFind++;
    }
    console.log('YES');
});