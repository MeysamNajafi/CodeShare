import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setIsLoading(state, action) {
            state.isLoading = !state.isLoading;
        },
    },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
