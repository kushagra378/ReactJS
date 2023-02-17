import { useContext, useState } from "react";
import DataContext from "../../store/api-call";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const dataCtx = useContext(DataContext);
  let recordedLength = 0;
  if (dataCtx.isDataFetched === true) {
    recordedLength = Object.keys(props.prp.data.records).length + 1;
  } else {
    console.log("Error Retrieving Data! - Add Expense");
  }
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmout, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const sendData = async (expenseData) => {
    const expenseDataInJSON = JSON.stringify(expenseData);
    const response = await fetch("/api", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: expenseDataInJSON,
    });
    const data = await response.json();
    console.log("Data Sent :", data);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (enteredTitle === "" || enteredDate === "" || enteredAmout === "") {
      alert("Please Enter All Values!");
      return 0;
    }
    const expenseData = {
      id: recordedLength,
      title: enteredTitle,
      amount: +enteredAmout,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);

    await sendData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmout}
            min="0.01"
            step="0.01"
            placeholder="$"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2020-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
