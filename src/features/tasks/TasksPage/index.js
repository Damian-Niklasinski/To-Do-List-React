import React from "react";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Search from "./Search";
import ExampleTasksButton from "./ExampleTasksButton"

function TasksPage() {

    return (

        <Container>
            <Header title="Lista zadań" />
            <Section
                title="Dodaj nowe zadanie"
                body={<Form />}
                headerContent={<ExampleTasksButton />}
            />

            <Section
                title="Wyszukiwarka"
                body={<Search />}
            />

            <Section
                title="Lista zadań"
                body={<TaskList />}
                headerContent={<Buttons />}
            />
        </Container>
    );
}

export default TasksPage;
