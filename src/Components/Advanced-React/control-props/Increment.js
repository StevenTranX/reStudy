import React from "react";
import { useCount } from "./count-context";

const Increment = () => {
  const { handleIncrement } = useCount();
  return (
    <>
      <button
       onClick={handleIncrement}
       className="increment p-3 flex items-center justify-center bg-slate-200 text-lg ">
        +
      </button>
    </>
  );
};

export default Increment;
