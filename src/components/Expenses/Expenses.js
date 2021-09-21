import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    console.log("EXPENSE", expense);
    console.log("filteredYear", filteredYear);
    console.log(
      "expense.date.getFullYear().toString()",
      expense.date.getFullYear().toString()
    );
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
          <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList
          items={filteredExpenses}
          filteredYear={filteredYear}
        ></ExpensesList>
      </Card>
    </div>
  );
};
export default Expense;
