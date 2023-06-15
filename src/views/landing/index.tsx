import Button from "../../components/button";
import { motion } from "framer-motion";
import useMediaQuery from "../../hooks/useMediaQuery";

const Landing = () => {
    const isAboveLargeScreen = useMediaQuery("(min-width: 1024px)");
    return (
        <div className="mx-auto p-10 w-full h-full max-w-6xl flex flex-col justify-center items-center lg:p-0 lg:flex-row lg:justify-between">
            <div className="h-full flex flex-col justify-center items-center gap-2 lg:items-start">
                <p className="text-[48px] text-center leading-none mb-5 drop-shadow-white md:text-[64px]">
                    Mathew Mendoza
                </p>

                <p className="text-base md:text-[24px] text-center leading-none mb-5">
                    I am a web developer based in Philippines.
                </p>
                <div>
                    <Button
                        type={`${isAboveLargeScreen ? "primary" : "default"}`}
                        text="Contact Me"
                        color="blue"
                        size="lg"
                        onClick={() => {
                            console.log("click");
                        }}
                    />
                </div>
            </div>

            <motion.div
                initial={{ y: 0 }}
                whileHover={{ x: 0 }}
                animate={{ y: [1, 3, 6, 3, 1], opacity: 1 }}
                // exit={{ opacity: 0 }}
                transition={{
                    repeat: Infinity,
                    duration: 1.5,
                }}
                className="justify-self-end flex gap-1 text-blue drop-shadow-blue text-lg cursor-pointer hover:brightness-200"
            >
                More{" "}
                <span className="text-xl leading-none rotate-90 lg:rotate-0 lg:text-3xl">
                    &rarr;
                </span>
            </motion.div>
        </div>
    );
};

export default Landing;
