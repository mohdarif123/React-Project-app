import React, { useState } from "react";
import Card from "../Card/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [titleValue, setTitleValue] = useState(props.title);

  const clickHandler = () => {
    setTitleValue("updated");
  };

  return (
    <>
      <Card className="expense-item"> 
        <ExpenseDate date={props.date} />

        <div className="expense-item_description">
          <h2>{titleValue}</h2>
        </div>
        <div className="expense-item_price">
          <button style={{ marginRight: "20px" }}>{props.price}</button>
          <button onClick={clickHandler}>Chagen Title</button>
        </div>
      </Card>
    </>
  );
};

export default ExpenseItem;
