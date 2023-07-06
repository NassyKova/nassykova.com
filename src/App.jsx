import Navbar from "./components/Navbar";
import Project from "./components/Projects";
import data from "./projectsData";
import Footer from "./components/Footer";

import "./styles.css";
function App() {
    const projects = data.map((item) => {
        return <Project key={item.key} {...item} />;
    });

    return (
        <>
            <Navbar />
            {projects}
            <Footer />
        </>
    );
}

export default App;
