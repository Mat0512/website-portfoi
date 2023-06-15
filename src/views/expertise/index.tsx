import Item from "./Item";

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

const Expertise = () => {
    return (
        <div className="mx-auto w-full max-w-2xl min-h-screen text-center flex flex-col justify-center items-center pt-10 lg:max-w-4xl">
            <p className="text-[28px] drop-shadow-white md:text-[36px] leading-none mb-10">
                Languages, Frameworks & Libraries
            </p>
            <div className="w-full flex flex-col justify-center items-center gap-5 md:gap-10 lg:flex-row">
                <div className="border border-blue w-full px-3 py-7">
                    <p className="text-blue text-[28px] md:text-[32px] text-left">
                        Front End
                    </p>
                    <div className="mx-auto p-5 flex flex-wrap">
                        <Item image={reactIcon} label={"React"} />
                        <Item image={tailwindIcon} label={"Tailwind"} />
                        <Item image={materialIcon} label={"Material UI"} />
                        <Item image={jsIcon} label={"JavaScript"} />
                        <Item image={htmlIcon} label={"HTML"} />
                        <Item image={cssIcon} label={"CSS"} />
                    </div>
                </div>
                <div className="border border-orchid w-full px-3 py-7">
                    <p className="text-orchid text-[28px] md:text-[32px] text-left">
                        Back End
                    </p>
                    <div className="p-2 flex flex-wrap gap-2">
                        <Item
                            image={expressIcon}
                            imgWidthHeight="50px"
                            label={"Express"}
                        />
                        <Item image={nodeIcon} label={"Node JS"} />
                        <Item image={mongooseIcon} label={"Mongoose"} />
                        <Item image={mongoIcon} label={"MongoDB"} />
                        <Item image={slimIcon} label={"Slim Php"} />
                        <Item image={mysqlIcon} label={"mySQL"} />
                        <Item image={firebaseIcon} label={"Firebase"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expertise;
