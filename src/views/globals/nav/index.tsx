import React, { useState, useEffect } from "react";
import Link from "./Link";
import ActiveBorder from "./ActiveBorder";
import useMediaQuery from "../../../hooks/useMediaQuery";

import menuIcon from "../../../assets/menu-icon.png";
import closeIcon from "../../../assets/close-icon.png";

import { motion } from "framer-motion";

import { ScrollToType } from "../../../hooks/useHorizontalScroll";

interface NavProps {
    selectedPage: string;
    setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
    handleScrollTo?: ScrollToType;
}

export interface LinkRefsDimension {
    home: HTMLButtonElement | null;
    expertise: HTMLButtonElement | null;
    experience: HTMLButtonElement | null;
    projects: HTMLButtonElement | null;
    contact: HTMLButtonElement | null;
}

const navVariant = {
    open: {
        width: "75%",
        x: 0,
        opacity: 1,
        transition: { type: "easeOut", duration: 0.5 },
    },
    closed: {
        width: 0,
        opacity: 0,
        x: 1000,
        transition: { type: "easeOut", duration: 1.5 },
    },
};

const Nav = ({ selectedPage, setSelectedPage, handleScrollTo }: NavProps) => {
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
                            handleScrollTo={handleScrollTo}
                            setLinkRefsDimension={setLinkRefsDimension}
                            label="Home"
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            handleScrollTo={handleScrollTo}
                            setLinkRefsDimension={setLinkRefsDimension}
                            label="Expertise"
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            handleScrollTo={handleScrollTo}
                            setLinkRefsDimension={setLinkRefsDimension}
                            label="Experience"
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            handleScrollTo={handleScrollTo}
                            setLinkRefsDimension={setLinkRefsDimension}
                            label="Projects"
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            handleScrollTo={handleScrollTo}
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
                {!isAboveSmallScreens && (
                    <motion.div
                        initial={{ width: 0, x: 0, opacity: 0 }}
                        animate={isMenuToggled ? "open" : "closed"}
                        variants={navVariant}
                        className="fixed right-0 top-0  h-full bg-[#2a2356] border border-l-blue flex flex-col justify-center items-center gap-5"
                    >
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
                            setLinkRefsDimension={setLinkRefsDimension}
                            label="Home"
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            setLinkRefsDimension={setLinkRefsDimension}
                            label="Expertise"
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            setLinkRefsDimension={setLinkRefsDimension}
                            label="Experience"
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            setLinkRefsDimension={setLinkRefsDimension}
                            label="Projects"
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            setLinkRefsDimension={setLinkRefsDimension}
                            label="Contact"
                            setSelectedPage={setSelectedPage}
                        />
                    </motion.div>
                )}
            </nav>
        </>
    );
};

export default Nav;
