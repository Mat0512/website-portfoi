import Button from "../../components/button";
import { motion } from "framer-motion";
import useMediaQuery from "../../hooks/useMediaQuery";

import { Props } from "../../utils/animationUtils";
import { ScrollToType } from "../../hooks/useHorizontalScroll";

interface LandingProps extends Props {
    handleScrollTo?: ScrollToType;
    setSelectedPage?: React.Dispatch<React.SetStateAction<string>>;
}

const Landing = ({
    animation,
    handleScrollTo,
    setSelectedPage,
}: LandingProps) => {
    const isAboveSmallScreens = useMediaQuery("(min-width: 1024px)");

    return (
        <div className="mx-auto p-10 w-full h-full max-w-6xl flex flex-col justify-center items-center lg:p-0 lg:flex-row lg:justify-between">
            <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ amount: 0.5 }}
                variants={animation}
                className="h-full flex flex-col justify-center items-center gap-2 lg:items-start"
            >
                <p className="text-[48px] text-center leading-none mb-5 drop-shadow-white md:text-[64px] ">
                    Mathew Mendoza
                </p>

                <p className="text-base md:text-[24px] text-center leading-none mb-5 ">
                    I am a web developer based in Philippines.
                </p>
                <div>
                    <Button
                        type={`${isAboveSmallScreens ? "primary" : "default"}`}
                        text="Contact Me"
                        color="blue"
                        size="lg"
                        onClick={() => {
                            if (
                                isAboveSmallScreens &&
                                handleScrollTo &&
                                setSelectedPage
                            ) {
                                handleScrollTo("contact");
                                setSelectedPage("contact");
                                return;
                            }
                            const section = document.querySelector("#contact");
                            section!.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            });
                        }}
                    />
                </div>
            </motion.div>

            <motion.div
                whileHover={{ x: !isAboveSmallScreens ? 0 : 10 }}
                whileInView="animate"
                viewport={{ amount: 0.5 }}
                exit={{ opacity: 0, transition: {} }}
                initial={{ opacity: 0 }}
                variants={animation}
                className="justify-self-end flex gap-1 text-blue drop-shadow-blue text-lg cursor-pointer hover:brightness-200 lg:items-center"
                onClick={() => {
                    if (
                        isAboveSmallScreens &&
                        handleScrollTo &&
                        setSelectedPage
                    ) {
                        handleScrollTo("expertise");
                        setSelectedPage("expertise");
                        return;
                    }
                    const section = document.querySelector("#expertise");
                    section!.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }}
            >
                More{" "}
                <span className="text-xl leading-none rotate-90 lg:rotate-0 lg:text-3xl ">
                    &rarr;
                </span>
            </motion.div>
        </div>
    );
};

export default Landing;
