import { useState } from "react";
import Expense from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const DUMMY_EXPENSES = [
    {
      id: "1",
      title: "Car Insurance",
      amount: 55,
      date: new Date(2020, 5, 12),
    },
    {
      id: "e2",
      title: "Medical Bill",
      amount: 75,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e3",
      title: "Mobile Purchase",
      amount: 54,
      date: new Date(2022, 5, 12),
    },
    { id: "e4", title: "Shopping", amount: 81, date: new Date(14, 6, 2020) },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses}></Expense>
    </div>
  );
};

export default App;
