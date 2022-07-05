import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enterTitle: "",
  //   enteredAmount: "",
  //   enterDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enterTitle: event.target.value,
    // });

    // setUserInput((previous) => {
    //   return {
    //     ...previous,
    //     enterTitle: event.target.value,
    //   };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...enteredAmount,
    //   enterTitle: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);

    // setUserInput({
    //   ...enterDate,
    //   enterTitle: event.target.value,
    // });
  };

  const submitHandler = () => {};

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
            />
          </div>

          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2014-07-02"
              max="2022-06-23"
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
