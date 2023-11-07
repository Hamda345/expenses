import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ addExpense }) => {
  // const getData = (data) => {
  //   console.log(data);
  // };
  return (
    <div className="new-expense">
      <ExpenseForm getData={addExpense} />
    </div>
  );
};

export default NewExpense;
