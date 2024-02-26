import React, { useState, useRef } from "react";
import { Forms, Input, Button } from "./styled";


const Form = ({ addNewTask }) => {

    const [newTaskContent, setNewTask] = useState("");
    const inputFocus = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTask("");
        inputFocus.current.focus();
    };

    return (
        <Forms
            onSubmit={onFormSubmit}>
            <Input
                ref={inputFocus}
                value={newTaskContent}
                autoFocus
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTask(target.value)}
            />
            <Button>
                Dodaj zadanie
            </Button>
        </Forms>
    );
};


export default Form;