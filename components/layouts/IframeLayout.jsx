import { useEffect } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";

const IframeLayout = () => {
    const iframeElementRef = useRef();
    const HTMLCode = useSelector((state) => state.root.HTMLCode);
    const CSSCode = useSelector((state) => state.root.CSSCode);
    const JSCode = useSelector((state) => state.root.JSCode);

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

        const iframe = iframeElementRef.current?.contentWindow.document;

        iframe.open();
        iframe.write(markup);
        iframe.close();
    }, [HTMLCode, JSCode, CSSCode]);

    return (
        <div className="iframe-container ">
            <iframe ref={iframeElementRef} className="w-full"></iframe>
        </div>
    );
};

export default IframeLayout;
