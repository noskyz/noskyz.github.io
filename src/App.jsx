import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About";
import SkyCat from "./pages/SkyCat";

function App() {
    return (
        <>
            <ScrollToTop />
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />

                <Route
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="/skycat"
                    element={<SkyCat />}
                />

                <Route
                    path="/work/:projectId"
                    element={<ProjectDetails />}
                />
            </Routes>
        </>
    );
}

export default App;