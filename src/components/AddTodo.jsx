import React, { useState } from "react";
const AddTodo = (props) => {
  const [inputText, setInputText] = useState("");
  return (
    <div className="class-container">
      <input
        type="text"
        placeholder="Enter Your Todo"
        className="input-box-todo"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />

      <button
        type="button"
        className="add-btn"
        onClick={() => {
          props.addList(inputText);
          setInputText("");
        }}
      >
        +
      </button>
    </div>
  );
};
export default AddTodo;
