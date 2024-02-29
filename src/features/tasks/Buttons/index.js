import { selectTasks, toggleHideDone, allTaskDone } from "../tasksSlice";
import { StyledButtons, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const Buttons = () => {
    const {tasks, hideDone} = useSelector(selectTasks);
    const dispatch = useDispatch();
    return (
        <StyledButtons>
            {tasks.length > 0 && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        onClick={() => dispatch(allTaskDone())}
                        disabled={tasks.every(({ done }) => done)}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </StyledButtons>
    )
};

export default Buttons;