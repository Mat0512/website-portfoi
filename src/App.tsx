import { useState, useRef, useEffect, createRef } from "react";
import { motion } from "framer-motion";

import { useHorizontalScroll } from "./hooks/useHorizontalScroll";

import Nav from "./views/globals/nav";
import Landing from "./views/landing";
import Expertise from "./views/expertise";
import Experience from "./views/experience/Experience";
import Projects from "./views/projects";
import Contact from "./views/contact/Contact";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
    const [selectedPage, setSelectedPage] = useState("Home");
    const { scrollRef, vw } = useHorizontalScroll();
    const isAboveLargeScreens = useMediaQuery("(min-width: 1024px)");

    return (
        <div ref={scrollRef} className="app overflow-x-hidden">
            <Nav
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />

            {/* horizontal scroll on above large screen*/}
            {isAboveLargeScreens ? (
                <motion.div
                    animate={{
                        translateX: `-${vw}vw`,
                    }}
                    transition={{ duration: 0.7 }}
                    className="transform relative top-0 left-0 right-0"
                >
                    <div
                        ref={scrollRef}
                        className="absolute top-0 left-0 flex-none w-screen flex h-screen"
                    >
                        <div className="flex-none snap-start w-full h-full">
                            <Landing />
                        </div>

                        <div className="flex-none snap-start w-full h-full">
                            <Expertise />
                        </div>
                        <div
                            id="experience"
                            className="flex-none snap-start w-full h-full"
                        >
                            <Experience />
                        </div>
                        <div
                            id="projects"
                            className="flex-none snap-start w-full h-full"
                        >
                            <Projects />
                        </div>
                        <div
                            id="contact"
                            className="flex-none snap-start w-full h-full"
                        >
                            <Contact />
                        </div>
                    </div>
                </motion.div>
            ) : (
                <div className="flex flex-col px-3 md:px-10">
                    <div className="flex-none snap-start w-full h-screen">
                        <Landing />
                    </div>

                    <div className="flex-none snap-start w-full">
                        <Expertise />
                    </div>
                    <div
                        id="experience"
                        className="flex-none snap-start w-full h-full"
                    >
                        <Experience />
                    </div>
                    <div
                        id="projects"
                        className="flex-none snap-start w-full h-full"
                    >
                        <Projects />
                    </div>
                    <div
                        id="contact"
                        className="flex-none snap-start w-full h-full"
                    >
                        <Contact />
                    </div>
                </div>
            )}
            <motion.div
                animate={{
                    width: `${(vw / 400) * 100}%`,
                }}
                className="fixed bottom-0 left-0 bg-blue h-[10px] w-full"
            ></motion.div>
        </div>
    );
}

export default App;
