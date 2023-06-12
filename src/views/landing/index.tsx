import Button from "../../components/button";
import { motion } from "framer-motion";

const Landing = () => {
    return (
        <div className="w-full h-full max-w-6xl mx-auto flex justify-between items-center">
            <div>
                <p className="text-[64px] leading-none mb-5 drop-shadow-white">
                    Mathew Mendoza
                </p>
                <p className="text-[24px] leading-none mb-5">
                    I am a web developer based in Philippines.
                </p>
                <Button
                    type="primary"
                    text="Contact Me"
                    color="blue"
                    size="lg"
                    onClick={() => {
                        console.log("click");
                    }}
                />
            </div>

            <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-1 text-blue drop-shadow-blue text-lg cursor-pointer hover:brightness-200"
            >
                More <span className="text-3xl leading-none">&rarr;</span>
            </motion.div>
        </div>
    );
};

export default Landing;
