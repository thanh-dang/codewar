function chooseBestSum(t, k, ls) {
  console.log(k, ls);

  let temp = 0;
  const combinations = (currentArr, remainingArr, k) => {
    if (currentArr.length === k) {
      const count = currentArr.reduce((a, c) => a + c, 0);
      if (count > temp && count <= t) {
        console.log(currentArr, count);
        temp = count;
      }
    } else {
      for (let i = 0; i < remainingArr.length; i++) {
        combinations(
          currentArr.concat(remainingArr[i]),
          remainingArr.slice(i + 1),
          k
        );
      }
    }
  };
  combinations([], ls, k);
  if (temp === 0) {
    return null;
  }
  return temp;
}
