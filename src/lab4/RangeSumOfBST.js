var rangeSumBST = function(root, low, high) {
    let sum = 0;
    if (root === null) {
        return 0;
    };
    if (root.val >= low && root.val <= high) {
        sum += root.val;
    }
    if (root.val > low) {
        sum += rangeSumBST(root.left, low, high);
    }
    if (root.val < high) {
        sum += rangeSumBST(root.right, low, high);
    }
    return sum;
};