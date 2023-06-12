import React, { RefObject, useCallback } from "react";
import { LinkRefsDimension } from "./";

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
            className={`flex justify-center items-center px-4 h-9 text-base text-blue border border-blue`}
            onClick={() => {
                setSelectedPage(lowerCaseName);
            }}
        >
            <p className="drop-shadow-blue">{label}</p>
        </button>
    );
};

export default Link;
