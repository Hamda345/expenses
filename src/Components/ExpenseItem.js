import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./UI/Card";
import { useState } from "react";
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  // let title = props.title;
  function clickHandler() {
    setTitle("New Title !!!");
    console.log(title);
  }

  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {props.price}</div>
        <button onClick={clickHandler}>Click Me!!!</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
