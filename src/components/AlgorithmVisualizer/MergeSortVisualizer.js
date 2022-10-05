import { getMergeSortAnimation } from "../Algorithm/MergeSort";

const originalBarColor = "#82abe4";
const animateBarColor = "red";
const validateColor = "green";

const traverseAnimationArr = (animations, bars) => {
  return new Promise((resolve) => {
    for (let i = 0; i < animations.length; i++) {
      const changeColor = i % 3 !== 2;
      if (changeColor) {
        const [barOne, barTwo] = animations[i];
        const color = i % 3 === 0 ? animateBarColor : originalBarColor;
        setTimeout(() => {
          bars[barOne].style.backgroundColor = color;
          bars[barTwo].style.backgroundColor = color;
        }, i * 5);
      } else {
        setTimeout(() => {
          const [barOne, height] = animations[i];
          bars[barOne].style.height = `${height}px`;
        }, i * 5);
      }
    }
    setTimeout(() => {
      resolve();
    }, 5 * animations.length);
  });
};

const validation = (bars) => {
  return new Promise((resolve) => {
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
  });
};

export const runMergeSortAnimation = async (array) => {
  console.log("merge sort");
  const animations = getMergeSortAnimation(array);
  const bars = document.querySelectorAll(".bar");
  await traverseAnimationArr(animations, bars);
  await validation(bars);
};
