import React, { useState } from "react";

function TodoInput(props) {
  const [inputText, setInputText] = useState("");
  const [inputDate, setInputDate] = useState(""); // Add state for input date

  return (
    <div className="input-container">
      <div className="header-add-button">
        <h1 className="app-heading">All Tasks</h1>
        <div className="date-picker">
          <input
            type="date"
            className="input-date-todo"
            value={inputDate}
            onChange={(e) => {
              setInputDate(e.target.value);
            }}
          />
        </div>
        <button
          className="add-btn"
          onClick={() => {
            props.addList(inputText, inputDate); // Pass both text and date to addList
            setInputText("");
            setInputDate("");
          }}
        ></button>
      </div>
      <input
        type="text"
        className="input-box-todo"
        placeholder="Add a new task inside 'All' category"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
    </div>
  );
}

export default TodoInput;
