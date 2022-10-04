import { colorPrimary, colorSecondary } from "../../colors";

// animations
const getQuickSortAnimations = (array) => {
  const animations = [];
  quickSort(array, 0, array.length - 1, animations);
  for (let i = 0; i < array.length; i++) {
    animations.push({
      type: "done",
      color: colorSecondary,
      data: i,
    });
  }

  return animations;
};

const quickSort = (array, low, high, animations) => {
  if (low >= high) {
    return;
  }

  let s = low;
  let e = high;
  let m = Math.floor((s + e) / 2);
  let pivot = array[m];

  while (s <= e) {
    while (array[s] < pivot) {
      animations.push({
        type: "comparison",
        color: colorSecondary,
        data: [s, m],
      });

      animations.push({
        type: "comparison",
        color: colorPrimary,
        data: [s, m],
      });
      s++;
    }

    while (array[e] > pivot) {
      animations.push({
        type: "comparison",
        color: colorSecondary,
        data: [e, m],
      });

      animations.push({
        type: "comparison",
        color: colorPrimary,
        data: [e, m],
      });

      e--;
    }

    if (s <= e) {
      animations.push({
        type: "swap",
        data: [
          [s, array[e]],
          [e, array[s]],
        ],
      });

      let temp = array[s];
      array[s] = array[e];
      array[e] = temp;

      s++;
      e--;
    }
  }

  quickSort(array, low, e, animations);
  quickSort(array, s, high, animations);
};

export { getQuickSortAnimations };
