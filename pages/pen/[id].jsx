import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import EditorLayout from "../../components/layouts/EditorLayout";
import Header from "../../components/layouts/Header";
import IframeLayout from "../../components/layouts/IframeLayout";
import Notification from "../../components/ui/Notification";

import store, { rootActions } from "../../store";
import { editPen } from "../../store/index-actions";
const apiEndpoint = store.getState().root.api;

const SavedPen = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(rootActions.setSavedPen(props.pen));
        dispatch(rootActions.setCode({ code: props.pen.htmlCode, codeType: "HTML" }));
        dispatch(rootActions.setCode({ code: props.pen.cssCode, codeType: "CSS" }));
        dispatch(rootActions.setCode({ code: props.pen.jsCode, codeType: "Javascript" }));
        dispatch(rootActions.setIsPenSaved(true));

        if (props.pen?.autoSave) {
            setInterval(() => {
                const saveButton = document.querySelector("#save-pen");
                saveButton.click();
            }, props.pen?.autoSaveDuration * 1000);
        }
    }, [props.pen]);

    return (
        <>
            <Head>
                <title>CodeShare</title>
                <meta name="description" content="CodePen Simple Clone" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-col ">
                <Header />
                <EditorLayout />
                <IframeLayout />
                <Notification />
            </div>
        </>
    );
};

export default SavedPen;

export async function getServerSideProps(context) {
    try {
        const data = await fetch(`${apiEndpoint}/pen/${context.query.id}`, {
            method: "GET",
        });
        const res = await data.json();
        if (!data.ok) throw new Error("");

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
