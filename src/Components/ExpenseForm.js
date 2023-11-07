import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ getData }) => {
  const [userInput, setUserInput] = useState({
    entredTitle: "",
    entredPrice: "",
    entredDate: "",
  });
  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, entredTitle: event.target.value };
    });
  };
  const priceChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, entredPrice: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, entredDate: event.target.value };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const exp = {
      title: userInput.entredTitle,
      price: userInput.entredPrice,
      date: new Date(userInput.entredDate),
      id: Math.random().toString(),
    };
    getData(exp);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={userInput.entredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input type="number" value={userInput.entredPrice} step="0.001" onChange={priceChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2024-12-31"
            value={userInput.entredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
