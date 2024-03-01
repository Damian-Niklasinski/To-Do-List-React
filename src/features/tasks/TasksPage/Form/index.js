import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { StyledForm, Input, Button } from "./styled";
import { addTask } from "../../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {

    const [newTaskContent, setNewTask] = useState("");
    const inputFocus = useRef(null);

    const dispatch = useDispatch();

    const onStyledFormSubmit = (event) => {
        event.preventDefault();

        const trimmedTaskContent = newTaskContent.trim();
        if (trimmedTaskContent === "") {
            return null;
        }

        dispatch(addTask({
            content: trimmedTaskContent,
            done: false,
            id: nanoid(),
        }));

        setNewTask("");
        inputFocus.current.focus();
    };

    return (
        <StyledForm
            onSubmit={onStyledFormSubmit}>
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