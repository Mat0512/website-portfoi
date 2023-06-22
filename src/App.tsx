import { useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";

import { useHorizontalScroll } from "./hooks/useHorizontalScroll";
import { useVerticalScroll } from "./hooks/useVerticalScroll";
import useMediaQuery from "./hooks/useMediaQuery";

import Nav from "./views/globals/nav";
import Landing from "./views/landing";
import Expertise from "./views/expertise";
import Experience from "./views/experience/Experience";
import Projects from "./views/projects";
import Contact from "./views/contact/Contact";
import { toggleSlideAnimation } from "./utils/animationUtils";

function App() {
    const [selectedPage, setSelectedPage] = useState("Home");
    const { horizontalScrollRef, vw, isScrollingRight, handleScrollTo } =
        useHorizontalScroll(setSelectedPage);
    const isAboveLargeScreens = useMediaQuery("(min-width: 1024px)");
    const { verticalScrollRef, isScrollingDownward } = useVerticalScroll();

    const largeScreenAnimation = toggleSlideAnimation(isScrollingRight, false);
    const smallScreenAnimation = toggleSlideAnimation(
        isScrollingDownward,
        true
    );

    const { scrollYProgress } = useScroll({
        container: verticalScrollRef,
    });

    return (
        <AnimatePresence>
            <div ref={horizontalScrollRef} className="app overflow-x-hidden">
                <Nav
                    handleScrollTo={handleScrollTo}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />

                {/* horizontal scroll on above large screen*/}
                {isAboveLargeScreens ? (
                    <motion.div
                        animate={{
                            translateX: `-${vw}vw`,
                        }}
                        transition={{ ease: "easeOut", duration: 0.7 }}
                        className="transform "
                    >
                        <div
                            ref={horizontalScrollRef}
                            className="flex-none w-screen flex h-screen"
                        >
                            <div className="flex-none snap-start w-full h-full px-10">
                                <Landing
                                    animation={largeScreenAnimation}
                                    handleScrollTo={handleScrollTo}
                                    setSelectedPage={setSelectedPage}
                                />
                            </div>

                            <div className="flex-none snap-start w-full h-full px-10">
                                <Expertise animation={largeScreenAnimation} />
                            </div>
                            <div className="flex-none snap-start w-full h-full px-10">
                                <Experience animation={largeScreenAnimation} />
                            </div>
                            <div className="flex-none snap-start w-full h-full px-10">
                                <Projects animation={largeScreenAnimation} />
                            </div>
                            <div className="flex-none snap-start w-full h-full px-10 ">
                                <Contact animation={largeScreenAnimation} />
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <div
                        ref={verticalScrollRef}
                        className="flex flex-col p-3 md:px-10 snap-y snap-mandatory h-screen overflow-y-auto"
                    >
                        <div
                            id="home"
                            className="flex-none snap-start w-full h-screen my-3"
                        >
                            <Landing animation={smallScreenAnimation} />
                        </div>

                        <div
                            id="expertise"
                            className="flex-none snap-start w-full"
                        >
                            <Expertise animation={smallScreenAnimation} />
                        </div>
                        <div
                            id="experience"
                            className="flex-none snap-start w-full h-full"
                        >
                            <Experience animation={smallScreenAnimation} />
                        </div>
                        <div
                            id="projects"
                            className="flex-none snap-start w-full"
                        >
                            <Projects animation={smallScreenAnimation} />
                        </div>
                        <div
                            id="contact"
                            className="flex-none snap-start w-full h-full"
                        >
                            <Contact animation={smallScreenAnimation} />
                        </div>
                    </div>
                )}

                {isAboveLargeScreens ? (
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{
                            width: `${(vw / 400) * 100}%`,
                        }}
                        className="fixed bottom-0 left-0 bg-blue h-[10px] w-full"
                    ></motion.div>
                ) : (
                    <motion.div
                        style={{
                            bottom: 0,
                            left: 0,
                            transformOrigin: 0,
                            scaleX: scrollYProgress,
                        }}
                        className="fixed bg-blue h-[10px] w-full"
                    ></motion.div>
                )}
            </div>
        </AnimatePresence>
    );
}

export default App;
