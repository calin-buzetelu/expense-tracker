import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const updateIsClicked = () => {
        setIsButtonClicked((prevValue) => !prevValue);
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData,
        }
        props.onAddExpense(expenseData);
        updateIsClicked();
    }

    return (
        <div className='new-expense'>
            {!isButtonClicked ?
                <button onClick={updateIsClicked}>Add new expense</button> :
                <ExpenseForm onCancelEditing={updateIsClicked} onSaveExpenseData={saveExpenseDataHandler} />
            }
        </div>
    )
}

export default NewExpense;