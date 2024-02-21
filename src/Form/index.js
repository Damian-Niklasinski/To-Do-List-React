import React, { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {

    const [newTaskContent, setNewTask] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTask("");
    };

    return (
        <form className="form__form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                className="form__formInput"
                autoFocus
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTask(target.value)}
            />
            <button className="form__formButton">Dodaj zadanie</button>
        </form>
    );
};


export default Form;