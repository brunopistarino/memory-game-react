import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Slider from "../components/Slider";

const Settings = ({ updateRows, updateCols, updateCouples }) => {
  const [rows, setRows] = useState(4);
  const [cols, setCols] = useState(4);
  const [couples, setCouples] = useState(8);
  const [imposible, setImposible] = useState(false);
  const [difficulty, setDifficulty] = useState("easy");

  const minRows = 2;
  const maxRows = 8;
  const minCols = 2;
  const maxCols = 8;

  const navigate = useNavigate();

  const handleRowsChange = (e) => {
    setRows(e.target.value);
    console.log("rows", e.target.value);
  };

  const handleColsChange = (e) => {
    setCols(e.target.value);
  };

  useEffect(() => {
    setCouples((rows * cols) / 2);
  }, [rows, cols]);

  useEffect(() => {
    if (couples % 1 !== 0) {
      setImposible(true);
      return;
    }

    setImposible(false);
    if (couples <= 5) {
      setDifficulty("easy");
      return;
    }
    if (couples <= 10) {
      setDifficulty("medium");
      return;
    }
    if (couples <= 15) {
      setDifficulty("hard");
      return;
    }
    // if (couples <= 2) {
    //   setDifficulty("impossible");
    //   return;
    // }
  }, [couples]);

  const handleStart = () => {
    updateRows(rows);
    updateCols(cols);
    updateCouples(couples);
    navigate("/game");
  };

  useEffect(() => {
    document
      .querySelector('meta[name="theme-color"]')
      .setAttribute("content", "#152938");
  }, []);

  return (
    <div id="settings-view">
      <h1>memory</h1>

      <main>
        <div className="info-row">
          <div className="info-container">
            <p>Parejas:</p>
            <p>{couples}</p>
          </div>
          <div className="info-container">
            <p>Difficulty:</p>
            {imposible ? <p>Imposible</p> : <p>{difficulty}</p>}
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
          <button disabled>Start Game</button>
        ) : (
          <button onClick={handleStart}>Start Game</button>
        )}
      </main>
    </div>
  );
};

export default Settings;
