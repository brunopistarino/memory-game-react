const Cell = ({ value, onClick, row, col, isFlipped, isMatched }) => {
  return (
    <div
      className={`cell ${isFlipped ? "flipped" : ""} ${
        isMatched ? "matched" : ""
      } ${value >= 10 ? "two-char" : ""}`}
    >
      <button onClick={() => onClick(row, col)} />
      <p>{value}</p>
    </div>
  );
};

export default Cell;
