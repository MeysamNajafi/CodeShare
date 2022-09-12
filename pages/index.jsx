import Head from "next/head";
import { useEffect, useRef } from "react";
import Header from "../components/layouts/Header";
import CodeBlock from "../components/layouts/CodeBlock";
import { useSelector } from "react-redux";

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
                <div className="mx-auto flex basis-96 w-full">
                    <CodeBlock
                        icon="https://img.icons8.com/color/48/FFFFFF/html-5--v1.png"
                        title="HTML"
                    />
                    <div className="w-6 bg-[#282A36]"></div>
                    <CodeBlock icon="https://img.icons8.com/color/48/FFFFFF/css3.png" title="CSS" />
                    <div className="w-6 bg-[#282A36]"></div>
                    <CodeBlock
                        icon="https://img.icons8.com/color/48/FFFFFF/javascript.png"
                        title="Javascript"
                    />
                </div>
                <div className="iframe-container ">
                    <iframe ref={iframeElementRef} srcDoc={``} className="w-full"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Home;
