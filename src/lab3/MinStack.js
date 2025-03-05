
var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

MinStack.prototype.push = function(val) {
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(val);
    }
    this.stack.push(val);
};

MinStack.prototype.pop = function() {
    if (this.minStack[this.minStack.length - 1] === this.stack[this.stack.length - 1]) {
        this.minStack.pop();
    }
    return this.stack.pop();
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};
