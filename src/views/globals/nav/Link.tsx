import React, { useCallback } from "react";
import { LinkRefsDimension } from "./";
import { motion } from "framer-motion";
import { ScrollToType, LinkName } from "../../../hooks/useHorizontalScroll";
import useMediaQuery from "../../../hooks/useMediaQuery";

interface LinkProps {
    label: string;
    setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
    setLinkRefsDimension: React.Dispatch<
        React.SetStateAction<LinkRefsDimension>
    >;
    handleScrollTo?: ScrollToType;
}

const Link = ({
    label,
    setSelectedPage,
    setLinkRefsDimension,
    handleScrollTo,
}: LinkProps) => {
    const lowerCaseName = label.toLocaleLowerCase();
    const linkName: LinkName = lowerCaseName as LinkName;
    const isAboveLargeScreens = useMediaQuery("(min-width: 1024px)");

    return (
        <motion.button
            ref={useCallback((element: HTMLButtonElement | null) => {
                if (element !== null) {
                    setLinkRefsDimension((prevState) => ({
                        ...prevState,
                        [lowerCaseName as keyof LinkRefsDimension]: element,
                    }));
                }
            }, [])}
            className={`flex justify-center items-center px-4 h-9 text-lg md:text-2xl lg:text-base text-white lg:text-blue lg:border lg:border-blue`}
            onClick={() => {
                setSelectedPage(linkName);
                if (isAboveLargeScreens && handleScrollTo) {
                    handleScrollTo(linkName);
                    return;
                }
                const section = document.querySelector(`#${linkName}`);
                section!.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
        >
            <p className="drop-shadow-white lg:drop-shadow-blue">{label}</p>
        </motion.button>
    );
};

export default Link;
