import { useEffect } from "react";
import { useDispatch } from "react-redux";
import EditorLayout from "../../components/layouts/EditorLayout";
import Header from "../../components/layouts/Header";

import store, { rootActions } from "../../store";
const apiEndpoint = store.getState().root.api;

const SavedPen = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(rootActions.setSavedPen(props.pen));
    }, [props.pen]);

    return (
        <div className="flex flex-col ">
            <Header />
            <EditorLayout />
        </div>
    );
};

export default SavedPen;

export async function getServerSideProps(context) {
    try {
        const data = await fetch(`${apiEndpoint}/pen/${context.query.id}`, {
            method: "GET",
        });
        const res = await data.json();
        if (!res.ok) throw new Error("");

        return {
            props: { pen: res.pen },
        };
    } catch (err) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }
}
