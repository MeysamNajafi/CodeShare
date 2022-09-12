import CodeBlock from "./CodeBlock";

const EditorLayout = () => {
    return (
        <div className="mx-auto flex basis-96 w-full">
            <CodeBlock icon="https://img.icons8.com/color/48/FFFFFF/html-5--v1.png" title="HTML" />
            <div className="w-6 bg-[#282A36]"></div>
            <CodeBlock icon="https://img.icons8.com/color/48/FFFFFF/css3.png" title="CSS" />
            <div className="w-6 bg-[#282A36]"></div>
            <CodeBlock
                icon="https://img.icons8.com/color/48/FFFFFF/javascript.png"
                title="Javascript"
            />
        </div>
    );
};

export default EditorLayout;
