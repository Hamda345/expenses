import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./UI/Card";

const Expenses = ({ expenses }) => {
  return (
    <Card className="expenses">
            {expenses.map((expenses) => {
                return(
                    <ExpenseItem
                    title = {expenses.title}
                    date = {expenses.date}
                    price = {expenses.price}
                    />
                );
            })}
    </Card>
  );
};

export default Expenses;
