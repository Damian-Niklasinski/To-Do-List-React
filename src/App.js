import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
    { id: 1, content: "Ugotować obiad", done: true },
    { id: 2, content: "Zjeść kolacje", done: false },
];

const hideDoneTasks = false;


function App() {
    return (
        <Container>
            <Header title="Lista zadań" />
            <Section
                title="Dodaj nowe zadanie"
                body={<Form />}
            />

            <Section
                title="Lista zadań"
                body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
                HeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
            />
        </Container>
    );
}

export default App;