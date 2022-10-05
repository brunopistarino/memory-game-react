import { useNavigate, Routes, Route, Link } from "react-router-dom";

import Colors from "../components/Colors";
import Custom from "../components/Custom";
import Difficulties from "../components/Difficulties";

import { ReactComponent as CustomizeIcon } from "../icons/brush-01.svg";

const Settings = ({ updateRows, updateCols, updateCouples }) => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   setCouples((rows * cols) / 2);
  // }, [rows, cols]);

  const handleStart = (selectedRows, selectedCols) => {
    updateRows(selectedRows);
    updateCols(selectedCols);
    updateCouples((selectedRows * selectedCols) / 2);
    navigate("/game");
  };

  return (
    <div id="settings-view">
      <div className="container">
        <header>
          <h1>numatch</h1>
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
