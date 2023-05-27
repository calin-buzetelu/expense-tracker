import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'

function ExpensesList(props) {
    // We can store JSX content inside variables
    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>No expenses found</h2>
    }

    return (
        <ul className='expenses-list'>
            {
                props.items.map((item) => {
                    return <ExpenseItem
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                        date={item.date} />
                })
            }
        </ul>
    )
}

export default ExpensesList;