var findSubstringInWraproundString = function(s) {
    if (!s) {
        return 0;
    }
    const maxLenPerChar = {};
    let currentMaxLen = 1;
    for (let i = 0; i < s.length; i++) {
        if (i > 0 && (
            s.charCodeAt(i) - s.charCodeAt(i - 1) === 1 ||
            (s[i - 1] === 'z' && s[i] === 'a')
        )) {
            currentMaxLen++;
        } else {
            currentMaxLen = 1;
        }
        const char = s[i];
        if (maxLenPerChar[char] === undefined || currentMaxLen > maxLenPerChar[char]) {
            maxLenPerChar[char] = currentMaxLen;
        }
    }
    return Object.values(maxLenPerChar).reduce((sum, val) => sum + val, 0);
};