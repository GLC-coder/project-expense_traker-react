import React, { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const expenseContainer = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 3004.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "House Insurance",
    amount: 900.99,
    date: new Date(2019, 2, 28),
  },
  {
    id: "e5",
    title: "House Insurance",
    amount: 194.67,
    date: new Date(2020, 11, 28),
  },
  {
    id: "e6",
    title: "Car Insurance",
    amount: 794.67,
    date: new Date(2020, 1, 28),
  }
];


const App = () => {
  const [expenses, setExpenses] = useState(expenseContainer);

  const getExpenseDataHandler = (data) => {
    setExpenses((prevExprenes) => {
      return [data, ...prevExprenes];
    });
  };
  return (
    <div>
      <NewExpense OnGetExpenseData={getExpenseDataHandler} />
      <Expense items={expenses} />
    </div>
  );
};

export default App;
