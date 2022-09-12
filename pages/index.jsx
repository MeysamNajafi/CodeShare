import Head from "next/head";
import { useEffect, useRef } from "react";
import Header from "../components/layouts/Header";
import CodeBlock from "../components/layouts/CodeBlock";
import { useSelector } from "react-redux";
import EditorLayout from "../components/layouts/EditorLayout";

const Home = () => {
    const iframeElementRef = useRef();
    const HTMLCode = useSelector((state) => state.root.HTMLCode);
    const CSSCode = useSelector((state) => state.root.CSSCode);
    const JSCode = useSelector((state) => state.root.JSCode);

    // Leave Site Alert
    // TODO : delete comment for production
    // if (typeof window !== "undefined") {
    //     window.onbeforeunload = function () {
    //         return "Are you sure you want to leave?";
    //     };
    // }

    useEffect(() => {
        const markup = `
            <html>
                <head>
                    <style>${CSSCode}</style>
                </head>
                <body>
                    ${HTMLCode}
                    <script>${JSCode}</script>
                </body>
            </html>     
        `;

        const iframe = iframeElementRef.current.contentWindow.document;

        iframe.open();
        iframe.write(markup);
        iframe.close();
    }, [HTMLCode, JSCode, CSSCode]);

    return (
        <div>
            <Head>
                <title>CodeShare</title>
                <meta name="description" content="CodePen Simple Clone" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-col ">
                <Header />
                <EditorLayout />
                <div className="iframe-container ">
                    <iframe ref={iframeElementRef} srcDoc={``} className="w-full"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Home;
