import Navbar from "./components/Navbar";
import Project from "./components/Projects";
import data from "./projectsData";
import socialIcons from "./components/socials";

import "./styles.css";
function App() {
    const projects = data.map((item) => {
        return <Project key={item.key} {...item} />;
    });

    return (
        <>
            <Navbar />
            {projects}
        </>
    );
}

export default App;
