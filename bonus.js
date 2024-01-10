const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = 13;
//result = [4, 9]

/* Алгоритм с полным перебором (сложность O(n ^ 2))
 */
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

/* Алгоритм с хранением элементов в объекте (сложность O(n))
 */
const firstSum2 = (arr, total) => {
  const d = arr.reduce((acc, cv, i) => {
    acc[cv] = i;
    return acc;
  }, {});
  for (let num of arr) {
    if (total - num in d) {
      return [num, total - num];
    }
  }

  return [];
};
