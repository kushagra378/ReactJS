import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title.toUpperCase()}</h2>
          <div className="expense-item__price">
            ${Number(props.amount).toFixed(2)}
          </div>
        </div>
      </Card>
    </li>
  );
};
export default ExpenseItem;
