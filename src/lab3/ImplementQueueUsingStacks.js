var MyQueue = function() {
    this.stack = [];
};

MyQueue.prototype.push = function(x) {
    this.stack.push(x);
};

MyQueue.prototype.pop = function() {
    return this.stack.shift();
};

MyQueue.prototype.peek = function() {
    return this.stack[0];
};

MyQueue.prototype.empty = function() {
    return this.stack.length === 0;
};