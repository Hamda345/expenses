import ExpenseItem from "./Components/ExpenseItem";
import Expenses from "./Components/Expenses";
import NewExpense from "./Components/NewExpense";

function App() {
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

  return (
    <div>
      <NewExpense />
      <Expenses expenses={oldExpenses} />
    </div>
  );
}

export default App;
