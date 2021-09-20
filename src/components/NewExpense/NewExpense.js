import React, { useState } from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

import "./NewExpense.css";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpense) => {
    console.log(enteredExpense);
    const expenseData = {
      ...enteredExpense,
      id: Math.random.toString(),
    };
    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const closeEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          closeEditing={closeEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
