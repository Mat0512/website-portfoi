import React, { useState, useEffect } from "react";
import Link from "./Link";
import ActiveBorder from "./ActiveBorder";
import useMediaQuery from "../../../hooks/useMediaQuery";

import menuIcon from "../../../assets/menu-icon.png";
import closeIcon from "../../../assets/close-icon.png";

interface NavProps {
    selectedPage: string;
    setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
}

export interface LinkRefsDimension {
    home: HTMLButtonElement | null;
    expertise: HTMLButtonElement | null;
    experience: HTMLButtonElement | null;
    projects: HTMLButtonElement | null;
    contact: HTMLButtonElement | null;
}

const Nav = ({ selectedPage, setSelectedPage }: NavProps) => {
    //track active link's position and width for moving and resizing Active border
    const isAboveSmallScreens = useMediaQuery("(min-width: 1024px)");

    const [activeLinkDimension, setActiveLinkDimension] = useState({
        x: 0,
        width: 0,
    });
    const [isMenuToggled, setIsMenuToggled] = useState(false);

    const [linkRefsDimension, setLinkRefsDimension] =
        useState<LinkRefsDimension>({
            home: null,
            expertise: null,
            experience: null,
            projects: null,
            contact: null,
        });
    const [screenSize, setScreenSize] = useState<number | null>(null);

    //replace it with state and set it into callback ref

    useEffect(() => {
        const updateActiveLink = () => {
            const lowercaseKey = selectedPage.toLocaleLowerCase();
            if (linkRefsDimension[lowercaseKey as keyof LinkRefsDimension]) {
                const { x, width } =
                    linkRefsDimension[
                        lowercaseKey as keyof LinkRefsDimension
                    ]!.getBoundingClientRect();
                setActiveLinkDimension({ x, width });
            }
        };

        updateActiveLink();

        const handleResize = () => {
            setScreenSize(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [selectedPage, screenSize, linkRefsDimension]);

    return (
        <>
            <nav className="fixed top-0 left-0 w-screen my-6 md:my-8 z-40">
                {isAboveSmallScreens ? (
                    <div className="relative w-full flex justify-center gap-2">
                        <ActiveBorder
                            width={activeLinkDimension.width}
                            x={activeLinkDimension.x}
                        />
                        <Link
                            linkRefsDimension={linkRefsDimension}
                            setLinkRefsDimension={setLinkRefsDimension}
                            label="Home"
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            linkRefsDimension={linkRefsDimension}
                            setLinkRefsDimension={setLinkRefsDimension}
                            label="Expertise"
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            linkRefsDimension={linkRefsDimension}
                            setLinkRefsDimension={setLinkRefsDimension}
                            label="Experience"
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            linkRefsDimension={linkRefsDimension}
                            setLinkRefsDimension={setLinkRefsDimension}
                            label="Projects"
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            linkRefsDimension={linkRefsDimension}
                            setLinkRefsDimension={setLinkRefsDimension}
                            label="Contact"
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                ) : (
                    <div className="relative flex justify-end px-4">
                        {!isMenuToggled && (
                            <button
                                onClick={() => {
                                    setIsMenuToggled(!isMenuToggled);
                                }}
                            >
                                <img
                                    className="w-[38px] md:w-[50px]"
                                    src={menuIcon}
                                    alt="menu-icon"
                                />
                            </button>
                        )}
                    </div>
                )}

                {/* Popup mobile menu */}
                {!isAboveSmallScreens && isMenuToggled && (
                    <div className="fixed right-0 top-0 w-5/6 h-full bg-[#2a2356] border border-l-blue flex flex-col justify-center items-center gap-5">
                        <button
                            className="absolute p-5 top-0 right-0"
                            onClick={() => {
                                setIsMenuToggled(!isMenuToggled);
                            }}
                        >
                            <img
                                className="w-[30px] md:w-[45px]"
                                src={closeIcon}
                                alt="close-icon"
                            />
                        </button>
                        <Link
                            linkRefsDimension={linkRefsDimension}
                            setLinkRefsDimension={setLinkRefsDimension}
                            label="Home"
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            linkRefsDimension={linkRefsDimension}
                            setLinkRefsDimension={setLinkRefsDimension}
                            label="Expertise"
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            linkRefsDimension={linkRefsDimension}
                            setLinkRefsDimension={setLinkRefsDimension}
                            label="Experience"
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            linkRefsDimension={linkRefsDimension}
                            setLinkRefsDimension={setLinkRefsDimension}
                            label="Projects"
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            linkRefsDimension={linkRefsDimension}
                            setLinkRefsDimension={setLinkRefsDimension}
                            label="Contact"
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                )}
            </nav>
        </>
    );
};

export default Nav;
