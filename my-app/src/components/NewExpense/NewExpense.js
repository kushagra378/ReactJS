import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import Records from "../../API/records.json";
// const fs = require('fs');

const recordLength = ((Object.keys(Records).length)) + 1

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: recordLength,
    };
    
    // const saveData =(newExpenseData) =>{
    //   const finished =(error) =>{
    //     if(error){
    //       console.error(error);
    //       return;
    //     }
    //   }
    //   const jsonData = JSON.stringify(newExpenseData, null, 2);
    //   fs.writeFile('../../API/records.json', jsonData, finished)
    // }
    // saveData(expenseData)
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
        />
      )}
    </div>
  );
};
export default NewExpense;
