import React, { useState } from "react";

export default function CharacterCount() {
  let [input, setInput] = useState("");
  var max = 280;

  function inputHandler(event) {
       setInput(event.target.value);
  }
  return (
    <div style={{ margin: "2rem" }}>
      <h1 style={{ color: 'white' }}>Character Count</h1>
      <textarea
        type="number"
        maxLength="280"
        placeholder="Enter the text"
        onChange={inputHandler}
        style={{ width: "600px", height: "10rem" }}
      ></textarea>
      <div>
      <span style={{ color: 'white' }}>Count: {input.length} </span>
      <span style={{ color: 'white' }}>/ {max}</span>
      </div>
      <div style={{ color: 'white' }}>Character remaining: {max - input.length}</div>
    </div>
  );
}
