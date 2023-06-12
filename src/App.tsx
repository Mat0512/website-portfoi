import { useState } from "react";
import { useHorizontalScroll } from "./hooks/useHorizontalScroll";
import { motion } from "framer-motion";

import Nav from "./views/globals/nav";
import Landing from "./views/landing";
import Expertise from "./views/expertise";
import Experience from "./views/experience/Experience";
import Projects from "./views/projects";
import Contact from "./views/contact/Contact";

function App() {
    const { scrollRef, scrollLeft } = useHorizontalScroll();
    const [selectedPage, setSelectedPage] = useState("Home");

    return (
        <div
            ref={scrollRef}
            className="app flex items-center overflow-x-hidden"
        >
            <Nav
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <div id="landing" className="min-w-full">
                <Landing />
            </div>
            <div id="expertise" className="min-w-full">
                <Expertise />
            </div>
            <div id="experience" className="min-w-full">
                <Experience />
            </div>
            <div id="projects" className="min-w-full">
                <Projects />
            </div>
            <div id="contact" className="min-w-full">
                <Contact />
            </div>

            <motion.div
                animate={{
                    width: `${scrollLeft}%`,
                }}
                className="fixed bottom-0 left-0 bg-blue h-[10px]"
            ></motion.div>
        </div>
    );
}

export default App;
