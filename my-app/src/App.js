import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Records from "../src/API/records.json";

let DUMMY_EXPENSES = [];

Records.map((record) => {
  const oldDate = new Date(record.date);
  const year = oldDate.getFullYear();
  const month = oldDate.toLocaleString("en-US", { month: "2-digit" });
  const day = oldDate.toLocaleString("en-US", { day: "2-digit" });
  const newDate = new Date(year, month - 1, day); //YYYY, MM, DD;
  DUMMY_EXPENSES.push({
    id: record.id,
    title: record.title,
    amount: record.amount,
    date: newDate,
  });
  return 0;
});

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
