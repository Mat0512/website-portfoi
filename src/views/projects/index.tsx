import { motion } from "framer-motion";
import Tag from "../../components/tags/Tag";
import Button from "../../components/button";

import { Props } from "../../utils/animationUtils";

const Projects = ({ animation }: Props) => {
    return (
        <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.5 }}
            variants={animation}
            transition={{ ease: "easeOut", duration: 0.7 }}
            className="mx-auto w-full min-h-screen max-w-5xl flex flex-col justify-center items-center gap-6 py-[70px] lg:gap-3"
        >
            <p className="text-[48px] text-blue leading-none drop-shadow-blue self-start lg:text-[36px]">
                Projects
            </p>
            <div className="w-full border border-blue p-7 flex flex-col gap-4">
                <p className="text-orchid text-lg leading-none">
                    BatStateU Alumni Portal and Tracking System
                </p>
                <p className="text-sm">
                    Web based system for analyzing, visualizing, and produce
                    descriptive reports about alumni’s employment data. Also
                    includes posting surveys and announcements.
                </p>
                <div className="flex flex-wrap gap-2">
                    <Tag text="React" />
                    <Tag text="Tailwind CSS" />
                    <Tag text="Node JS" />
                    <Tag text="Express JS" />
                    <Tag text="Mongoose" />
                    <Tag text="Cube JS" />
                </div>
                <div>
                    <Button
                        type="default"
                        text="Github Link"
                        color="orchid"
                        size="md"
                        onClick={() => {
                            window.open(
                                "https://github.com/Mat0512/BatStateU-Alumni-Web-Portal.git",
                                "_blank"
                            );
                        }}
                    />
                </div>
            </div>

            <div className="w-full border border-blue p-7 flex flex-col gap-4">
                <p className="text-orchid text-lg leading-none">
                    This Website Portfolio
                </p>
                <p className="text-sm">
                    My website portfolio. Designed in Figma and coded in React,
                    Tailwind and Framer Motion
                </p>
                <div className="flex flex-wrap gap-2">
                    <Tag text="React" />
                    <Tag text="Tailwind CSS" />
                    <Tag text="Framer Motion" />
                    <Tag text="Figma" />
                </div>
                <div className="flex gap-2">
                    <Button
                        type="default"
                        text="Github Link"
                        color="orchid"
                        size="md"
                        onClick={() => {
                            window.open(
                                "https://github.com/Mat0512/website-portfolio-2.git",
                                "_blank"
                            );
                        }}
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;
