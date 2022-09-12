import Editor from "../Editor";

const CodeBlock = (props) => {
    const title = props.title;
    const icon = props.icon;

    return (
        <div className="bg-[#20222D]  p-3" style={{ width: "33.33%" }}>
            <div className="flex gap-x-1 items-center">
                <img width={30} src={icon} />
                <h3 className=" text-white">{title}</h3>
            </div>
            <Editor editorLang={title} />
        </div>
    );
};

export default CodeBlock;
