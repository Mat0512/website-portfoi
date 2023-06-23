import { motion } from "framer-motion";
import Tag from "../../components/tags/Tag";
import ctiLogo from "../../assets/CTI-icon.png";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Props } from "../../utils/animationUtils";

const Experience = ({ animation }: Props) => {
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    return (
        <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.5 }}
            variants={animation}
            transition={{ ease: "easeOut", duration: 0.7 }}
            className="mx-auto w-full min-h-screen max-w-2xl flex flex-col justify-center items-center lg:max-w-5xl"
        >
            <p className="text-[39px] text-blue drop-shadow-blue md:text-[46px] md:self-start mb-5">
                Work Experience
            </p>
            <div className="w-full border border-blue p-5 flex flex-col gap-5 md:p-7 md:flex-row">
                <div className="order-2 md:order-none flex flex-col gap-4">
                    <div className="w-full flex justify-between">
                        <div>
                            <p className="text-orchid text-lg ">
                                Web Developer Intern
                            </p>
                            <p className="text-blue text-base md:text-lg">
                                BatStateU Center for Technopreneurship and
                                Innovation
                            </p>
                            <p className="text-blue text-base md:text-lg">
                                Jan 2023 - May 2023
                            </p>
                        </div>
                        {!isAboveSmallScreens && (
                            <div className="order-none self-auto">
                                <img
                                    className=" w-[125px] h-auto"
                                    src={ctiLogo}
                                />
                            </div>
                        )}
                    </div>
                    <p className="text-sm">
                        Developed admin dashboard for one of their website.
                        Includes designing GUI, developed front-end, backend and
                        database.
                    </p>

                    <div className="flex gap-2 flex-wrap">
                        <Tag text="React" />
                        <Tag text="Material UI" />
                        <Tag text="Slim Php" />
                        <Tag text="MySQL" />
                    </div>
                </div>
                {/* image here */}
                {isAboveSmallScreens && (
                    <div className="order-none self-auto">
                        <img
                            className=" md:w-[200px] lg:w-[110px] h-auto"
                            src={ctiLogo}
                        />
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default Experience;
