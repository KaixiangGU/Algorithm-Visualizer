export const getQuickSortAnimations = (array) => {
  const animations = [];
  quickSort(array, 0, array.length - 1, animations);
  return animations;
};

const quickSort = (nums, start, end, animations) => {
  if (start >= end) return;
  let lo = start;
  let hi = end;
  let pivot = nums[Math.floor((start + end) / 2)];

  while (lo <= hi) {
    while (lo <= hi && pivot < nums[hi]) {
      animations.push([hi]);
      animations.push([hi]);
      hi--;
    }
    while (lo <= hi && pivot > nums[lo]) {
      animations.push([lo]);
      animations.push([lo]);
      lo++;
    }

    if (lo <= hi) {
      animations.push([lo, hi]);
      let temp = nums[lo];
      nums[lo] = nums[hi];
      nums[hi] = temp;
      lo++;
      hi--;
    }
  }
  quickSort(nums, start, hi, animations);
  quickSort(nums, lo, end, animations);
};
