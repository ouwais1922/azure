import { useState } from "react";
import { checkWinner } from "./utils/winnerChecker";
import { clx } from "./utils/clx";

const Board = () => {
  const [isXNext, setIsXNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [mouseHover, setMouseHover] = useState(false);
  const highlightWinner = checkWinner(squares);

  const status = highlightWinner
    ? "Winner is : " + highlightWinner
    : "Next player : " + (isXNext ? "X" : "O");

  const handleClick = (index: number) => {
    if (squares[index] || highlightWinner) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };
  const renderSquare = (i: number) => {
    return (
      <button
        className={clx(
          `w-24 h-24 bg-slate-300  border-2 `,
          mouseHover ? "hover:bg-red-200" : ""
        )}
        onClick={() => {
          handleClick(i);
          setMouseHover(true);
        }}
        onMouseLeave={() => setMouseHover(false)}
      >
        {squares[i]}
      </button>
    );
  };
  return (
    <div className="flex flex-col gap-7">
      <h1 className="font-semibold"> {status}</h1>
      <div className="">
        <div className="flex">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="flex">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="flex">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </div>
  );
};

export default Board;
