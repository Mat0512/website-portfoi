import React, { RefObject, useCallback } from "react";
import { LinkRefsDimension } from "./";
import useMediaQuery from "../../../hooks/useMediaQuery";

interface LinkProps {
    label: string;
    setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
    linkRefsDimension: LinkRefsDimension;
    setLinkRefsDimension: React.Dispatch<
        React.SetStateAction<LinkRefsDimension>
    >;
}
const Link = ({
    label,
    setSelectedPage,
    linkRefsDimension,
    setLinkRefsDimension,
}: LinkProps) => {
    const lowerCaseName = label.toLocaleLowerCase();

    return (
        <button
            ref={useCallback((element: HTMLButtonElement | null) => {
                // refs.current![lowerCaseName as keyof LinkRefs] = element;
                if (element !== null) {
                    setLinkRefsDimension((prevState) => ({
                        ...prevState,
                        [lowerCaseName as keyof LinkRefsDimension]: element,
                    }));
                }
            }, [])}
            className={`flex justify-center items-center px-4 h-9 text-lg md:text-2xl lg:text-base text-white lg:text-blue lg:border lg:border-blue`}
            onClick={() => {
                setSelectedPage(lowerCaseName);
            }}
        >
            <p className="drop-shadow-white lg:drop-shadow-blue">{label}</p>
        </button>
    );
};

export default Link;
