import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../App.css"; 

const Grid = ({ rows = 15, cols = 14, speed = 200 }) => {
  const [activeColumn, setActiveColumn] = useState(0);
  const [waveColor, setWaveColor] = useState("#0f0");

  useEffect(() => {
    const colors = ["#0f0", "#00f", "#f00", "#ff0", "#0ff"];
    let colorIndex = 0;

    const colorInterval = setInterval(() => {
      colorIndex = (colorIndex + 1) % colors.length;
      setWaveColor(colors[colorIndex]);
    }, 5000); 

    return () => clearInterval(colorInterval);
  }, []);

  useEffect(() => {
    const columnInterval = setInterval(() => {
      setActiveColumn((prev) => (prev + 1) % cols);
    }, speed);

    return () => clearInterval(columnInterval);
  }, [cols, speed]);

  return (
    <div className="grid">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="row">
          {Array.from({ length: cols }).map((_, colIndex) => {
            const isWaveActive = colIndex === activeColumn;
            return (
              <div
                key={colIndex}
                className={`cell ${isWaveActive ? "active" : ""}`}
                style={{
                  backgroundColor: isWaveActive ? waveColor : "#222",
                  transition: "background-color 0.3s ease-in-out",
                }}
              ></div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

Grid.propTypes = {
  rows: PropTypes.number,
  cols: PropTypes.number,
  speed: PropTypes.number,
};

export default Grid;
