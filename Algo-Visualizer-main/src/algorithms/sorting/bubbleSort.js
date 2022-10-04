import { colorPrimary, colorSecondary } from "../../colors";

export const getBubbleSortAnimations = (array) => {
  const animations = [];
  bubbleSort(array, animations);
  return animations;
};

const bubbleSort = (array, animations) => {
  const n = array.length;
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n - i; j++) {
      // Comparing
      animations.push({
        type: "comparison",
        color: colorSecondary,
        data: [j, j - 1],
      });
      // Comparing Finished
      animations.push({
        type: "comparison",
        color: colorPrimary,
        data: [j, j - 1],
      });

      if (array[j] < array[j - 1]) {
        animations.push({
          type: "swap",
          data: [
            [j, array[j - 1]],
            [j - 1, array[j]],
          ],
        });

        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    animations.push({
      type: "done",
      color: colorSecondary,
      data: i,
    });
  }
};
