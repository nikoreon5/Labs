const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let peakCount, edgeCount;
let adjacencyList = [];
let visited = [];
let components = [];
let lineNumber = 0;

rl.on('line', (line) => {
    if (line.trim() === '') {
        return;
    }
    if (lineNumber === 0) {
        [peakCount, edgeCount] = line.trim().split(' ').map(Number);
        adjacencyList = Array.from({ length: peakCount + 1 }, () => []);
        visited = Array(peakCount + 1).fill(false);
        lineNumber++;
    } else if (lineNumber <= edgeCount) {
        const [i, j] = line.trim().split(' ').map(Number);
        if (i >= 1 && i <= peakCount && j >= 1 && j <= peakCount) {
            adjacencyList[i].push(j);
            adjacencyList[j].push(i);
        }
        lineNumber++;
    }
}).on('close', () => {
    for (let i = 1; i <= peakCount; i++) {
        if (!visited[i]) {
            const component = [];
            const stack = [i];
            visited[i] = true;
            while (stack.length > 0) {
                const node = stack.pop();
                component.push(node);
                for (const neighbor of adjacencyList[node]) {
                    if (!visited[neighbor]) {
                        visited[neighbor] = true;
                        stack.push(neighbor);
                    }
                }
            }
            components.push(component);
        }
    }
    console.log(components.length);
    components.forEach(component => {
        console.log(component.length);
        console.log(component.sort((a, b) => a - b).join(' '));
    });
});