import { useEffect, useState } from "react";
import Cell from "./components/Cell";

const winnigCompos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];

function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [wins, setWins] = useState("");

  useEffect(() => {
    winnigCompos.forEach((compo) => {
      const circleWins = compo.every((cell) => cells[cell] === "circle");
      const crossWins = compo.every((cell) => cells[cell] === "cross");

      if (circleWins) {
        setWins("Circle");
      } else if (crossWins) {
        setWins("Cross");
      }
    });
  }, [cells]);

  useEffect(() => {
    if (cells.every((cell) => cell !== "") && !wins) {
      setWins("Drawing");
    }
  }, [cells, wins]);
  return (
    <>
      <div className="game-container">
        <div className="gameboard">
          {cells.map((cell, index) => (
            <Cell
              key={index}
              id={index}
              go={go}
              setGo={setGo}
              cells={cells}
              setCells={setCells}
              cell={cell}
              wins={wins}
            />
          ))}
        </div>

        {wins && (
          <h2>
            <span>{wins.toUpperCase()}</span> {wins !== "Drawing" ? "Wins" : ""}
          </h2>
        )}

        {!wins && (
          <h2>
            <span>{go.toUpperCase()}'s</span> Turn
          </h2>
        )}
      </div>
    </>
  );
}

export default App;
