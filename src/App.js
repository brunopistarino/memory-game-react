import "./App.scss";
import { useEffect, useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Options from "./pages/Options";
import Game from "./pages/Game";

function App() {
  const [rows, setRows] = useState(null);
  const [cols, setCols] = useState(null);
  const [couples, setCouples] = useState(null);

  const handleRows = (n) => {
    setRows(n);
  };

  const handleCols = (n) => {
    setCols(n);
  };

  const handleCouples = (n) => {
    setCouples(n);
  };

  useEffect(() => {
    console.log("rows", rows);
    console.log("cols", cols);
  }, [rows, cols]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Options
              updateRows={handleRows}
              updateCols={handleCols}
              updateCouples={handleCouples}
            />
          }
        />
        <Route
          path="/game"
          element={<Game rows={rows} cols={cols} couples={couples} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
