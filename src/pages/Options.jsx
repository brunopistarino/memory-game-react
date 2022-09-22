import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Options = ({ updateRows, updateCols, updateCouples }) => {
  const [rows, setRows] = useState(4);
  const [cols, setCols] = useState(4);
  const [couples, setCouples] = useState(8);
  const [imposible, setImposible] = useState(false);
  const [difficulty, setDifficulty] = useState("easy");

  const maxRows = 8;
  const minRows = 2;
  const maxCols = 8;
  const minCols = 2;

  const navigate = useNavigate();

  const handleRowsChange = (e) => {
    setRows(e.target.value);
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

  return (
    <div>
      <h1>Options</h1>

      <p>Parejas: {couples}</p>

      <fieldset>
        <p>{rows}</p>
        <input
          type="range"
          onChange={(e) => handleRowsChange(e)}
          value={rows}
          min={minRows}
          max={maxRows}
          name=""
          id=""
        />
      </fieldset>

      <fieldset>
        <p>{cols}</p>
        <input
          type="range"
          onChange={(e) => handleColsChange(e)}
          value={cols}
          min={minCols}
          max={maxCols}
          name=""
          id=""
        />
      </fieldset>

      {imposible ? <p>Imposible</p> : <p>{difficulty}</p>}
      {imposible ? (
        <button disabled>Start</button>
      ) : (
        <button onClick={handleStart}>Start</button>
      )}
    </div>
  );
};

export default Options;
