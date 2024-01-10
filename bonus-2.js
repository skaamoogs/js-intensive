const { memoryUsage } = require("process");

//const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const n = 50000000;
const arr = [];

for (let i = 1; i <= n; ++i) {
  arr.push(i);
}
const total = 50000000;
//result = [4, 9]

// brute force algorithm (сложность O(n^2))
const firstSum1 = (arr, total) => {
  for (let i = 0; i < arr.length - 1; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[i] + arr[j] === total) {
        return [arr[i], arr[j]];
      }
    }
  }
  return [];
};

// алгоритм с хранением элементов в объекте (сложность O(n))
const firstSum2 = (arr, total) => {
  const d = arr.reduce((acc, cv, i) => {
    acc[cv] = i;

    return acc;
  }, {});
  for (let i = 0; i < arr.length; ++i) {
    if (d.hasOwnProperty(total - arr[i])) {
      return [arr[i], total - arr[i]];
    }
  }

  return [];
};

const start = Date.now();
console.log(total, firstSum2(arr, total));
const end = Date.now();
console.log(end - start);
