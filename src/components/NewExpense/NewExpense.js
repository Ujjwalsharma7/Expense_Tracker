import React from "react";
import './NewExpense.css'
import Expenseform from "./Expenseform";

const NewExpense = (props) =>{
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        };
    props.onAddExpense(expenseData)
    }
    return <div className="new-expense">
        <Expenseform onSaveExpenseData={saveExpenseDataHandler}/>
            </div>
}

export default NewExpense

