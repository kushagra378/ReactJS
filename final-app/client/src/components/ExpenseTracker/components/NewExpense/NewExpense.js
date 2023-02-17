import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
// import Axios from "axios";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = enteredExpenseData;
    props.onAddExpense(expenseData);

    setEditing(false);
  };
  const [isEditing, setEditing] = useState(false);
  const startEditingHandler = () => {
    setEditing(true);
  };
  const stopEditingHandler = () => {
    setEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
          prp={props}
        />
      )}
    </div>
  );
};
export default NewExpense;
