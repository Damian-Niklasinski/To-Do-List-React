import { DivButtons, TasksButtons } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, allTaskDone }) => (
    <DivButtons>
        {tasks.length > 0 && (
            <>
                <TasksButtons onClick={toggleHideDone}>
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </TasksButtons>
                <TasksButtons
                    onClick={allTaskDone}
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </TasksButtons>
            </>
        )}
    </DivButtons>
);

export default Buttons;