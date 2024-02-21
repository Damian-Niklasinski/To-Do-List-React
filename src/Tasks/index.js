import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="list__list">
        {tasks.map(task => (
            <li
                className={`list__item${task.done && hideDone ? " list__item--hidden" : ""}`}
            >
                <button
                    className="list__item--doneButton"
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✔" : ""}
                </button>
                <span className={`"${task.done ? " list__item--done" : ""}`}>
                    {task.content}
                </span>
                <button
                    onClick={() => removeTask(task.id)}
                    className="list__item--removeButton"
                >
                    🗑️
                </button>
            </li>
        ))}
    </ul >
);

export default Tasks;