import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPen } from "../../store/index-actions";

const SaveModal = () => {
    const dispatch = useDispatch();
    const closeModalRef = useRef();
    const penNameRef = useRef();
    const userNameRef = useRef();
    const [isAutoSaveEnabled, setIsAutoSaveEnabled] = useState(false);
    const [autoSaveDuration, setAutoSaveDuration] = useState();
    const HTMLCode = useSelector((state) => state.root.HTMLCode);
    const CSSCode = useSelector((state) => state.root.CSSCode);
    const JSCode = useSelector((state) => state.root.JSCode);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const isPenSaved = useSelector((state) => state.root.isPenSaved);

    const changeAutoSaveStateHandler = () => {
        setIsAutoSaveEnabled((o) => !o);
    };
    const checkDurationValidityHandler = (e) => {
        const duration = +e.target.value;
        if (duration < 30) setAutoSaveDuration(30);
        else setAutoSaveDuration(duration);
    };

    const submitFormHandler = async (e) => {
        e.preventDefault();
        const penName = penNameRef.current.value;
        const creatorName = userNameRef.current.value;

        if (!penName || !creatorName) {
            setError("Please complete the form");
            setTimeout(() => {
                setError(false);
            }, 2000);
            return;
        }
        if (!HTMLCode && !JSCode && !CSSCode) {
            setError("Pen is empty!");
            setTimeout(() => {
                setError(false);
            }, 2000);
            return;
        }
        if (isPenSaved) {
            setError("Pen is saved already!");
            setTimeout(() => {
                setError(false);
            }, 2000);
            return;
        }

        try {
            const data = {
                autoSave: isAutoSaveEnabled,
                duration: autoSaveDuration,
                penName,
                creatorName,
                htmlCode: HTMLCode,
                cssCode: CSSCode,
                jsCode: JSCode,
            };
            setIsLoading(true);
            await dispatch(createPen(data));

            // Close Modal
            setIsLoading(false);
            closeModalRef.current.click();
        } catch (err) {
            console.log(err);
            setIsLoading(false);
        }
    };
    return (
        <>
            <input type="checkbox" id="save-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor="save-modal"
                        ref={closeModalRef}
                        className="btn btn-sm btn-circle absolute right-6 top-6"
                    >
                        ✕
                    </label>
                    <form onSubmit={submitFormHandler}>
                        <h3 className="font-bold text-xl">Save Pen</h3>
                        <div className="py-4 mt-4 space-y-3">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">What is Pen Name?</span>
                                </label>
                                <input
                                    ref={penNameRef}
                                    type="text"
                                    placeholder="Pen Name"
                                    className="input input-bordered w-full "
                                />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">What is Your Name?</span>
                                </label>
                                <input
                                    type="text"
                                    ref={userNameRef}
                                    placeholder="Your Name"
                                    className="input input-bordered w-full "
                                />
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Auto Save</span>
                                    <input
                                        onChange={changeAutoSaveStateHandler}
                                        type="checkbox"
                                        className="toggle"
                                    />
                                </label>
                            </div>
                            {isAutoSaveEnabled && (
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Specify how many seconds to save
                                        </span>
                                    </label>
                                    <input
                                        value={autoSaveDuration}
                                        onChange={checkDurationValidityHandler}
                                        type="number"
                                        placeholder="Min: 30s"
                                        className="input input-bordered w-full "
                                    />
                                </div>
                            )}
                        </div>
                        <div className="modal-action">
                            <button
                                type="submit"
                                className={
                                    isLoading ? "btn btn-success loading" : "btn btn-success"
                                }
                            >
                                Save
                            </button>
                        </div>
                    </form>
                    {error && (
                        <div className="toast toast-start">
                            <div className="alert alert-error">
                                <div>
                                    <span>{error}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default SaveModal;
