import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Slider from "../components/Slider";

const Custom = ({ start }) => {
  const [rows, setRows] = useState(4);
  const [cols, setCols] = useState(4);

  const [difficulty, setDifficulty] = useState("easy");

  const minRows = 2;
  const maxRows = 8;
  const minCols = 2;
  const maxCols = 8;

  const handleRowsChange = (e) => {
    setRows(e.target.value);
  };

  const handleColsChange = (e) => {
    setCols(e.target.value);
  };

  useEffect(() => {
    const couples = (rows * cols) / 2;
    if (couples <= 8) {
      setDifficulty("easy");
      return;
    }
    if (couples <= 16) {
      setDifficulty("medium");
      return;
    }
    if (couples <= 24) {
      setDifficulty("hard");
      return;
    }
  }, [rows, cols]);

  return (
    <>
      <div className="custom-settings">
        <div className="info-row">
          <div className="info-container">
            <p>Pairs</p>
            <p>{(rows * cols) / 2}</p>
          </div>
          <div className="info-container">
            <p>Difficulty</p>
            <p>{difficulty}</p>
          </div>
        </div>
        <div className="sliders">
          <Slider
            min={minRows}
            max={maxRows}
            value={rows}
            type={"rows"}
            onChange={handleRowsChange}
          />

          <Slider
            min={minCols}
            max={maxCols}
            value={cols}
            type={"columns"}
            onChange={handleColsChange}
          />
        </div>
        <button className="start" onClick={() => start(rows, cols)}>
          Start Game
        </button>
      </div>

      <Link className="difficulty clk-btn" to="/">
        <p className="title">Close</p>
      </Link>
    </>
  );
};

export default Custom;
