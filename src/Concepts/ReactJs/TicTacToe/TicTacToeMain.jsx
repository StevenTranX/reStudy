import React, { useReducer, useState } from 'react';
import Board from './Board';
import { calculateWinner, winner } from './helpers';
import './TictactoeStyle.css';
const TicTacToeMain = () => {
  // This is the tictactoe main
  // Component structure => (1st). Game -> Board(2nd) -> Square(3rd)
  // Game component

  // Cấu trúc useReducer
  // const [state, dispatch] = useReducer ( reducer , initialState);
  // const action = {type : 'CLICK', payload : {}}
  const initialState = {
    board: Array(9).fill(null),
    xIsNext: true,
  };
  const gameReducer = (state, action) => {
    switch (action.type) {
      case 'CLICK': {
        const { board, xIsNext } = state;
        const { index, winner } = action.payload;
        if (winner || board[index]) return;
        const nextState = JSON.parse(JSON.stringify(state));
        // deep copy method
        nextState.board[index] = xIsNext ? 'X' : 'O';
        nextState.xIsNext = !xIsNext;
        return nextState;
      }
      case 'RESET':
        const nextState = JSON.parse(JSON.stringify(state));
        nextState.board = Array(9).fill(null);
        nextState.xIsNext = true;
        return nextState;
      default:
        break;
    }
    return state;
  };
  const [state, dispatch] = useReducer(gameReducer, initialState);
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(state.board);
  const handleClick = (index) => {
    // const boardClone = [...state.board];
    // if (winner || boardClone[index]) return;
    dispatch({ type: 'CLICK', payload: { index, winner } });
    // boardClone[index] = xIsNext ? 'X' : 'O';
    // setBoard(boardClone);
    // setXIsNext(!xIsNext);
  };
  const handleResetGame = () => {
    dispatch({ type: 'RESET' });
  };
  return (
    <div>
      <Board squares={state.board} onClick={handleClick}></Board>
      <button onClick={handleResetGame}>Reset game</button>
    </div>
  );
};

export default TicTacToeMain;
