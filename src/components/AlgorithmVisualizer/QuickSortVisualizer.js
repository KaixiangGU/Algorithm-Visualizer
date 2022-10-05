import { getQuickSortAnimations } from "../Algorithm/QuickSort";

const originalBarColor = "#82abe4";
const animateBarColor = "red";
const validateColor = "ForestGreen";

export const runQuickSortAnimation = (array) => {
  const animations = getQuickSortAnimations(array);
  const bars = document.querySelectorAll(".bar");

  for (let i = 0; i < animations.length; i++) {
    sleep(i * 10).then(() => {
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
        sleep(10).then(() => {
          barStyle.backgroundColor = originalBarColor;
        });
      }
    });
  }
  sleep(10 * animations.length).then(() => {
    validation(bars);
  });
};

export const validation = (bars) => {
  for (let i = 0; i < bars.length - 1; i++) {
    const barOneHeight = parseInt(bars[i].style.height);
    const barTwoHeight = parseInt(bars[i + 1].style.height);
    setTimeout(() => {
      if (barOneHeight > barTwoHeight) return;
      bars[i].style.backgroundColor = validateColor;
      if (i === bars.length - 2) {
        bars[i + 1].style.backgroundColor = validateColor;
      }
    }, i * 5);
  }
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
