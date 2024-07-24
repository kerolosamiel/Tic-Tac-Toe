const Cell = ({ id, go, setGo, cells, setCells, cell, wins }) => {
  const handleClick = (e) => {
    let taken = !!cells[id];

    if (wins) {
      return;
    }

    if (!taken) {
      if (go === "circle") {
        handleChange("circle");
        setGo("cross");
      } else {
        handleChange("cross");
        setGo("circle");
      }
    }
  };

  const handleChange = (cellChange) => {
    let copyCells = [...cells];
    copyCells[id] = cellChange;
    setCells(copyCells);
  };

  return (
    <>
      <div className="square" onClick={handleClick}>
        <div className={cell}>
          <h2>{cell ? (cell === "circle" ? "O" : "X") : ""}</h2>
        </div>
      </div>
    </>
  );
};

export default Cell;
