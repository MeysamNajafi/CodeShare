import { useCallback, useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { EditorView } from "codemirror";
import { EditorState } from "@codemirror/state";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { useDispatch } from "react-redux";

// THEMES
import { dracula } from "@uiw/codemirror-theme-dracula";
import { darcula } from "@uiw/codemirror-theme-darcula";
import { xcodeDark, xcodeLight } from "@uiw/codemirror-theme-xcode";
import { sublime } from "@uiw/codemirror-theme-sublime";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import { githubDark, githubLight } from "@uiw/codemirror-theme-github";
import { duotoneDark, duotoneLight } from "@uiw/codemirror-theme-duotone";
import { bbedit } from "@uiw/codemirror-theme-bbedit";
import { atomone } from "@uiw/codemirror-theme-atomone";
import { androidstudio } from "@uiw/codemirror-theme-androidstudio";
import { abcdef } from "@uiw/codemirror-theme-abcdef";
import { rootActions } from "../store";
import { useSelector } from "react-redux";

const CodeEditor = (props) => {
    const dispatch = useDispatch();
    const initialTheme = useSelector((state) => state.root.codeEditorTheme);
    const editorSettings = useSelector((state) => state.root.editorSettings);
    const savedPen = useSelector((state) => state.root.savedPen);
    const [initialCode, setInitialCode] = useState("");

    const onChange = useCallback((code, viewUpdate) => {
        dispatch(rootActions.setCode({ code, codeType: props.editorLang }));
    }, []);

    const [editorLang, setEditorLang] = useState(html);
    const [theme, setTheme] = useState(dracula);

    useEffect(() => {
        if (props.editorLang === "HTML") {
            setEditorLang(html);
            setInitialCode(savedPen.htmlCode);
        }
        if (props.editorLang === "CSS") {
            setEditorLang(css);
            setInitialCode(savedPen.cssCode);
        }
        if (props.editorLang === "Javascript") {
            setEditorLang(javascript);
            setInitialCode(savedPen.jsCode);
        }
    }, [props.editorLang, savedPen]);

    useEffect(() => {
        if (initialTheme === "abcdef") setTheme(abcdef);
        if (initialTheme === "androidstudio") setTheme(androidstudio);
        if (initialTheme === "atomone") setTheme(atomone);
        if (initialTheme === "bbedit") setTheme(bbedit);
        if (initialTheme === "darcula") setTheme(darcula);
        if (initialTheme === "dracula") setTheme(dracula);
        if (initialTheme === "duotoneLight") setTheme(duotoneLight);
        if (initialTheme === "duotoneDark") setTheme(duotoneDark);
        if (initialTheme === "githubLight") setTheme(githubLight);
        if (initialTheme === "githubDark") setTheme(githubDark);
        if (initialTheme === "okaidia") setTheme(okaidia);
        if (initialTheme === "sublime") setTheme(sublime);
        if (initialTheme === "xcodeLight") setTheme(xcodeLight);
        if (initialTheme === "xcodeDark") setTheme(xcodeDark);
    }, [initialTheme]);

    return (
        <CodeMirror
            height="100%"
            theme={theme}
            basicSetup={editorSettings}
            extensions={[editorLang, EditorView.lineWrapping, EditorState.tabSize.of(8)]}
            onChange={onChange}
            value={initialCode}
        />
    );
};

export default CodeEditor;
