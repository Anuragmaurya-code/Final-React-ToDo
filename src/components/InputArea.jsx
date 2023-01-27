import React, { useState } from "react";

function InputArea(props) {
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  const [inputText, setInputText] = useState("");

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          props.addItem(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
