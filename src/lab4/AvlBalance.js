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

    isBalanced() {
        return this._checkBalance(this.root) !== -1;
    }

    _checkBalance(node) {
        if (node === null) {
            return 0;
        }

        let leftHeight = this._checkBalance(node.left);
        if (leftHeight === -1) {
            return -1;
        }

        let rightHeight = this._checkBalance(node.right);
        if (rightHeight === -1) {
            return -1;
        }

        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }
        return 1 + Math.max(leftHeight, rightHeight);
    }
}

const bst = new BST();

let input = '';

rl.on('line', (line) => {
    input += line + ' ';
    if (line.includes('0')) {
        const numbers = input.trim().split(/\s+/).map(Number);
        for (const num of numbers) {
            if (num === 0) {
                break;
            }
            bst.insert(num);
        }
        console.log(bst.isBalanced() ? "YES" : "NO");
        rl.close();
    }
});