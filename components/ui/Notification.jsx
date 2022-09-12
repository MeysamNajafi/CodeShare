import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Notification = () => {
    const dispatch = useDispatch();
    const notification = useSelector((state) => state.root.notification);

    useEffect(() => {
        if (notification?.message)
            setTimeout(() => {
                dispatch(rootActions.setNotification({ type: "", message: null }));
            }, 3000);
    }, [notification]);

    return (
        <>
            {notification?.message && (
                <div className="toast toast-start">
                    <div
                        className={
                            notification.type == "success"
                                ? "alert alert-success"
                                : "alert alert-error"
                        }
                    >
                        <div>
                            <span>{notification.message}</span>
                        </div>
                    </div>
                </div>
            )}
            ;
        </>
    );
};

export default Notification;
