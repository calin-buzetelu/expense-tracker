import Card from "../ui/Card";
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>{props.amount}</div>
                </div>
                <button>Change title</button>
            </Card >
        </li>
    );
}

export default ExpenseItem;