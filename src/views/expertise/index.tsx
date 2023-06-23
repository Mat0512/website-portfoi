import Item from "./Item";
import { motion } from "framer-motion";
import { Props } from "../../utils/animationUtils";

import reactIcon from "../../assets/react-lg.svg";
import tailwindIcon from "../../assets/tailwind-css.svg";
import materialIcon from "../../assets/material-ui.svg";
import jsIcon from "../../assets/javascript.svg";
import htmlIcon from "../../assets/html.svg";
import cssIcon from "../../assets/css.svg";

import expressIcon from "../../assets/express-js-white.svg";
import nodeIcon from "../../assets/nodejs-white.svg";
import mongooseIcon from "../../assets/mongoose.svg";
import mongoIcon from "../../assets/mongodb.svg";
import slimIcon from "../../assets/slim.svg";
import mysqlIcon from "../../assets/mysql.svg";
import firebaseIcon from "../../assets/firebase.svg";

const Expertise = ({ animation }: Props) => {
    return (
        <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.5 }}
            variants={animation}
            transition={{ ease: "easeOut", duration: 2 }}
            className="mx-auto w-full max-w-2xl min-h-screen text-center flex flex-col justify-center items-center py-[70px] lg:max-w-4xl"
        >
            <p className="text-[28px] drop-shadow-white md:text-[36px] leading-none mb-5 md:mb-10">
                Languages, Frameworks & Libraries
            </p>
            <div className="w-full flex flex-col justify-center items-center gap-5 md:gap-10 lg:flex-row ">
                <div className="border border-blue w-full px-3 py-7 md:max-h-[306px]">
                    <p className="text-blue text-[28px] md:text-[32px] text-left">
                        Front End
                    </p>
                    <div className="flex flex-wrap">
                        <Item image={reactIcon} label={"React"} />
                        <Item image={tailwindIcon} label={"Tailwind"} />
                        <Item image={materialIcon} label={"Material UI"} />
                        <Item image={jsIcon} label={"JavaScript"} />
                        <Item image={htmlIcon} label={"HTML"} />
                        <Item image={cssIcon} label={"CSS"} />
                    </div>
                </div>
                <div className="border border-orchid w-full px-3 py-7 md:max-h-[306px]">
                    <p className="text-orchid text-[28px] md:text-[32px] text-left">
                        Back End
                    </p>
                    <div className="flex flex-wrap">
                        <Item
                            image={expressIcon}
                            imgWidthHeight="50px"
                            label={"Express"}
                            labelColor="orchid"
                        />
                        <Item
                            image={nodeIcon}
                            label={"Node JS"}
                            labelColor="orchid"
                        />
                        <Item
                            image={mongooseIcon}
                            label={"Mongoose"}
                            labelColor="orchid"
                        />
                        <Item
                            image={mongoIcon}
                            label={"MongoDB"}
                            labelColor="orchid"
                        />
                        <Item
                            image={slimIcon}
                            label={"Slim Php"}
                            labelColor="orchid"
                        />
                        <Item
                            image={mysqlIcon}
                            label={"mySQL"}
                            labelColor="orchid"
                        />
                        <Item
                            image={firebaseIcon}
                            label={"Firebase"}
                            labelColor="orchid"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Expertise;
