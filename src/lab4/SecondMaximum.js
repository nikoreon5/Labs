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

    findSecondMax() {
        let parent = null;
        let current = this.root;
        while (current.right) {
            parent = current;
            current = current.right;
        }
        if (current.left) {
            let secondMax = current.left;
            while (secondMax.right) {
                secondMax = secondMax.right;
            }
            return secondMax.value;
        }
        return parent.value;
    }
}

const bst = new BST();

rl.on('line', (input) => {
    const inputNumbers = input.trim().split(' ').map(Number);
    for (const num of inputNumbers) {
        if (num === 0) {
            break;
        }
        bst.insert(num);
    }
    const secondMax = bst.findSecondMax();
    console.log(secondMax);
    rl.close();
});
