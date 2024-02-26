import { useState, useEffect} from "react";

export const useTasks = () => {
    const [hideDone, setHideDone] = useState(false);

    const tasksInStorage = localStorage.getItem("tasks");

    const [tasks, setTasks] = useState(
        tasksInStorage ? JSON.parse(tasksInStorage) : []
    );

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks]);

    const toggleHideDone = () => {
        setHideDone(hideDone => !hideDone);
    };

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            }

            return task;
        }));
    };

    const allTaskDone = () => {
        setTasks(tasks => tasks.map(tasks => ({ ...tasks, done: true, })));
    };

    const addNewTask = (newTaskContent) => {
        setTasks(tasks => [
            ...tasks,
            {
                content: newTaskContent,
                done: false,
                id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
            },
        ]);
    };

    return {
        tasks,
        hideDone,
        toggleHideDone,
        removeTask,
        toggleTaskDone,
        allTaskDone,
        addNewTask,
    };
};