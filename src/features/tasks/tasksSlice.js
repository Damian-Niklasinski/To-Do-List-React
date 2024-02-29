import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(({ id }) => id === payload);
            tasks[index].done = !tasks[index].done;
        },
        allTaskDone: ({ tasks }) => {
            for (const task of tasks) {
                task.done = true;
            };
        },
        removeTasks: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(({ id }) => id === id);
            tasks.splice(index, 1);
        },
    },
});

export const {
    addTask,
    toggleHideDone,
    toggleTaskDone,
    allTaskDone,
    removeTasks,
} = tasksSlice.actions;

export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;