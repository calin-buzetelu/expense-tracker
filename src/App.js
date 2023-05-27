import ExpenseList from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

import React, { useState } from "react";

const dummy_data = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  }
]

const App = () => {

  const [expenses, setExpenses] = useState(dummy_data);


  // React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', '', 'Test'),
  //   React.createElement(ExpenseList, { expenses: expenses })
  // );

  const addExpenseHandler = (expense) => {
    // We update our state based on a previous state
    // We have to use the function form
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;