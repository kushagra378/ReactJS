import React, { useEffect, useState, useContext } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import DataContext from "./store/api-call";
import Loading from "../../assets/loading.gif";

let EXPENSES = [];

const ExpenseTracker = () => {
  const dataCtx = useContext(DataContext);
  const [backendData, setBeckendData] = useState([{}]);
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBeckendData(data);
      });
  }, []);
  if (backendData.length !== 1) {
    dataCtx.isDataFetched = true;
    backendData.records.map((record) => {
      const oldDate = new Date(record.date);
      const year = oldDate.getFullYear();
      const month = oldDate.toLocaleString("en-US", { month: "2-digit" });
      const day = oldDate.toLocaleString("en-US", { day: "2-digit" });
      const newDate = new Date(year, month - 1, day); //YYYY, MM, DD;
      EXPENSES.push({
        id: record.id,
        title: record.title.toUpperCase(),
        amount: Number(record.amount),
        date: newDate,
      });
      return 0;
    });
  } else {
    console.log("Error in Retrieving Data!");
  }

  const [expenses, setExpenses] = useState(EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <React.Fragment>
        <NewExpense onAddExpense={addExpenseHandler} data={backendData} />
        {backendData.length === 1 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10rem",
              height: "10rem",
            }}
          >
            <img src={Loading} alt="Loading..." />
          </div>
        ) : (
          // <h1 style={mystle}>Loading...</h1>
          <Expenses items={expenses} />
        )}
      </React.Fragment>
    </div>
  );
};

export default ExpenseTracker;
