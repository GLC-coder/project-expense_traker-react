import React,{useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setEditing] = useState(false);
  const saveExpenseDataHandler = (data) => {
    const expenseData = { ...data, id: Math.random().toString() };
    props.OnGetExpenseData(expenseData);
  };

  const AddNewExpenseHandler = () => {
    setEditing(true)
  }

  const CancelHandler = () => {
    setEditing(false)
  }
  return (
    <div className="new-expense">
     {!isEditing && <button onClick ={AddNewExpenseHandler}>Add New Expense</button> }
      {isEditing && <ExpenseForm OnSaveExpenseData={saveExpenseDataHandler} onCancel = {CancelHandler} />}
    </div>
  );
};
export default NewExpense;
