import { useState, useRef } from "react";
import { Link } from "react-router-dom";

import Slider from "../components/Slider";

const Custom = ({ start }) => {
  const [rows, setRows] = useState(4);
  const [cols, setCols] = useState(4);

  const colsRef = useRef();
  const rowsRef = useRef();

  const [couples, setCouples] = useState(8);
  const [imposible, setImposible] = useState(false);
  const [difficulty, setDifficulty] = useState("easy");

  const minRows = 2;
  const maxRows = 8;
  const minCols = 2;
  const maxCols = 8;

  const handleRowsChange = (e) => {
    setRows(e.target.value);
    console.log("rows", e.target.value);
  };

  const handleColsChange = (e) => {
    setCols(e.target.value);
  };

  return (
    <>
      <div className="custom-settings">
        <div className="info-row">
          <div className="info-container">
            <p>{couples}</p>
            <p>Parejas</p>
          </div>
          <div className="info-container">
            {imposible ? <p>Imposible</p> : <p>{difficulty}</p>}
            <p>Difficulty</p>
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
        {imposible ? (
          <button className="start" disabled>
            Start Game
          </button>
        ) : (
          <button className="start" onClick={() => start(rows, cols)}>
            Start Game
          </button>
        )}
      </div>

      <Link className="difficulty clk-btn" to="/">
        <p className="title">Close</p>
      </Link>
    </>
  );
};

export default Custom;
