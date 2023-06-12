import React, { useState, useEffect } from "react";
import Link from "./Link";
import ActiveBorder from "./ActiveBorder";

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

    const [activeLinkDimension, setActiveLinkDimension] = useState({
        x: 0,
        width: 0,
    });

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
            <nav className="fixed top-0 left-0 w-full my-8 z-40">
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
            </nav>
        </>
    );
};

export default Nav;
