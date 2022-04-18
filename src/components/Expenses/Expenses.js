import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterDataChangeHandler = (filterData) => {
        setFilteredYear(filterData);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onFilterDataChange={filterDataChangeHandler}
                />

                {props.items.map((expense) => (
                    <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </Card>
        </div>
    );
};

export default Expenses;
