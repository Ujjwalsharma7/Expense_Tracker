import Expenseitem from './Expenseitem'
import './expense.css'
import Card from '../UI/Card';
import ExpensesFilter from './Expensefilter';
import { useState } from 'react';

function Expense(props) {
  const [filterYear, setFilteryear] = useState('2022')
    const filterChangeHandler = Selectedyear =>{
       setFilteryear(Selectedyear)
    }

    return (
        <div>
        <Card className='expense'>
            <ExpensesFilter selected = {filterYear} onFilterChnage = {filterChangeHandler}/>
            {props.items.map(expense => <Expenseitem 
            title = {expense.title} 
            amount = {expense.amount} 
            date={expense.date}
            />
            )}
        
        
   </Card>
   </div>
    )
}

export default Expense;