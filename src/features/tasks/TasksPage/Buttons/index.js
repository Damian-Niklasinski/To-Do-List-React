import { StyledButtons, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
    selectTasksState,
    selectHideDone,
    toggleHideDone,
    allTaskDone,
    selectIsEveryTaskDone,
} from "../../tasksSlice";


const Buttons = () => {
    const { tasks } = useSelector(selectTasksState);
    const { hideDone } = useSelector(selectHideDone);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
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
                        disabled={isEveryTaskDone}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </StyledButtons>
    )
};

export default Buttons;