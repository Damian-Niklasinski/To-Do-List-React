import { StyledButtons, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, allTaskDone }) => (
    <StyledButtons>
        {tasks.length > 0 && (
            <>
                <Button onClick={toggleHideDone}>
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </Button>
                <Button
                    onClick={allTaskDone}
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </Button>
            </>
        )}
    </StyledButtons>
);

export default Buttons;