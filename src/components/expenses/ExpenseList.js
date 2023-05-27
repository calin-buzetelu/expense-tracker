import { useState } from "react";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import Card from "../ui/Card";
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';

function ExpenseList(props) {

    const [filteredYear, setFilteredYear] = useState('2020')

    const saveYearHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    return (
        <div>
            <ExpensesFilter selected={filteredYear} onYearChange={saveYearHandler} />
            <Card className="expenses">
                <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date} />
                <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date} />
                <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date} />
                <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date} />
            </Card >
        </div>
    );
}

export default ExpenseList;