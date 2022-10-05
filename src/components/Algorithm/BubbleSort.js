export const bubbleSort = (nums, animations) => {
  const len = nums.length;
  if (len < 2) return nums;

  for (let k = len - 1; k >= 1; k--) {
    for (let i = 0; i < k; i++) {
      animations.push([i]);
      if (nums[i] > nums[i + 1]) {
        animations.push([i, i + 1]);
        const temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
      }
    }
  }
  return nums;
};

export const getBubbleSortAnimation = (array) => {
  const animations = [];
  bubbleSort(array, animations);
  return animations;
};
