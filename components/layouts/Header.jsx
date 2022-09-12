import { FiUser, FiSave, FiShare, FiSettings, FiCheck } from "react-icons/fi";
import SaveModal from "./SaveModal";
import { rootActions } from "../../store/index";
import { useDispatch, useSelector } from "react-redux";
import SettingsModal from "./SettingsModal";

const Header = function (props) {
    const dispatch = useDispatch();
    const isPenSaved = useSelector((state) => state.root.isPenSaved);
    const changeThemeHandler = (e) => {
        dispatch(rootActions.changeCodeEditorTheme(e.target.value));
        localStorage.setItem("theme", e.target.value);
    };

    return (
        <header className=" bg-[#20222d] border-b-[1px] border-b-[#3e404b] text-white flex items-center py-4 px-3 justify-between">
            <div>
                <h1 className="text-2xl">Simple Button</h1>
                <div className="flex gap-x-1 items-center ">
                    <FiUser size={18} />
                    <h3 className="  text-gray-300">Meysam Najafi</h3>
                </div>
            </div>
            <div className="flex gap-x-2">
                <select onChange={changeThemeHandler} className="select ">
                    <option disabled selected>
                        Pick theme
                    </option>
                    <option value="abcdef">Abcdef</option>
                    <option value="androidstudio">Android Studio</option>
                    <option value="atomone">Atomone</option>
                    <option value="bbedit">Bbedit</option>
                    <option value="darcula">Darcula</option>
                    <option value="dracula">Dracula</option>
                    <option value="duotoneLight">Duotone Light</option>
                    <option value="duotoneDark">Duotone Dark</option>
                    <option value="githubLight">Github Light</option>
                    <option value="githubDark">Github Dark</option>
                    <option value="okaidia">Okaidia</option>
                    <option value="sublime">Sublime</option>
                    <option value="xcodeLight">Xcode Light</option>
                    <option value="xcodeDark">Xcode Dark</option>
                </select>
                <label
                    htmlFor="settings-modal"
                    className="btn btn-outline bg-[#2a303c] border-[#2a303c] hover:bg-[#262b36] hover:border-[#262b36] 
                    text-white hover:text-white"
                >
                    <FiSettings size={18} />
                </label>
                <button className="btn btn-primary">
                    <FiShare size={18} />
                    <span className="ml-1"> Share</span>
                </button>

                <label htmlFor="save-modal" className="btn btn-success" disabled={isPenSaved}>
                    {isPenSaved ? (
                        <>
                            <FiCheck size={18} />
                            <span className="ml-1"> Saved!</span>{" "}
                        </>
                    ) : (
                        <>
                            <FiSave size={18} />
                            <span className="ml-1"> Save</span>
                        </>
                    )}
                </label>
            </div>
            <SaveModal />
            <SettingsModal />
        </header>
    );
};

export default Header;
