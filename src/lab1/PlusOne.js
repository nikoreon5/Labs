/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let ostatok = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        let sum = digits[i] + ostatok;
        if (sum % 10 === digits[i]) { // если остаток 0, то изменять все последующие элементы нет смысла - выходим из цикла
            break;
        }
        digits[i] = sum % 10;
        ostatok = Math.floor(sum / 10);
    }
    if (ostatok === 1) {
        digits.unshift(1);
    }
    return digits;
};