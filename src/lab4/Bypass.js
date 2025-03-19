const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        this.root = this._insertNode(this.root, value);
    }

    _insertNode(node, value) {
        if (node === null) {
            return new TreeNode(value);
        }
        if (value < node.value) {
            node.left = this._insertNode(node.left, value);
        } else if (value > node.value) {
            node.right = this._insertNode(node.right, value);
        }
        return node;
    }

    walk(node, result) {
        if (node !== null) {
            this.walk(node.left, result);
            result.push(node.value);
            this.walk(node.right, result);
        }
    }
}

const bst = new BST();
let inputNumbers = [];

rl.on('line', (input) => {
    inputNumbers = input.trim().split(' ').map(Number);
    rl.close();
});

rl.on('close', () => {
    for (const num of inputNumbers) {
        if (num === 0) {
            break;
        }
        bst.insert(num);
    }
    const result = [];
    bst.walk(bst.root, result);
    console.log(result.join('\n'));
});