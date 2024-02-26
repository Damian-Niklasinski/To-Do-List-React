import React, { useState, useRef } from "react";
import { StyledForm, Input, Button } from "./styled";


const Form = ({ addNewTask }) => {

    const [newTaskContent, setNewTask] = useState("");
    const inputFocus = useRef(null);

    const onStyledFormubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTask("");
        inputFocus.current.focus();
    };

    return (
        <StyledForm
            onSubmit={onStyledFormubmit}>
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
        </StyledForm>
    );
};


export default Form;