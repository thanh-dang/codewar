var firstMissingPositive = function (nums) {
  nums = nums.sort((a, b) => a - b);
  console.log(nums);
  let i = 0;
  while (i < nums.length - 1) {
    if (i < 0) {
      continue;
    }
    if (nums[i + 1] - nums[i] !== 1) {
      return nums[i] + 1;
    }
    i = i + 1;
  }
  return nums[length - 1] + 1;
};

firstMissingPositive([-1, 7, 8, 9, 11, 12]);
