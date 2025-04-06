const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let peakCount;
let adjacencyMatrix = [];
let start, end;
let lines = [];
let lineCount = 0;

rl.on('line', (line) => {
    lines.push(line.trim());
    lineCount++;
    if (lineCount === 1) {
        peakCount = parseInt(lines[0], 10);
    } else if (lineCount <= peakCount + 1) {
        adjacencyMatrix.push(lines[lineCount - 1].split(' ').map(Number));
    } else if (lineCount === peakCount + 2) {
        [start, end] = lines[peakCount + 1].split(' ').map(Number);
        start -= 1;
        end -= 1;
        rl.close();
    }
}).on('close', () => {
    const queue = [];
    const visited = new Array(peakCount).fill(false);
    const parent = new Array(peakCount).fill(-1);
    const distance = new Array(peakCount).fill(-1);
    queue.push(start);
    visited[start] = true;
    distance[start] = 0;
    while (queue.length > 0) {
        const current = queue.shift();
        if (current === end) {
            break;
        }
        for (let neighbor = 0; neighbor < peakCount; neighbor++) {
            if (adjacencyMatrix[current][neighbor] === 1 && !visited[neighbor]) {
                visited[neighbor] = true;
                parent[neighbor] = current;
                distance[neighbor] = distance[current] + 1;
                queue.push(neighbor);
            }
        }
    }
    if (distance[end] === -1) {
        console.log(-1);
    } else {
        console.log(distance[end]);
        if (distance[end] > 0) {
            const path = [];
            let current = end;
            while (current !== -1) {
                path.push(current + 1);
                current = parent[current];
            }
            console.log(path.reverse().join(' '));
        }
    }
});