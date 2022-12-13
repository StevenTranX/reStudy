import React from "react";
import Counter from "./Components/Advanced-React/stateReducer/control-props-copy/Counter";
import useCounter from "./Components/Advanced-React/stateReducer/control-props-copy/useCounter";

const App = () => {
  const { count, handleDecrement, handleIncrement } = useCounter({
    initial: 0,
  });
  return (
    <div>
      <Counter
        count={count}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      ></Counter>
    </div>
  );
};

export default App;
