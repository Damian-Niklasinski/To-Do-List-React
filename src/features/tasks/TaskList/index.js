import { List, Item, DoneButton, RemoveButton, Span } from "./styled";

const TaskList = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <List>
        {tasks.map(task => (
            <Item
                hidden={task.done && hideDone}
            >
                <DoneButton
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✔" : ""}
                </DoneButton>
                <Span done={task.done}>
                    {task.id}. {task.content}
                </Span>
                <RemoveButton
                    onClick={() => removeTask(task.id)}
                >
                    🗑️
                </RemoveButton>
            </Item>
        ))}
    </List>
);

export default TaskList;