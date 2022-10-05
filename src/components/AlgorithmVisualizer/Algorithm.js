import React, { useState, useEffect } from "react";
import { runMergeSortAnimation } from "./MergeSortVisualizer";
import { runQuickSortAnimation } from "./QuickSortVisualizer";
import { runBubbleSortAnimation } from "./BubbleSortVisualization";
import { runInsertionSortAnimation } from "./InsertionSortVisualization";
import { runSlectionSortAnimation } from "./SelectionSortVisualization";
import "./AlgorithmVisualizer.css";
import Button from "@mui/material/Button";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Slider, Box, Typography } from "@mui/material";

const originalBarColor = "#82abe4";

export default function Algorithm() {
  const [array, setArray] = useState(null);
  const [value, setValue] = useState(null);
  const [width, setWidth] = useState(5);
  const [numberOfbars, setNumberOfBars] = useState(100);

  useEffect(() => {
    resetArray();
  }, []);

  useEffect(() => {
    setWidth((100 / numberOfbars) * 4);
    resetArray();
  }, [numberOfbars]);

  const resetArray = () => {
    const bars = document.querySelectorAll(".bar");
    bars.forEach((bar) => {
      bar.style.backgroundColor = originalBarColor;
    });
    const nums = [];
    for (let i = 0; i < numberOfbars; i++) {
      nums.push(randomNums(5, 500));
    }
    setArray(nums);
  };

  const randomNums = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const runAnimations = (value) => {
    switch (value) {
      case "mergeSort":
        runMergeSortAnimation(array);
        break;

      case "quickSort":
        runQuickSortAnimation(array);
        break;

      case "bubbleSort":
        runBubbleSortAnimation(array);
        break;

      case "insertionSort":
        runInsertionSortAnimation(array);
        break;

      case "selectionSort":
        runSlectionSortAnimation(array);
        break;

      default:
        break;
    }
  };

  const handleSubmit = () => {
    runAnimations(value);
  };

  const handleRadioChange = (e) => {
    resetArray();
    setValue(e.target.value);
  };

  const handleSetBars = (event, newValue) => {
    setNumberOfBars(newValue);
  };

  return (
    <div className="app-container">
      <nav className="nav-wrapper">
        <h1 className="header-1">Sorting Algorithms Visualizer V1.0</h1>
        <h2 className="header-2">Designed & Built by Kevin Gu</h2>
      </nav>
      <div className="bar-wrapper">
        {array?.map((value, index) => (
          <div
            key={index}
            style={{ height: `${value}px`, width: `${width}px` }}
            className="bar"
          ></div>
        ))}
      </div>
      <Box sx={{ textAlign: "center", pt: 2 }}>
        <Slider
          sx={{ width: "200px" }}
          min={50}
          max={200}
          defaultValue={numberOfbars}
          marks
          value={numberOfbars}
          onChange={handleSetBars}
        />
        <Typography variant="title2" component="div" color="white">
          Length of Array
        </Typography>
      </Box>
      <form className="form-wrapper">
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="sort algorithm group"
          className="radio-btn-group"
          value={value}
          row
          onChange={handleRadioChange}
          sx={{ color: "white" }}
        >
          <FormControlLabel
            value="mergeSort"
            control={
              <Radio
                sx={{
                  color: "white",
                  "&.Mui-checked": { color: "white" },
                }}
              />
            }
            label="Merge Sort"
          />
          <FormControlLabel
            value="quickSort"
            control={<Radio sx={{ color: "white", "&.Mui-checked": { color: "white" } }} />}
            label="Quick Sort"
          />
          <FormControlLabel
            value="bubbleSort"
            control={<Radio sx={{ color: "white", "&.Mui-checked": { color: "white" } }} />}
            label="Bubble Sort"
          />
          <FormControlLabel
            value="insertionSort"
            control={<Radio sx={{ color: "white", "&.Mui-checked": { color: "white" } }} />}
            label="Insertion Sort"
          />
          <FormControlLabel
            value="selectionSort"
            control={<Radio sx={{ color: "white", "&.Mui-checked": { color: "white" } }} />}
            label="Selection Sort"
          />
        </RadioGroup>
        <div className="btn-group">
          <Button
            variant="contained"
            color="secondary"
            startIcon={<RestartAltIcon />}
            onClick={() => resetArray()}
          >
            Reset Array
          </Button>
          <Button
            variant="contained"
            type="button"
            color="success"
            onClick={() => handleSubmit()}
            startIcon={<PlayCircleOutlineIcon />}
          >
            Start
          </Button>
        </div>
      </form>
    </div>
  );
}

// const runMergeSortTest = (array) => {
//   const duplicateArray = array.slice().sort((a, b) => a - b);
//   const sortedArray = mergeSort(array);

//   if (duplicateArray.length !== sortedArray.length) {
//     console.log(false);
//     return;
//   }

//   for (let i = 0; i < array.length; i++) {
//     if (duplicateArray[i] !== sortedArray[i]) {
//       console.log(false);
//       return;
//     }
//   }
//   console.log(true);
// };
