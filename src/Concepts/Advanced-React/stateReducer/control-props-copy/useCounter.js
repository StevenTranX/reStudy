import { useReducer } from "react";
const counterReducer = ({ count }, { type, payload }) => {
  switch (type) {
    case "increment":
      return {
        count: count + 1,
      };
    case "decrement":
      return {
        count: count - 1,
      };
    default:
      throw new Error(`Unhandled action type ${type}`);
  }
};
export default function useCounter(
  { initValue = 0 } = {},
  reducer = counterReducer
) {
  const [count, dispatch] = useReducer(reducer, { count: initValue });
  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };
  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };
  return {
    count,
    handleIncrement,
    handleDecrement,
  };
}
