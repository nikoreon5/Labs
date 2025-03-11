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

    findLeaves(node, leaves) {
        if (node === null) {
            return;
        }
        if (node.left === null && node.right === null) {
            leaves.push(node.value);
        }
        this.findLeaves(node.left, leaves);
        this.findLeaves(node.right, leaves);
    }
}

const bst = new BST();

rl.on('line', (input) => {
    const numbers = input.trim().split(' ').map(Number);
    for (const num of numbers) {
        if (num === 0) {
            break;
        }
        bst.insert(num);
    }
    const leaves = [];
    bst.findLeaves(bst.root, leaves);
    leaves.sort((a, b) => a - b);
    console.log(leaves.join('\n'));
    rl.close();
});
