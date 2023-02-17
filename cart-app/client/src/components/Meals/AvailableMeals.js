import React, { useState, useEffect } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import Loading from "../../assets/loading.gif";

const AvailableMeals = () => {
  const [dbData, setDbData] = useState([{}]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/db");
      const data = await response.json();
      setDbData(data);
    };
    fetchData();
  }, []);

  return (
    <section className={classes.meals}>
      {dbData.length === 1 ? (
        <div className={classes.gif}>
          <img src={Loading} alt="Loading..." />
        </div>
      ) : (
        <Card>
          <ul>
            {dbData.Error && (
              <p>
                Error Fetching Data!
                <br />
                Try Connecting to Different Network...
              </p>
            )}
            {!dbData.Error &&
              dbData.meals.map((meal) => {
                return (
                  <MealItem
                    id={meal.id}
                    key={meal.id}
                    name={meal.name}
                    description={meal.description}
                    price={Number(meal.price)}
                  />
                );
              })}
          </ul>
        </Card>
      )}
    </section>
  );
};

export default AvailableMeals;
