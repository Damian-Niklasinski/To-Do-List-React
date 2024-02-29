import { selectTasks, toggleTaskDone, removeTasks } from "../tasksSlice";
import { List, Item, DoneButton, RemoveButton, Span } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const TaskList = () => {
    const {tasks, hideDone} = useSelector(selectTasks);
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
                     {task.content}
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