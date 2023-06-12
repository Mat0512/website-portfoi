import { motion } from "framer-motion";

interface ActiveProps {
    width: string | number;
    x: string | number;
}

const ActiveBorder = ({ width, x }: ActiveProps) => {
    const roundedWith = Math.round(Number(width));
    const roundedX = Math.round(Number(x));
    const intX = parseInt(roundedX.toString());

    //add framer motion for updating pos
    return (
        <motion.div
            initial={{
                opacity: 0,
                width: 124,
                left: intX,
                scaleX: 1.05,
                scaleY: 1.1,
            }}
            animate={{
                width: roundedWith,
                left: intX,
                opacity: [0, 0, 1],
            }}
            className={`absolute brightness-150 h-full top-0 border border-orchid drop-shadow-orchid`}
        ></motion.div>
    );
};

export default ActiveBorder;
