import { useRef, useEffect, useState } from "react";

export function useVerticalScroll() {
    const elRef = useRef<HTMLDivElement>(null);
    const [isScrollingDownward, setIsScrollingDownward] = useState(false);

    useEffect(() => {
        const el = elRef.current;
        if (el) {
            const onWheel = (e: WheelEvent) => {
                setIsScrollingDownward(e.deltaY < 0 ? false : true);
            };
            el.addEventListener("wheel", onWheel);
            return () => el.removeEventListener("wheel", onWheel);
        }
    }, []);

    return { verticalScrollRef: elRef, isScrollingDownward };
}
