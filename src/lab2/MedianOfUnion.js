// медиана объединения

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getMedian(arr1, arr2) { // возвращает левую медиану
    let res = [];
    let first = 0, second = 0;

    while (first < arr1.length && second < arr2.length) {
        if (arr1[first] >= arr2[second]) {
            res.push(arr2[second]);
            second++;
        } else {
            res.push(arr1[first]);
            first++;
        }
        if (res.length === arr1.length) {
            return res[res.length - 1];
        }
    }

    return res[res.length - 1];
}

let inputLines = [];
rl.on('line', (line) => {
    inputLines.push(line.trim());
}).on('close', () => {
    // кол-во последовательностей (n) и их размер (l)
    let [n, l] = inputLines[0].split(' ').map(Number);
    // здесь храним сами последовательности
    let x = inputLines.slice(1, n + 1).map(line => line.split(' ').map(Number));

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            console.log(getMedian(x[i], x[j]));
        }
    }
});