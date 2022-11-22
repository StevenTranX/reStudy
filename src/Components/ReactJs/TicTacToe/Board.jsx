import React from 'react';
import Square from './Square';

const Board = ({ squares, onClick }) => {
  // Cú pháp để tạo ra 1 array
  // Array[9].fill() -> tạo ra 1 array có 9 phần tử, nội dung ở trong fill
  // Sau đó map ra 9 ô
  return (
    <div className='game-board'>
      {squares.map((item, index) => {
        return (
          <Square
            key={index}
            value={item}
            onClick={() => {
              onClick(index);
            }}
            className={
              item !== null && item === 'X'
                ? 'is-x'
                : item === 'O'
                ? 'is-o'
                : ''
            }
          ></Square>
        );
      })}
    </div>
  );
};

export default Board;
