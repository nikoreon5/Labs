var findMaximumXOR = function(nums) {
    let maxXOR = 0;
    let mask = 0;
    for (let i = 30; i >= 0; i--) {
        mask |= (1 << i);
        const prefixes = new Set();
        for (const num of nums) {
            prefixes.add(num & mask);
        }
        const candidate = maxXOR | (1 << i);
        for (const prefix of prefixes) {
            if (prefixes.has(candidate ^ prefix)) {
                maxXOR = candidate;
                break;
            }
        }
    }
    return maxXOR;
};