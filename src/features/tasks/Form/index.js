import React, { useState, useRef } from "react";
import { StyledForm, Input, Button } from "./styled";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTask } from "../tasksSlice";


const Form = () => {

    const [newTaskContent, setNewTask] = useState("");
    const inputFocus = useRef(null);

    const dispatch = useDispatch();

    const onStyledFormubmit = (event) => {
        event.preventDefault();

        dispatch(addTask({
            content: newTaskContent.trim(),
            done: false,
            id: nanoid(),

        }));

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