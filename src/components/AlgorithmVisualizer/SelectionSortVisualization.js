import { getSelectionSortAnimation } from "../Algorithm/SelectionSort";
import { validation } from "./QuickSortVisualizer";

const originalBarColor = "#82abe4";
const animateBarColor = "red";
const validateColor = "ForestGreen";

export const runSlectionSortAnimation = (array) => {
  console.log("selection sort");

  const animations = getSelectionSortAnimation(array);
  const bars = document.querySelectorAll(".bar");

  for (let i = 0; i < animations.length; i++) {
    sleep(i * 5).then(() => {
      if (animations[i].length === 2) {
        const [barOne, barTwo] = animations[i];
        const barOneStyle = bars[barOne].style;
        const barTwoStyle = bars[barTwo].style;
        //swap height
        const tempHeight = barOneStyle.height;
        barOneStyle.height = barTwoStyle.height;
        barTwoStyle.height = tempHeight;
      } else {
        const barIdx = animations[i][0];
        const barStyle = bars[barIdx].style;
        barStyle.backgroundColor = animateBarColor;
        //wait 10 ms then turn color back to grey
        sleep(5).then(() => {
          barStyle.backgroundColor = originalBarColor;
        });
      }
    });
  }
  sleep(5 * animations.length).then(() => {
    validation(bars);
  });
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
