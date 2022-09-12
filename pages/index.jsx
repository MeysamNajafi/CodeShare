import Head from "next/head";
import Header from "../components/layouts/Header";
import EditorLayout from "../components/layouts/EditorLayout";
import IframeLayout from "../components/layouts/IframeLayout";

const Home = () => {
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
            </div>
            <IframeLayout />
        </div>
    );
};

export default Home;
