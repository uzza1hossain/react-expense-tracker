import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import { useState } from "react";

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title)


    const clickHandler = () => {
        const titles = ["I am updated", "I am not updated", "I am updated 2nd", "I am not updated 2nd"]
        setTitle("I am updated");
        console.log(title);
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
};

export default ExpenseItem;
