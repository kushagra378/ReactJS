import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart";
import Total from "../Total/Total";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("All");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  let filteredExpenses ={};
  if(filteredYear === "All"){
    filteredExpenses = props.items;
  }
  else{
    filteredExpenses = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === filteredYear;
    });
  }
  
  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onfilterChange={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
    </Card>
    <Card className="expenses">
      <Total items={filteredExpenses}/>
    </Card>
    </div>
  );
};

export default Expenses;