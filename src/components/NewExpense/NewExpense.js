import React from 'react';
import { useState } from 'react';

import ExpenseForm from './Expenseform';
import './NewExpense.css';

const NewExpense = (props) => {
const [isEditing, setisEditing] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setisEditing(false);
  };

  const startEditingHnadler = () =>{
    setisEditing(true);
  }
  const stopEditingHandler = () =>{
    setisEditing(false)
  }

  return (
    <div className='new-expense'>
     {!isEditing && <button onClick={startEditingHnadler}>Add New Expense</button>}
      {isEditing && <ExpenseForm
       onSaveExpenseData={saveExpenseDataHandler}
       onCancel = {stopEditingHandler}
       />}
    </div>
  );
};

export default NewExpense;
