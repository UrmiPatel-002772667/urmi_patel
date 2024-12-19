import React, { useState, useEffect } from "react";
import WordCloud from "react-d3-cloud";
import 'animate.css'; 
import words from "./Words"; 

// Font size mapper function for better readability
const fontSizeMapper = (word) => {
  const baseFontSize = Math.log2(word.value) * 10; // Adjust the base size as needed
  return `${baseFontSize}vw`; // Use vw units for responsiveness
};

// Rotation mapper function, currently fixed to 0
const rotateWord = () => 0;

export const Skills = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth * 0.8,
    height: window.innerHeight * 0.4,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth * 0.8,
        height: window.innerHeight * 0.4,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="skill" id="skills">
      <h2>Skills</h2>
      <WordCloud
        data={words}
        fontSizeMapper={(word) => fontSizeMapper(word)}
        rotate={rotateWord}
        font={'Merriweather'}
        padding={1}
        width={dimensions.width}
        height={dimensions.height}
      />
      <style jsx>{`
        .word-cloud text {
          font-size: ${fontSizeMapper}px; // Apply dynamic font size
          transition: font-size 0.3s ease; // Smooth transition
        }
      `}</style>
    </section>
  );
};
