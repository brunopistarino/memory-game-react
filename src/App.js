import "./sass/main.scss";
import { useEffect, useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Settings from "./pages/Settings";
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
    const color = localStorage.getItem("color") || "#acd6b8";
    document.documentElement.style.setProperty("--main-color", color);
    document
      .querySelector('meta[name="theme-color"]')
      .setAttribute("content", color);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <Settings
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
