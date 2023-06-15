import { useRef, useEffect, useState } from "react";
import useMediaQuery from "./useMediaQuery";

//debounce functoin

export function useHorizontalScroll() {
    const elRef = useRef<HTMLDivElement>(null);
    const isAboveLargeScreens = useMediaQuery("(min-width: 1024px)");

    const [vw, setVw] = useState(0);
    let timeoutID: undefined | number;

    useEffect(() => {
        const el = elRef.current;
        if (el) {
            const onWheel = (e: WheelEvent) => {
                if (!isAboveLargeScreens) return; // horizontal scroll only on larger device
                if (e.deltaY === 0) return;
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
                const maxTranslateVw = 400; //vw
                const maxVw = 10;

                const addedVw = e.deltaY < 0 ? -Math.abs(maxVw) : maxVw;

                setVw((prev) => {
                    if (prev + addedVw < 0 || prev + addedVw > maxTranslateVw)
                        return prev;

                    return prev + addedVw;
                });

                const roundViewport = () => {
                    setVw((prev) => {
                        const isForwardScroll = e.deltaY > 0;
                        let addVal = Math.abs((prev % 100) - 100);
                        let subtractVal = -Math.abs(prev % 100);

                        return prev + (isForwardScroll ? addVal : subtractVal);
                    });
                };

                if (typeof timeoutID === "number") {
                    clearTimeout(timeoutID);
                    timeoutID = undefined;
                }

                timeoutID = setTimeout(roundViewport, 500);
            };
            el.addEventListener("wheel", onWheel);
            return () => el.removeEventListener("wheel", onWheel);
        }
    }, [isAboveLargeScreens]);

    return { scrollRef: elRef, vw };
}
