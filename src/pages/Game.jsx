import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

import Cell from "../components/Cell";
import Timer from "../components/Timer";

function Game({ rows, cols, couples }) {
  const [cellsNumber, setCellsNumber] = useState((rows * cols) / 2);
  const [matrix, setMatrix] = useState([]);
  const [flippedCells, setFlippedCells] = useState([]);
  const [moves, setMoves] = useState(0);

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
      } else {
        console.log("no match");
      }
      setMoves(moves + 1);
      setTimeout(function () {
        setFlippedCells([]);
      }, 800);
    }
    console.log("flippedCells", flippedCells);
  }, [flippedCells]);

  // setCellsNumber(rows * cols / 2);
  // useEffect(() => {
  //   setCellsNumber(rows * cols / 2);
  // }, [rows, cols]);

  // const loadCells = () => {
  //   const cells = [];
  //   for (let i = 0; i < rows; i++) {
  //     for (let j = 0; j < cols; j++) {
  //       cells.push({ row: i, col: j });
  //     }
  //   }
  //   setCells(cells);
  // };

  // load matrix with couples of numbers that didn't repeat
  useEffect(() => {
    const mat = [];
    const numbers = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        let number = Math.floor(Math.random() * cellsNumber) + 1;
        // while (numbers.includes(number)) {
        while (countInArray(numbers, number) >= 2) {
          number = Math.floor(Math.random() * cellsNumber) + 1;
          console.log("number", number);
        }
        numbers.push(number);
        row.push({ value: number, isFlipped: false, isMatched: false });
      }
      mat.push(row);
    }
    setMatrix(mat);
  }, []);

  function countInArray(array, number) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i] === number) {
        count++;
      }
    }
    return count;
  }
  //   }, [rows, cols, cellsNumber]);

  // const matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];

  //   useEffect(() => {
  //     // setCellsNumber(rows * cols / 2);
  //     // loadMatrix();
  //     console.log("matrix", matrix);
  //     console.log("cellsNumber", cellsNumber);
  //   }, []);

  return (
    <div id="game-view">
      {!rows || !cols ? <Navigate to="/" /> : null}

      <header>
        <h1>Memory Game</h1>
        <div className="buttons">
          {/* <a href="/game">Restart</a> */}
          <Link to="/game">Restart</Link>
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
          <Timer />
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
