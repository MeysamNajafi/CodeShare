import { configureStore, createSlice } from "@reduxjs/toolkit";

import authSlice from "./auth";
let theme, editorSettings;

if (typeof window !== "undefined") {
    theme = localStorage.getItem("theme");
    editorSettings = localStorage.getItem("editorSettings");
    if (editorSettings) editorSettings = JSON.parse(editorSettings);
}

const EDITOR_SETTINGS = {
    foldGutter: false,
    highlightActiveLineGutter: false,
    highlightActiveLine: false,
    indentOnInput: true,
};

const rootSlice = createSlice({
    name: "root",
    initialState: {
        api: "http://localhost:5001/api",
        codeEditorTheme: theme,
        HTMLCode: "",
        CSSCode: "",
        JSCode: "",
        editorSettings: editorSettings || EDITOR_SETTINGS,
        isPenSaved: false,
        savedPen: {},
    },
    reducers: {
        changeCodeEditorTheme(state, action) {
            state.codeEditorTheme = action.payload;
        },
        setCode(state, action) {
            const codeType = action.payload.codeType;
            const code = action.payload.code;

            if (codeType == "HTML") state.HTMLCode = code;
            if (codeType == "CSS") state.CSSCode = code;
            if (codeType == "Javascript") state.JSCode = code;
        },
        setEditorSettings(state, action) {
            state.editorSettings = { ...state.editorSettings, ...action.payload };
        },
        setIsPenSaved(state, action) {
            state.isPenSaved = action.payload;
        },
        setSavedPen(state, action) {
            state.savedPen = action.payload;
        },
    },
});

const store = configureStore({
    reducer: { root: rootSlice.reducer, auth: authSlice },
});

export const rootActions = rootSlice.actions;
export default store;
