import { useRef, useEffect, useState } from "react";

export function useHorizontalScroll() {
    const elRef = useRef<HTMLDivElement>(null);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        const el = elRef.current;
        if (el) {
            const onWheel = (e: WheelEvent) => {
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

                el.scrollTo({
                    left: el.scrollLeft + e.deltaY / 1.5,
                });

                const width =
                    el.scrollWidth - document.documentElement.clientWidth;

                setScrollLeft(Math.round((el.scrollLeft / width) * 100));
            };
            el.addEventListener("wheel", onWheel);
            return () => el.removeEventListener("wheel", onWheel);
        }
    }, []);
    return { scrollRef: elRef, scrollLeft };
}
