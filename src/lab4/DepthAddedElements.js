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
        if (this.root === null) {
            this.root = new TreeNode(value);
            console.log(1);
            return;
        }
        this._insertNode(this.root, value, 1);
    }

    _insertNode(node, value, depth) {
        if (value < node.value) {
            if (node.left === null) {
                node.left = new TreeNode(value);
                console.log(depth + 1);
            } else {
                this._insertNode(node.left, value, depth + 1);
            }
        } else if (value > node.value) {
            if (node.right === null) {
                node.right = new TreeNode(value);
                console.log(depth + 1);
            } else {
                this._insertNode(node.right, value, depth + 1);
            }
        }
    }
}

const tree = new BST();

rl.on('line', (line) => {
    const numbers = line.trim().split(' ').map(Number);
    for (const num of numbers) {
        if (num === 0) {
            rl.close();
            break;
        }
        tree.insert(num);
    }
});
