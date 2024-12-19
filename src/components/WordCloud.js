import React from "react";
import WordCloud from "react-d3-cloud";

import 'animate.css';
import words from "./Words"; // Ensure this is correctly set up

// Font size mapper function
const fontSizeMapper = (word) => Math.log2(word.value) * 10; 

// Rotation mapper function
const rotateWord = () => (0); 

const WordCloudComponent = () => {
    const options = {
        padding: 1,
        fontFamily: 'Centra, sans-serif',
      };
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <WordCloud
        data={words}
        fontSizeMapper={fontSizeMapper}
        rotate={rotateWord}
        padding={options.padding}
        font={options.fontFamily}
      />
    </div>
  );
};

export default WordCloudComponent;
