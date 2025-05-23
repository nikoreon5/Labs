const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let mazeSize;
let maze = [];
let startRow, startCol;
let lines = [];

rl.on('line', (line) => {
    lines.push(line.trim());
}).on('close', () => {
    mazeSize = parseInt(lines[0], 10);
    for (let i = 1; i <= mazeSize; i++) {
        maze.push(lines[i].split(''));
    }
    const [row, col] = lines[mazeSize + 1].split(' ').map(Number);
    startRow = row - 1;
    startCol = col - 1;
    if (maze[startRow][startCol] !== '.') {
        console.log(0);
        return;
    }
    const visited = Array.from({ length: mazeSize }, () => new Array(mazeSize).fill(false));
    const queue = [];
    queue.push([startRow, startCol]);
    visited[startRow][startCol] = true;
    let area = 0;
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    while (queue.length > 0) {
        const [currentRow, currentCol] = queue.shift();
        area++;
        for (const [dr, dc] of directions) {
            const newRow = currentRow + dr;
            const newCol = currentCol + dc;
            if (
                newRow >= 0 &&
                newRow < mazeSize &&
                newCol >= 0 &&
                newCol < mazeSize &&
                maze[newRow][newCol] === '.' &&
                !visited[newRow][newCol]
            ) {
                visited[newRow][newCol] = true;
                queue.push([newRow, newCol]);
            }
        }
    }
    console.log(area);
});