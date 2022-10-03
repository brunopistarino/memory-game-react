import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Slider from "../components/Slider";

import { ReactComponent as CustomizeIcon } from "../brush-01.svg";

const Settings = ({ updateRows, updateCols, updateCouples }) => {
  const [rows, setRows] = useState(4);
  const [cols, setCols] = useState(4);
  const [couples, setCouples] = useState(8);
  const [imposible, setImposible] = useState(false);
  const [difficulty, setDifficulty] = useState("easy");

  const [custom, setCustom] = useState(false);

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

  // useEffect(() => {
  //   setCouples((rows * cols) / 2);
  // }, [rows, cols]);

  // useEffect(() => {
  //   if (couples % 1 !== 0) {
  //     setImposible(true);
  //     return;
  //   }

  //   setImposible(false);
  //   if (couples <= 5) {
  //     setDifficulty("easy");
  //     return;
  //   }
  //   if (couples <= 10) {
  //     setDifficulty("medium");
  //     return;
  //   }
  //   if (couples <= 15) {
  //     setDifficulty("hard");
  //     return;
  //   }
  //   // if (couples <= 2) {
  //   //   setDifficulty("impossible");
  //   //   return;
  //   // }
  // }, [couples]);

  // const difficulties = {
  //   easy: {
  //     rows: 2,
  //     cols: 5,
  //   },
  //   medium: {
  //     rows: 6,
  //     cols: 10,
  //   },
  //   hard: {
  //     rows: 11,
  //     cols: 15,
  //   },
  //   impossible: {
  //     rows: 16,
  //     cols: 20,
  //   },
  // };
  const difficulties = {
    easy: {
      rows: 4,
      cols: 4,
    },
    medium: {
      rows: 6,
      cols: 6,
    },
    hard: {
      rows: 8,
      cols: 8,
    },
  };

  // const handleStart = () => {
  //   updateRows(rows);
  //   updateCols(cols);
  //   updateCouples(couples);
  //   navigate("/game");
  // };
  const handleStart = (selectedRows, selectedCols) => {
    updateRows(selectedRows);
    updateCols(selectedCols);
    updateCouples((selectedRows * selectedCols) / 2);
    navigate("/game");
  };

  // const handleDifficulty = (selectedRows, selectedCols) => {
  //   console.log("selectedRows", selectedRows);
  //   console.log("selectedCols", selectedCols);
  //   setRows();
  //   setCols(selectedCols);
  //   handleStart();
  // };

  useEffect(() => {
    document
      .querySelector('meta[name="theme-color"]')
      .setAttribute("content", "#acd6b8");
  }, []);

  return (
    <div id="settings-view">
      <div className="container">
        <header>
          <h1>memory</h1>
          <div>
            <CustomizeIcon />
          </div>
        </header>

        <div className="difficulties">
          {custom ? (
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
                <button
                  className="start"
                  onClick={() => handleStart(rows, cols)}
                >
                  Start Game
                </button>
              )}
            </div>
          ) : (
            <>
              {Object.keys(difficulties).map((difficulty) => {
                const { rows, cols } = difficulties[difficulty];
                return (
                  <div
                    className="difficulty"
                    key={difficulty}
                    onClick={() => handleStart(rows, cols)}
                  >
                    <div className="difficuty-text">
                      <div className="difficuty-head">
                        <p className="title">{difficulty}</p>
                        <p>{(rows * cols) / 2} pairs</p>
                      </div>
                      <div className="size">
                        <p className="size-text">
                          {rows} x {cols}
                        </p>
                      </div>
                    </div>
                    <div
                      className="demostration"
                      style={{
                        aspectRatio: `${rows}/${cols}`,
                        gridTemplateColumns: `repeat(${rows}, 1fr)`,
                      }}
                    >
                      {[...Array(rows * cols)].map((x, i) => (
                        <div key={i} className="box" />
                      ))}
                    </div>
                  </div>
                );
              })}
            </>
          )}
          <div
            className="difficulty"
            onClick={() => {
              setCustom((prev) => !prev);
            }}
          >
            <p className="title">{custom ? "Close" : "Custom"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
