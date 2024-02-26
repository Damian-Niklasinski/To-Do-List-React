import React, { useEffect, useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useTasks } from "./useTasks";


function App() {
    const {
        tasks,
        hideDone,
        toggleHideDone,
        removeTask,
        toggleTaskDone,
        allTaskDone,
        addNewTask,
    } = useTasks();

    return (

        <Container>
            <Header title="Lista zadań" />
            <Section
                title="Dodaj nowe zadanie"
                body={<Form addNewTask={addNewTask} />}
            />

            <Section
                title="Lista zadań"
                body={
                    <Tasks
                        tasks={tasks}
                        hideDone={hideDone}
                        removeTask={removeTask}
                        toggleTaskDone={toggleTaskDone}
                    />
                }
                headerContent={
                    <Buttons
                        tasks={tasks}
                        hideDone={hideDone}
                        toggleHideDone={toggleHideDone}
                        allTaskDone={allTaskDone}
                    />
                }
            />
        </Container>
    );
}

export default App;
