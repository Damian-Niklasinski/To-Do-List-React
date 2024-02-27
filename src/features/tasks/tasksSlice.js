import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: `tasks`,
    initalState: {
        tasks: [],
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
    },
});

export const { addTask } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;
