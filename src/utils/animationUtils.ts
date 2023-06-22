//  frame motion
interface Transition {
    duration: number;
    delay: number;
    ease: string;
}

export const transition: Transition = {
    duration: 0.6,
    delay: 0.3,
    ease: "easeOut",
};

export interface AnimateX {
    x: number;
    opacity: number;
    transition: Transition;
}

export const animateX: AnimateX = {
    x: 0,
    opacity: 1,
    transition: transition,
};

export interface AnimateY {
    y: number;
    opacity: number;
    transition: Transition;
}

export const animateY: AnimateY = {
    y: 0,
    opacity: 1,
    transition: transition,
};

export interface InitialX {
    x: number;
    opacity: number;
}

export interface InitialY {
    y: number;
    opacity: number;
}

export interface Props {
    animation: {
        initial: InitialX | InitialY;
        animate: AnimateX | AnimateY;
    };
}

export const toggleInitialX = (isForwardScroll: boolean): InitialX => ({
    x: isForwardScroll ? -150 : 150,
    opacity: 0,
});

export const toggleInitialY = (isForwardScroll: boolean): InitialY => ({
    y: isForwardScroll ? -50 : 50,
    opacity: 0,
});

export const toggleSlideAnimation = (
    isForwardScroll: boolean,
    isMobileViewport: boolean
) => {
    const initial = isMobileViewport
        ? toggleInitialY(isForwardScroll)
        : toggleInitialX(isForwardScroll);

    const animate = isMobileViewport ? animateY : animateX;
    return {
        initial: initial,
        animate: animate,
    };
};
