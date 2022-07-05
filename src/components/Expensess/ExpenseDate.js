import React from "react";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.toLocaleString("en-US", { year: "numeric" });
  const date = props.date.toLocaleString("en-US", { date: "numeric" });
  return (
    <>
      <div className="expense-date">
        <h2 className="expense_date__month">{month}</h2>
        <h2 className="expense-date__year">{year}</h2>
        <h2 className="expense-date__day">{date}</h2>
      </div>
    </>
  );
};

export default ExpenseDate;
