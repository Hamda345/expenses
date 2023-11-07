import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = ({getData}) => {
    const  [userInput, setUserInput] = useState({
        enteredTitle: "",
        entredPrice: "",
        enteredDate: "",
    });
    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {...prevState, enteredTitle: event.target.value};
        });
    };
    const priceChangeHandler = (event) => {
        setUserInput((prevState) => {
            return{...prevState, entredPrice: event.target.value};
        });
    };
      const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, entredDate: event.target.value };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    // getData(userInput);
    const exp = {
            title: userInput.enteredTitle,
            price: userInput.entredPrice,
            date: new Date(userInput.enteredDate),
            id:Math.floor().toString(),
        };
        getData(exp);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input type="number" step={0.001} onChange={priceChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date"
            min="2020-01-01"
            max="2024-12-31"
            onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Cancel</button>
        <button>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
