import React from "react";
import Expenses from "./components/Expensess/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "1",
      date: new Date(2021, 4, 4),
      expenseItem: "Car Insurance",
      price: 123,
    },
    {
      id: "2",
      date: new Date(2021, 8, 6),
      expenseItem: "Bike Insurance",
      price: 1273,
    },
    {
      id: "3",
      date: new Date(2022, 4, 4),
      expenseItem: "Truck Insurance",
      price: 12663,
    },
    {
      id: "4",
      date: new Date(2019, 4, 4),
      expenseItem: "Train Insurance",
      price: 14444,
    },
  ];

  return (
    <>
      <NewExpense />
      <Expenses items={expenses} />
    </>
  );
};

export default App;
