import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./UI/Card";

const Expenses = ({ expenses }) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
        price={expenses[0].price}
      />
      <ExpenseItem
        title={expenses[1].title}
        date={expenses[1].date}
        price={expenses[1].price}
      />
      <ExpenseItem
        title={expenses[2].title}
        date={expenses[2].date}
        price={expenses[2].price}
      />
      <ExpenseItem
        title={expenses[3].title}
        date={expenses[3].date}
        price={expenses[3].price}
      />
    </Card>
  );
};

export default Expenses;
