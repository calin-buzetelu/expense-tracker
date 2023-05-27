import { useState } from "react";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import Card from "../ui/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesList from "./ExpensesList";

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020')

    const saveYearHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpensesByYear = props.expenses
        .filter(item => item.date.getFullYear() === Number(filteredYear));

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onYearChange={saveYearHandler} />
                <ExpensesList items={filteredExpensesByYear} />
            </Card >
        </div>
    );
}

export default Expenses;