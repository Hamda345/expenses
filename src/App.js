import { useState } from "react";
import ExpenseItem from "./Components/ExpenseItem";
import Expenses from "./Components/Expenses";
import NewExpense from "./Components/NewExpense";

const oldExpenses = [
  {
    id: "e1",
    title: "Mec",
    date: new Date(2022, 7, 17),
    price: 500,
  },
  {
    id: "e2",
    title: "Phone",
    date: new Date(2023, 3, 22),
    price: 2500,
  },
  {
    id: "e3",
    title: "Voyage",
    date: new Date(2020, 12, 31),
    price: 785,
  },
  {
    id: "e4",
    title: "Education",
    date: new Date(2023, 9, 18),
    price: 2832,
  },
];
function App() {
  const [expenses, setExpenses] = useState(oldExpenses);
  const addExpense = (newExpense) => {
    setExpenses((prevState) => [newExpense, ...prevState]);
  };
  return (
    <div>
      <NewExpense addExpense={addExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
