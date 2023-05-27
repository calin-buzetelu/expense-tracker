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
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onYearChange={saveYearHandler} />
                {
                    props.expenses.filter(item => item.date.getFullYear() === Number(filteredYear))
                        .map((item) => {
                            return <ExpenseItem
                                key={item.id}
                                title={item.title}
                                amount={item.amount}
                                date={item.date} />
                        })
                }
            </Card >
        </div>
    );
}

export default ExpenseList;