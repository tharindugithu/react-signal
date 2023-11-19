import React from "react";
import { signal, effect } from "@preact/signals-react";
import InputBox from "./InputBox";

export const arrayOfval = signal(["something"]);
const enterVal = signal("");

effect(() => {
  // This effect will be triggered whenever arrayOfval.value changes
  const uppercasedArray = arrayOfval.value.map((item) => item.toUpperCase());
  // Do something with the uppercasedArray if needed
});

function App() {
  return (
    <div className="App" style={{ background: "gray", height: "100vh" }}>
      <h1>Signal</h1>
      <div>
        <input
          value={enterVal.value}
          type="text"
          onChange={(e) => {
            enterVal.value = e.target.value;
          }}
        />
        <button
          onClick={() => {
            arrayOfval.value = [...arrayOfval.value, enterVal.value];
            enterVal.value = "";
          }}
        >
          Add
        </button>
      </div>
      <div>
        <ul>
          {arrayOfval.value.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
