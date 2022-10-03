import { Link } from "react-router-dom";

const Difficulties = ({ start }) => {
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

  return (
    <>
      {Object.keys(difficulties).map((difficulty) => {
        const { rows, cols } = difficulties[difficulty];
        return (
          <div
            className="difficulty clk-btn"
            key={difficulty}
            onClick={() => start(rows, cols)}
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
      <Link className="difficulty clk-btn" to="/custom">
        <p className="title">Custom</p>
      </Link>
    </>
  );
};

export default Difficulties;
