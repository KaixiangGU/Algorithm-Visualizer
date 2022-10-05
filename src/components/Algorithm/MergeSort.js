export const getMergeSortAnimation = (array) => {
  const animations = [];
  const copyArray = array.slice();
  mergeSort(0, array.length - 1, array, copyArray, animations);
  return animations;
};

const mergeSort = (start, end, array, copyArray, animations) => {
  if (start === end) return;

  const mid = Math.floor((start + end) / 2);
  mergeSort(start, mid, copyArray, array, animations);
  mergeSort(mid + 1, end, copyArray, array, animations);
  merge(start, mid, end, array, copyArray, animations);
};

function merge(start, mid, end, array, copyArray, animations) {
  let k = start;
  let i = start;
  let j = mid + 1;
  while (i <= mid && j <= end) {
    animations.push([i, j]);
    animations.push([i, j]);

    if (copyArray[i] <= copyArray[j]) {
      animations.push([k, copyArray[i]]);
      array[k++] = copyArray[i++];
    } else {
      animations.push([k, copyArray[j]]);
      array[k++] = copyArray[j++];
    }
  }
  while (i <= mid) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, copyArray[i]]);
    array[k++] = copyArray[i++];
  }
  while (j <= end) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, copyArray[j]]);
    array[k++] = copyArray[j++];
  }
}
