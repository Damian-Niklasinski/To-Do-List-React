import { StyledButtons, Button } from "./styled";
import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../../tasksSlice";


const ExampleTasksButton = () => {

    const dispatch = useDispatch();

    return (
        <StyledButtons>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Button>
        </StyledButtons>
    )
};

export default ExampleTasksButton;