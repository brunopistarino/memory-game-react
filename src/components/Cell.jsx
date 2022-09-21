const Cell = ({ value, onClick, row, col, isFlipped, flipped }) => {
    // console.log('Cell', row, col, flipped);
    return (
        // <button className="cell" onClick={onClick}>
        <button className={`cell ${flipped ? "flipped" : ""}`} onClick={() => onClick(row, col)}>
            <p className="cell-number">
                {value}
            </p>
        </button>
    )
};

export default Cell;