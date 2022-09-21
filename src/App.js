import './App.scss';
import { useEffect, useState } from 'react';
import Cell from './components/Cell';

function App() {
  const [rows, setRows] = useState(4);
  const [cols, setCols] = useState(4);
  const [cellsNumber, setCellsNumber] = useState(rows * cols / 2);
  const [matrix, setMatrix] = useState([]);
  const [flippedCells, setFlippedCells] = useState([]);

  const handleClick = (row, col) => {
    const newMatrix = [...matrix];
    newMatrix[row][col].isFlipped = true;
    setMatrix(newMatrix);
    setFlippedCells([...flippedCells, { row, col }]);
    console.log('clicked', row, col);

    // if (flippedCells.length === 1) {
    //   const [firstCell] = flippedCells;
    //   if (matrix[firstCell.row][firstCell.col].value === matrix[row][col].value) {
    //     console.log('match');
    //   } else {
    //     console.log('no match');
    //   }
    // }
  };

  // prove if selected cells match
  useEffect(() => {
    if (flippedCells.length === 2) {
      const [firstCell, secondCell] = flippedCells;
      if (matrix[firstCell.row][firstCell.col].value === matrix[secondCell.row][secondCell.col].value) {
        console.log('match');
        matrix[firstCell.row][firstCell.col].isMatched = true;
        matrix[secondCell.row][secondCell.col].isMatched = true;
      } else {
        console.log('no match');
      }
      setFlippedCells([]);
    }
    console.log('flippedCells', flippedCells);
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

  // const loadCells = () => {
  //   setCellsNumber(rows * cols / 2);
  // }

  const loadMatrix = () => {
    const mat = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        // row.push({ row: i, col: j });
        // row.push(i);
        const number = Math.floor(Math.random() * cellsNumber) + 1;
        // console.log(number);
        row.push({ value: number, isFlipped: false });

      }
      mat.push(row);
    }
    setMatrix(mat);
  };


  // const matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];

  useEffect(() => {
    // setCellsNumber(rows * cols / 2);
    loadMatrix();
    console.log('matrix', matrix);
    console.log('cellsNumber', cellsNumber);
  }, []);

  return (
    <div className="App">
      <div className="game-board">
        {
          matrix.map((row, i) => (
            <div className="row" key={i}>
              {
                row.map((cell, j) => (
                  <Cell key={j} isFlipped={cell.isFlipped} value={cell.value} onClick={handleClick} row={i} col={j}
                    flipped={flippedCells.some((flippedCell) => flippedCell.row === i && flippedCell.col === j) || cell.isMatched} />
                ))
              }
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
