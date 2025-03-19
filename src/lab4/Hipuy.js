const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this._siftUp(this.heap.length - 1);
    }

    extract() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._siftDown(0);
        return max;
    }

    _siftUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] <= this.heap[parentIndex]) {
                break;
            }
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    _siftDown(index) {
        const size = this.heap.length;
        while (true) {
            let leftChild = 2 * index + 1;
            let rightChild = 2 * index + 2;
            let largest = index;
            if (leftChild < size && this.heap[leftChild] > this.heap[largest]) {
                largest = leftChild;
            }
            if (rightChild < size && this.heap[rightChild] > this.heap[largest]) {
                largest = rightChild;
            }
            if (largest === index) {
                break;
            }
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            index = largest;
        }
    }
}

const heap = new MaxHeap();
const results = [];
let commandCount = null;

rl.on('line', (line) => {
    const parts = line.trim().split(' ').map(Number);
    if (commandCount === null) {
        commandCount = parts[0];
        return;
    }
    if (parts[0] === 0) {
        heap.insert(parts[1]);
    } else {
        results.push(heap.extract());
    }
    if (--commandCount === 0) {
        console.log(results.join('\n'));
        rl.close();
    }
});
