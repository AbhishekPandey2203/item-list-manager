import React, { useState } from "react";
import "./App.css"; 

const ItemListManager = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="container">
      <header className="header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png"
          alt="HackerRank Logo"
          className="logo"
        />
        <h1>Item List Manager</h1>
      </header>
      <div className="content">
        <h2>Item List</h2>
        <div className="input-section">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter item"
            className="input-field"
          />
          <button onClick={handleAddItem} className="add-button">
            Add Item
          </button>
        </div>
        <ul className="item-list">
          {items.map((item, index) => (
            <li key={index} className="list-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ItemListManager;