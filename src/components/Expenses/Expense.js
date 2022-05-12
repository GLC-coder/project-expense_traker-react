import React, { useState } from "react";
import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expense = (props) => {
  const [filteredYear, setSeletedYear] = useState("2022");
  const onSaveSelectedYearHandler = (selectedYear) => {
    setSeletedYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );
  
  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onSaveSelectedYear={onSaveSelectedYearHandler}
      />
      <ExpensesChart filteredExpenses = {filteredExpenses} />
      <ExpensesList items = {filteredExpenses} />
    </Card> 
  );
};
export default Expense;
