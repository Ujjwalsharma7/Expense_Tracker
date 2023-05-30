import './Expenseitem.css'

function Expenseitem(){
    return (
    <div className="expense-item">
        <div>May 30 2023</div>
        <div className="expense-item__description">
            <h2>Car Insurance</h2>
            <div className="expense-item__price">$294.67</div>
        </div>
    </div>
    );
}
export default Expenseitem;
