import { useRef, useEffect, useState } from "react";
import useMediaQuery from "./useMediaQuery";

//debounce functoin

interface SectionsInterface {
    home: number;
    expertise: number;
    experience: number;
    projects: number;
    contact: number;
}

export type LinkName =
    | "home"
    | "expertise"
    | "experience"
    | "projects"
    | "contact";

export type ScrollToType = (param: LinkName) => void;

//tracks active link based on viewport

interface ActiveLinkInterface {
    0: string;
    100: string;
    200: string;
    300: string;
    400: string;
}

const activeLink: ActiveLinkInterface = {
    0: "home",
    100: "expertise",
    200: "experience",
    300: "projects",
    400: "contact",
};

export function useHorizontalScroll(
    setActiveLink: React.Dispatch<React.SetStateAction<string>>
) {
    const elRef = useRef<HTMLDivElement>(null);
    const isAboveLargeScreens = useMediaQuery("(min-width: 1024px)");
    const [vw, setVw] = useState(0);
    const [isScrollingRight, setIsScrollingRight] = useState(false);
    const maxTranslateVw = 400; // size of scrollable container
    const maxVwScroll = 10; // scroll value per scrooll

    //function handler for navigating using nav links
    const handleScrollTo = (linkName: LinkName) => {
        const multiplier: SectionsInterface = {
            home: 0,
            expertise: 1,
            experience: 2,
            projects: 3,
            contact: 4,
        };
        let scrollVal = 100 * multiplier[linkName as keyof SectionsInterface];

        setVw(scrollVal);
        setIsScrollingRight(scrollVal > vw ? true : false);
    };

    let timeoutID: undefined | number;

    useEffect(() => {
        const el = elRef.current;
        if (el) {
            const onWheel = (e: WheelEvent) => {
                if (e.deltaY === 0) return;
                if (!isAboveLargeScreens) return;
                if (
                    !(el.scrollLeft === 0 && e.deltaY < 0) &&
                    !(
                        el.scrollWidth -
                            el.clientWidth -
                            Math.round(el.scrollLeft) ===
                            0 && e.deltaY > 0
                    )
                ) {
                    e.preventDefault();
                }

                e.preventDefault();

                const addedVw =
                    e.deltaY < 0 ? -Math.abs(maxVwScroll) : maxVwScroll;

                setVw((prev) => {
                    if (prev + addedVw < 0 || prev + addedVw > maxTranslateVw)
                        return prev;

                    return prev + addedVw;
                });

                // re computes the scroll position to make it traverse exactly by section
                const roundViewport = () => {
                    setVw((prev) => {
                        if (prev === maxTranslateVw) return prev; // reaches end and cancel travesing

                        const isForwardScroll = e.deltaY > 0;
                        let addVal = Math.abs((prev % 100) - 100); // scroll right value
                        let subtractVal = -Math.abs(prev % 100); // scroll left value

                        let computedVal = isForwardScroll
                            ? addVal
                            : subtractVal; // toggles based on scroll left or right

                        let vw = prev + computedVal;
                        setActiveLink(
                            activeLink[vw as keyof ActiveLinkInterface]
                        );
                        return vw;
                    });
                };

                if (typeof timeoutID === "number") {
                    clearTimeout(timeoutID);
                    timeoutID = undefined;
                }

                setIsScrollingRight(e.deltaY > 0 ? true : false);
                timeoutID = setTimeout(roundViewport, 300);
            };

            el.addEventListener("wheel", onWheel);
            return () => el.removeEventListener("wheel", onWheel);
        }
    }, [isAboveLargeScreens]);

    return { horizontalScrollRef: elRef, vw, isScrollingRight, handleScrollTo };
}
