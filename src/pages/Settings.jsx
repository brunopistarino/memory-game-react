import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Colors from "../components/Colors";
import Custom from "../components/Custom";
import Difficulties from "../components/Difficulties";

import { ReactComponent as CustomizeIcon } from "../brush-01.svg";

const Settings = ({ updateRows, updateCols, updateCouples }) => {
  const navigate = useNavigate();

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
          <Link to="/colors">
            <div className="clk-btn">
              <CustomizeIcon />
            </div>
          </Link>
        </header>

        <main>
          <Routes>
            <Route path="" element={<Difficulties start={handleStart} />} />
            <Route path="colors" element={<Colors />} />
            <Route path="custom" element={<Custom start={handleStart} />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Settings;
