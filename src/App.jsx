import Navbar from "./components/Navbar";
import Project from "./components/Projects";
import data from "./projectsData";
import Footer from "./components/Footer";
import "./styles.scss";
import About from "./components/About";
import NotFound from "./components/NotFound";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    const projects = data.map((item) => {
        return <Project key={item.id} {...item} />;
    });

    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                <Route exact path="/" element= {projects} />

               
                    <Route exact path="/about" element={<About />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
