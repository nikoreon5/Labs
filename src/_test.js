const fact = x => {
    if (x === 0) return 1;
    return x * fact(x - 1);
}

// const mergeArrays = (arr1, arr2) => {
//     let p1 = 0;
//     let p2 = 0;
//     const result = [];
//     if (arr1.length >= arr2.length) {
//         for (let i = 0; i < arr1.length + arr2.length; i++) {
//             if (arr1[p1] >= arr2[p2]) {
//                 result.push(arr2[p2]);
//                 p2++;
//             } else {
//                 result.push(arr1[p1]);
//                 p1++;
//             }
//         }
//     } else {
//         for (let i = 0; i < arr1.length + arr2.length; i++) {
//             if (arr2[p2] >= arr1[p1]) {
//                 result.push(arr1[p1]);
//                 p1++;
//             } else {
//                 result.push(arr2[p2]);
//                 p2++;
//             }
//         }
//     }
//     if (arr1.length + arr2.length !== result.length) {
//
//     }
//     // console.log(p1, p2, arr1.length, arr2.length)
//     return result;
// }
const mergeArrays = (arr1, arr2) => {
    let p1 = 0;
    let p2 = 0;
    const result = [];
    while (p1 < arr1.length && p2 < arr2.length) {
        if (arr1[p1] <= arr2[p2]) {
            result.push(arr1[p1]);
            p1++;
        } else {
            result.push(arr2[p2]);
            p2++;
        }
    }
    if (p1 < arr1.length) {
        result.push(...arr1.slice(p1));
    }
    if (p2 < arr2.length) {
        result.push(...arr2.slice(p2));
    }
    return result;
};

const first = [1, 2, 3, 5, 6];
const second = [-1, 2, 4, 4.5, 7];
// -1 1 2 2 3 4 4.5 5 6 7
console.log(...mergeArrays(first, second))
console.log(...mergeArrays([0, 0, 0, 0, 5, 6, 7], [-2, -1, 1, 2, 3, 8]))
console.log(...mergeArrays([1,2,3], []))
console.log(...mergeArrays([-5, -3, 0], [-4, -2, 2, 3]))

function f (x, y) {
    if (x >= y) {
        return 350 * y - 150 * (x - y);
    }
    return 350 * x - 75 * (y - x);
}