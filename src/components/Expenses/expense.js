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
        <Expenseitem
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date}></Expenseitem>
        <Expenseitem title={props.items[1].title}
            amount={props.items[1].amount}
            date={props.items[1].date}></Expenseitem>
        <Expenseitem
            title={props.items[2].title}
            amount={props.items[2].amount}
            date={props.items[2].date}></Expenseitem>
        <Expenseitem
            title={props.items[3].title}
            amount={props.items[3].amount}
            date={props.items[3].date}></Expenseitem>
   </Card>
   </div>
    )
}

export default Expense;