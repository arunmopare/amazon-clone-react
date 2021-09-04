import Expense from "./components/Expenses/Expenses";
const App = () => {
  const expenses = [
    {
      id: "1",
      title: "Car Insurance",
      amount: 55,
      date: new Date(10, 6, 2020),
    },
    {
      id: "e2",
      title: "Medical Bill",
      amount: 75,
      date: new Date(13, 6, 2020),
    },
    {
      id: "e3",
      title: "Mobile Purchase",
      amount: 54,
      date: new Date(11, 6, 2020),
    },
    { id: "e4", title: "Shopping", amount: 81, date: new Date(14, 6, 2020) },
  ];

  return (
    <div>
      <Expense items={expenses}></Expense>
    </div>
  );
}

export default App;
