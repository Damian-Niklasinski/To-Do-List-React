import { useState, useEffect } from "react";

export const useTasks = () => {

    const tasksInStorage = localStorage.getItem("tasks");

    const [tasks] = useState(
        tasksInStorage ? JSON.parse(tasksInStorage) : []
    );

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks]);
    
};