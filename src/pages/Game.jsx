import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

import Cell from "../components/Cell";
import Timer from "../components/Timer";

function Game({ rows, cols, couples }) {
  const [matrix, setMatrix] = useState([]);
  const [flippedCells, setFlippedCells] = useState([]);
  const [moves, setMoves] = useState(0);
  const [restart, setRestart] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const handleClick = (row, col) => {
    if (flippedCells.length === 2) {
      return;
    }
    if (flippedCells[0]?.row === row && flippedCells[0]?.col === col) {
      return;
    }
    const newMatrix = [...matrix];
    newMatrix[row][col].isFlipped = true;
    setMatrix(newMatrix);
    setFlippedCells([...flippedCells, { row, col }]);
    console.log("clicked", row, col);
  };

  // prove if selected cells match
  useEffect(() => {
    if (flippedCells.length === 2) {
      const [firstCell, secondCell] = flippedCells;
      if (
        matrix[firstCell.row][firstCell.col].value ===
        matrix[secondCell.row][secondCell.col].value
      ) {
        console.log("match");
        matrix[firstCell.row][firstCell.col].isMatched = true;
        matrix[secondCell.row][secondCell.col].isMatched = true;
        setFlippedCells([]);
        checkIfWon();
      } else {
        console.log("no match");
        setTimeout(function () {
          setFlippedCells([]);
        }, 700);
      }
      setMoves(moves + 1);
    }
    console.log("flippedCells", flippedCells);
  }, [flippedCells]);

  const checkIfWon = () => {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (!matrix[i][j].isMatched) {
          return;
        }
      }
    }
    // return true;
    setIsFinished(true);
  };

  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute("content", "#123456");

  const handleReset = () => {
    setFlippedCells([]);
    setMoves(0);
    setRestart(!restart);
  };

  useEffect(() => {
    if (isFinished) {
      // console.log("game ended");
      alert("You won!");
    }
  }, [isFinished]);

  // useEffect(() => {
  //   if (checkIfWon()) {
  //     setIsFinished(true);
  //   }
  // }, [matrix]);

  // load matrix with couples of numbers that didn't repeat
  useEffect(() => {
    const mat = [];
    const numbers = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        let number = Math.floor(Math.random() * couples) + 1;
        while (countInArray(numbers, number) >= 2) {
          number = Math.floor(Math.random() * couples) + 1;
          console.log("number", number);
        }
        numbers.push(number);
        row.push({ value: number, isFlipped: false, isMatched: false });
      }
      mat.push(row);
    }
    setMatrix(mat);
  }, [restart]);

  function countInArray(array, number) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i] === number) {
        count++;
      }
    }
    return count;
  }

  return (
    <div id="game-view">
      {!rows || !cols ? <Navigate to="/" /> : null}

      <header>
        <h1>Memory Game</h1>
        <div className="buttons">
          {/* <a href="/game">Restart</a> */}
          <Link to="#" onClick={handleReset}>
            Restart
          </Link>
          <Link to="/">New Game</Link>
          {/* <a href="/">New Game</a> */}
        </div>
      </header>

      <main>
        <div className="game-board">
          {matrix.map((row, i) => (
            <div className="row" key={i}>
              {row.map((cell, j) => (
                <Cell
                  key={j}
                  isMatched={cell.isMatched}
                  value={cell.value}
                  onClick={handleClick}
                  row={i}
                  col={j}
                  isFlipped={flippedCells.some(
                    (flippedCell) =>
                      flippedCell.row === i && flippedCell.col === j
                  )}
                />
              ))}
            </div>
          ))}
        </div>
      </main>

      <footer>
        <div className="data-field">
          <p>Time</p>
          <Timer restart={restart} />
        </div>
        <div className="data-field">
          <p>Moves</p>
          <h2>{moves}</h2>
        </div>
      </footer>
    </div>
  );
}

export default Game;
