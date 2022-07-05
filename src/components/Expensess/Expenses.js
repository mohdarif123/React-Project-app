import React from "react";
import ExpenseItem from "../Expensess/ExpenseItem";

const Expenses = (props) => {
  return (
    <>
      <ExpenseItem
        title={props.items[0].expenseItem}
        date={props.items[0].date}
        price={props.items[0].price}
      />
      <ExpenseItem
        title={props.items[1].expenseItem}
        date={props.items[1].date}
        price={props.items[1].price}
      />
      <ExpenseItem
        title={props.items[2].expenseItem}
        date={props.items[2].date}
        price={props.items[2].price}
      />
      <ExpenseItem
        title={props.items[3].expenseItem}
        date={props.items[3].date}
        price={props.items[3].price}
      />
    </>
  );
};

export default Expenses;
