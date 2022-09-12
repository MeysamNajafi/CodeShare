import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rootActions } from "../../store";

const SettingsModal = () => {
    const editorSettings = useSelector((state) => state.root.editorSettings);
    const dispatch = useDispatch();
    const highlightLineRef = useRef();
    const closeModalRef = useRef();

    useEffect(() => {
        if (editorSettings.foldGutter) highlightLineRef.current.checked = true;
    }, [editorSettings]);

    const submitFormHandler = (e) => {
        e.preventDefault();

        const highlightLine = highlightLineRef.current.checked;
        const data = {};

        if (highlightLine) {
            data.foldGutter = true;
            data.highlightActiveLineGutter = true;
            data.highlightActiveLine = true;
        } else {
            data.foldGutter = false;
            data.highlightActiveLineGutter = false;
            data.highlightActiveLine = false;
        }

        dispatch(rootActions.setEditorSettings(data));
        localStorage.setItem("editorSettings", JSON.stringify(data));

        // Close Modal
        closeModalRef.current.click();
    };
    return (
        <>
            <input type="checkbox" id="settings-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor="settings-modal"
                        ref={closeModalRef}
                        className="btn btn-sm btn-circle absolute right-6 top-6"
                    >
                        ✕
                    </label>
                    <form onSubmit={submitFormHandler}>
                        <h3 className="font-bold text-xl">Editor Settings</h3>
                        <div className="py-4 mt-4 space-y-3">
                            <div class="form-control">
                                <label class="label cursor-pointer">
                                    <span class="label-text font-bold">Highlight Active Line</span>
                                    <input
                                        ref={highlightLineRef}
                                        type="checkbox"
                                        class="checkbox"
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="modal-action">
                            <button type="submit" className="btn btn-success">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SettingsModal;
