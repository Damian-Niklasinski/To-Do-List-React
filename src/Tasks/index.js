import "./style.css";

const Tasks = (props) => (
    <ul className="list__list">
        {props.tasks.map(task => (
            <li
            className={`list__item${task.done && props.hideDoneTasks ? " list__item--hidden" : ""}`}
            >
                <button className="list__item--doneButton">
            {task.done ? "✔" : ""}
            </button>
            <span className={`"${task.done ? " list__item--done" : ""}`}>{task.content}</span>
            <button className="list__item--removeButton">🗑️</button>
            </li>
))}
    </ul >
);

export default Tasks;