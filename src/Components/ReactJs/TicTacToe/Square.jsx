import React from 'react';

const Square = ({ onClick, value, className }) => {
  return (
    <div className={`game-square ${className}`} onClick={onClick}>
      {value}
    </div>
  );
};

export default Square;
