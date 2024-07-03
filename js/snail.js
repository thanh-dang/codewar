// snail = function (array) {
//   let result = [];
//   let hasValues = array.some(function (a) {
//     return a.length;
//   });
//   if (!hasValues) return result;
//   let idx = 0,
//     col = (row = array.length - 1);
//   while (idx <= array.length / 2) {
//     for (let i = idx; i <= row; i++) result.push(array[idx][i]);
//     for (let i = idx + 1; i <= col; i++) result.push(array[i][col]);
//     for (let i = row - 1; i >= idx; i--) result.push(array[row][i]);
//     for (let i = col - 1; i > idx; i--) result.push(array[i][idx]);
//     idx++;
//     col--;
//     row--;
//   }
//   return result;
// };
snail = function (array) {
  const m = array.length;
  let a = [];
  for (let index = 0; index < m; index++) {
    if (index % 2 === 0) {
      for (let i = 0; i < array.length; i++) {
        if (i === 0) {
          a.push(...array[i]);
        } else {
          a.push(array[i][array.length - 1]);
          array[i].pop();
        }
      }
      array.shift();
    } else {
      for (let j = array.length - 1; j >= 0; j--) {
        if (j === array.length - 1) {
          a.push(...array[array.length - 1].reverse());
        } else {
          a.push(array[j][0]);
          array[j].shift();
        }
      }
      array.pop();
    }
  }
  return a;
};
