import { useLocation } from "react-router-dom";
import { toggleTaskDone, removeTasks, selectTasksByQuery, selectHideDone } from "../../tasksSlice";
import { List, Item, DoneButton, RemoveButton, Span, StyledLink } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import searchQueryParamName from "../searchQueryParamName";

const TaskList = () => {

    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);
    
    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();
    return (
        <List>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <DoneButton
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✔" : ""}
                    </DoneButton>
                    <Span $done={task.done}>
                     <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
                    </Span>
                    <RemoveButton
                        onClick={() => dispatch(removeTasks(task.id))}
                    >
                        🗑️
                    </RemoveButton>
                </Item>
            ))}
        </List>
    )
};

export default TaskList;