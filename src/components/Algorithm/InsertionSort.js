export const getInsertionSortAnimation = (array) => {
  const animations = [];
  insertionSort(array, animations);
  return animations;
};

const insertionSort = (nums, animations) => {
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    let hole = i;

    while (hole > 0 && nums[hole - 1] > value) {
      animations.push([hole]);
      animations.push([hole, hole - 1]);
      nums[hole] = nums[hole - 1];
      hole--;
    }
    nums[hole] = value;
  }
};
