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

    findSingleChildNodes(node, result) {
        if (node === null) {
            return;
        }
        const hasOnlyLeft = node.left !== null && node.right === null;
        const hasOnlyRight = node.left === null && node.right !== null;
        if (hasOnlyLeft || hasOnlyRight) {
            result.push(node.value);
        }
        this.findSingleChildNodes(node.left, result);
        this.findSingleChildNodes(node.right, result);
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
    const singleChildNodes = [];
    bst.findSingleChildNodes(bst.root, singleChildNodes);
    singleChildNodes.sort((a, b) => a - b);
    console.log(singleChildNodes.join('\n'));
    rl.close();
});
