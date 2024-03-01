import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
        loading: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload: task }) => {
            const index = tasks.findIndex(({ id }) => id === task);
            tasks[index].done = !tasks[index].done;
        },
        allTaskDone: ({ tasks }) => {
            for (const task of tasks) {
                task.done = true;
            };
        },
        removeTasks: ({ tasks }) => {
            const index = tasks.findIndex(({ id }) => id === id);
            tasks.splice(index, 1);
        },
        fetchExampleTasks: () => { },
        fetchExampleTasksLoading: (state) => {
            state.loading = true;
        },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
            state.loading = false;
        },
    },
});

export const {
    addTask,
    toggleHideDone,
    toggleTaskDone,
    allTaskDone,
    removeTasks,
    fetchExampleTasks,
    fetchExampleTasksLoading,   
    setTasks,
} = tasksSlice.actions;

export const selectTasksState = state => state.tasks;
export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);
export const selectLoading = state => state.tasks.loading;

export const getTaskById = (state, taskId) =>
    selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);

    if(!query || query === "") {
        return tasks;
    }
    
    return tasks.filter(({ content }) => content.toUpperCase().includes(query.toUpperCase()));
}

export default tasksSlice.reducer;