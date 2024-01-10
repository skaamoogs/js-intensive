//let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr = [5, 2, 8, 6, 9, 1, 3, 4, 7];
let total = 13;
//result = [4, 9]
/**
 *
 * @param {number[]} arr
 * @param {number[]} total
 */
const firstSum = (arr, total) => {
  for (let i = 0; i < arr.length - 1; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[i] + arr[j] === total) {
        return [arr[i], arr[j]];
      }
    }
  }
  return [];
};
console.log(firstSum(arr, total));
