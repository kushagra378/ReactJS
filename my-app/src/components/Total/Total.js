import Card from "../UI/Card";
import "./Total.css";

const Total = (props) => {
  const dataPointValues = props.items.map((dataPoint) => dataPoint.amount);
  let sum = 0;
  for (let i of dataPointValues) {
    sum += i;
  }
  const totalSum = sum; //Math.max(...dataPointValues);
  return (
    <Card className="expense-item total">
      <div className="expense-item__description total">
        <h2 className="expense-item h2 total">Total</h2>
        <div className="expense-item__price">${totalSum}</div>
      </div>
    </Card>
  );
};
export default Total;
