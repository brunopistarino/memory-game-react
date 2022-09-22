const Cell = ({ value, onClick, row, col, isFlipped, flipped, isMatched }) => {
  // console.log('Cell', row, col, flipped);
  return (
    // <button className="cell" onClick={onClick}>
    <div
      className={`cell ${flipped ? "flipped" : ""} ${
        isMatched ? "matched" : ""
      }`}
    >
      <button onClick={() => onClick(row, col)} />
      <p>{value}</p>
    </div>
    // <button
    //   className={`cell ${flipped ? "flipped" : ""}`}
    //   onClick={() => onClick(row, col)}
    // >
    //   <p className="cell-number">{value}</p>
    // </button>
  );
};

export default Cell;
