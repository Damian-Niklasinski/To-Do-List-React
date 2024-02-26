import React, { useState } from "react";
import { Forms, Input, Button } from "./styled";


const Form = ({ addNewTask }) => {

    const [newTaskContent, setNewTask] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTask("");
    };

    return (
        <Forms
            onSubmit={onFormSubmit}>
            <Input
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