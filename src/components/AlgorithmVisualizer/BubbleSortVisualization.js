import { getBubbleSortAnimation } from "../Algorithm/BubbleSort";
import { validation } from "./QuickSortVisualizer";

const originalBarColor = "#82abe4";
const animateBarColor = "red";
const validateColor = "green";

export const runBubbleSortAnimation = (array) => {
  console.log("bubble sort");
  const animations = getBubbleSortAnimation(array);
  const bars = document.querySelectorAll(".bar");

  for (let i = 0; i < animations.length; i++) {
    sleep(i * 5).then(() => {
      if (animations[i].length === 2) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = bars[barOneIdx].style;
        const barTwoStyle = bars[barTwoIdx].style;
        //swap bar height
        const tempHeight = barOneStyle.height;
        barOneStyle.height = barTwoStyle.height;
        barTwoStyle.height = tempHeight;
      } else {
        const barIdx = animations[i][0];
        const barStyle = bars[barIdx].style;
        barStyle.backgroundColor = animateBarColor;

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
