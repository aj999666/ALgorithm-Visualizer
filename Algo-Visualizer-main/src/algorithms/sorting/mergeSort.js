import { colorPrimary, colorSecondary } from "../../colors";

export const getMergeSortAnimations = (array) => {
  const animations = [];
  mergeSort(array, 0, array.length - 1, animations);
  for (let i = 0; i < array.length; i++) {
    animations.push({
      type: "done",
      color: colorSecondary,
      data: i,
    });
  }

  return animations;
};

const mergeSort = (array, start, end, animations) => {
  if (end <= start) return;
  const mid = Math.floor((start + end) / 2);

  mergeSort(array, start, mid, animations);
  mergeSort(array, mid + 1, end, animations);

  mergeInPlace(array, start, mid, end, animations);
};

const mergeInPlace = (array, start, mid, end, animations) => {
  let i = start;
  let j = mid + 1;

  const merged = [];
  let k = 0;

  while (i <= mid && j <= end) {
    animations.push({
      type: "comparison",
      color: colorSecondary,
      data: [i, j],
    });

    animations.push({
      type: "comparison",
      color: colorPrimary,
      data: [i, j],
    });

    if (array[i] < array[j]) {
      animations.push({
        type: "sort",
        data: [start + k, array[i]],
      });

      merged[k++] = array[i++];
    } else {
      animations.push({
        type: "sort",
        data: [start + k, array[j]],
      });

      merged[k++] = array[j++];
    }
  }

  while (i <= mid) {
    animations.push({
      type: "sort",
      data: [start + k, array[i]],
    });
    merged[k++] = array[i++];
  }

  while (j <= end) {
    animations.push({
      type: "sort",
      data: [start + k, array[j]],
    });
    merged[k++] = array[j++];
  }

  for (let l = 0; l < merged.length; l++) {
    array[start + l] = merged[l];
  }
};
