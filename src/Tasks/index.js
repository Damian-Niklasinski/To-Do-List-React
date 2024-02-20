import "./style.css";

const Tasks = ( {tasks, hideDoneTasks} ) => (
    <ul className="list__list">
        {tasks.map(task => (
            <li
                className={`list__item${task.done && hideDoneTasks ? " list__item--hidden" : ""}`}
            >
                <button className="list__item--doneButton">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`"${task.done ? " list__item--done" : ""}`}>
                    {task.content}
                </span>
                <button className="list__item--removeButton">
                    🗑️
                </button>
            </li>
        ))}
    </ul >
);

export default Tasks;