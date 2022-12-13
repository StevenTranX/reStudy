import React from "react";
import { useCount } from "./count-context";
import useCounter from "./useCounter";

const Increment = ({ onClick, ...props }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="increment p-3 flex items-center justify-center bg-slate-200 text-lg "
        {...props}
      >
        +
      </button>
    </>
  );
};

export default Increment;
