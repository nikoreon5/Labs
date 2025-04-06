const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let peakCount;
let adjacencyMatrix = [];
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
        rl.close();
    }
}).on('close', () => {
    const visited = new Array(peakCount).fill(false);
    const parent = new Array(peakCount).fill(-1);
    let cycleFound = false;
    let cycleStart = -1;
    let cycleEnd = -1;
    function dfs(node) {
        visited[node] = true;
        for (let neighbor = 0; neighbor < peakCount; neighbor++) {
            if (adjacencyMatrix[node][neighbor] === 1) {
                if (!visited[neighbor]) {
                    parent[neighbor] = node;
                    if (dfs(neighbor)) {
                        return true;
                    }
                } else if (neighbor !== parent[node]) {
                    cycleStart = neighbor;
                    cycleEnd = node;
                    return true;
                }
            }
        }
        return false;
    }
    for (let i = 0; i < peakCount; i++) {
        if (!visited[i]) {
            if (dfs(i)) {
                cycleFound = true;
                break;
            }
        }
    }
    if (!cycleFound) {
        console.log('NO');
    } else {
        const cycle = [];
        let current = cycleEnd;
        while (current !== cycleStart) {
            cycle.push(current + 1);
            current = parent[current];
        }
        cycle.push(cycleStart + 1);
        cycle.reverse();
        console.log('YES');
        console.log(cycle.length);
        console.log(cycle.join(' '));
    }
});