import { Input } from "postcss";
import React, { useState } from "react";

const HandleValue = () => {
  return (
    <div>
      <MyInput render = {(value) => { return <DisplayValue value = {value}/>}} />
    </div>
  );
};

const MyInput = (props) => {
  const [value, setValue] = useState(0);
  return (
    <>
    <input
      type="text"
      className="border-4 border-gray-500  "
      onChange={(e) => setValue(e.target.value)}
      value = {value}
    />
    {props.render(value)}
    </>
  );
};
const DisplayValue = ({ value }) => {
  return <span className="text-3xl text-green-700">{value}</span>
}

export default HandleValue;
