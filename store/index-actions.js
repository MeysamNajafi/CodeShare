import store, { rootActions } from "./index";
const apiEndpoint = store?.getState().root.api;

export const createPen = (payload) => async (dispatch) => {
    try {
        const res = await fetch(`${apiEndpoint}/pen/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.message);

        dispatch(rootActions.setIsPenSaved(true));
    } catch (err) {
        throw err;
    }
};
