import { StyledButtons, Button, LoadingParagraph } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";


const ExampleTasksButton = () => {

    const dispatch = useDispatch();
    const Loading = useSelector(selectLoading);

    return (
        <StyledButtons>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                {Loading === true ? <LoadingParagraph>"Ładuje przykładowe zadania..."</LoadingParagraph> : "Przykładowe zadania"}
            </Button>
        </StyledButtons>
    )
};

export default ExampleTasksButton;