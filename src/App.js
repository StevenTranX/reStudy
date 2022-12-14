import React from "react";
import Dropdown from "./Components/Advanced-React/inversion-of-control/Dropdown";
const options = [
  {
    title: "FrontEnd Dev",
    onClick() {},
  },
  {
    title: "BackEnd Dev",
    onClick() {},
  },
  {
    title: "FullStack Dev",
    onClick() {},
  },
];
const App = () => {
  return (
    <div>
      {/* <Dropdown
        options={options}
        placeholder="Please Select Your Shits"
        inputPlaceHolder={"Search your Job...."}
        visibleIconCheck
      /> */}
      <Dropdown
        options={options}
        placeholder="Please Select Your Shits"
        inputPlaceHolder={"Search your Job...."}
        visibleIconCheck
      />
    </div>
  );
};

export default App;
