import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        hideDone: false,
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
    },
});

export const {
    addTask,
    toggleHideDone,
    toggleTaskDone,
    allTaskDone,
    removeTasks,
} = tasksSlice.actions;

export const selectTasksState = state => state.tasks;
export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);
export default tasksSlice.reducer;