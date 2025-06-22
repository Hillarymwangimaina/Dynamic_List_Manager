import { useState } from "react";
import "./App.css";

function DynamicListManager() {
  const [toDoList, setToDoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim() !== "") {
      setToDoList([...toDoList, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="container">
      <h2>Dynamic List Manager</h2>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter an item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addItem}>Add Item</button>
      </div>

      <ul className="list-container">
        {toDoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default DynamicListManager;
