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
        if (node.value === value) {
            return node;
        }
        if (value < node.value) {
            node.left = this._insertNode(node.left, value);
        } else {
            node.right = this._insertNode(node.right, value);
        }
        return node;
    }

    getBranches() {
        if (this.root === null) {
            return [];
        }
        const stack = [];
        const branches = [];
        let current = this.root;
        while (stack.length > 0 || current) {
            if (current) {
                stack.push(current);
                current = current.left;
            } else {
                current = stack.pop();
                if (current.left && current.right) {
                    branches.push(current.value);
                }
                current = current.right;
            }
        }
        return branches;
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
        if (num === 0) break;
        bst.insert(num);
    }
    const branches = bst.getBranches();
    console.log(branches.join('\n'));
});
