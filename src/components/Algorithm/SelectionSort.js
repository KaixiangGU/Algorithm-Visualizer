export const getSelectionSortAnimation = (array) => {
  const animations = [];
  selectionSort(array, animations);
  return animations;
};

const selectionSort = (nums, animations) => {
  for (let i = 0; i < nums.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < nums.length; j++) {
      animations.push([j]);
      animations.push([j]);
      if (nums[j] < nums[min]) {
        min = j;
      }
    }
    animations.push([i, min]);
    const temp = nums[i];
    nums[i] = nums[min];
    nums[min] = temp;
  }
};
