import React from "react";

const InputBox = (props) => {
  console.log("rendersss");
  return (
    <div
      style={{
        width: "300px",
        height: "100px",
        background: "white",
        textAlign: "center",
        marginTop: "20px",
      }}
    >
      <div>Input Box</div>
      <input type="number" onChange={() => {}} />
    </div>
  );
};

export default InputBox;
