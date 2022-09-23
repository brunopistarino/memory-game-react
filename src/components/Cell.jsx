const Cell = ({ value, onClick, row, col, isFlipped, isMatched }) => {
  // console.log('Cell', row, col, isFlipped);
  return (
    <div
      className={`cell ${isFlipped ? "flipped" : ""} ${
        isMatched ? "matched" : ""
      }`}
    >
      <button onClick={() => onClick(row, col)} />
      <p>{value}</p>
    </div>
  );
};

export default Cell;
