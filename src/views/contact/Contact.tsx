import { motion } from "framer-motion";
import Button from "../../components/button";
import { Props } from "../../utils/animationUtils";

const Contact = ({ animation }: Props) => {
    return (
        <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.5 }}
            variants={animation}
            className=" px-5 w-full h-full min-h-screen flex flex-col jusify-center items-center"
        >
            <div className="h-full w-full max-w-2xl flex flex-col justify-center items-center gap-3 lg:max-w-6xl">
                <p className="text-[48px] text-blue drop-shadow-blue leading-none mb-5">
                    Contact
                </p>
                <div className="w-full max-w-4xl border border-blue drop-shadow-blue" />
                <div className="mt-5 flex md:justify-center gap-5 flex-wrap">
                    <div>
                        <Button
                            type="primary"
                            text="mathewmendoza0512@gmail.com"
                            color="blue"
                            size="lg"
                            onClick={() => {
                                window.open(
                                    "mailto:mathewmendoza0512@gmail.com",
                                    "_blank"
                                );
                            }}
                        />

                        <div className="mt-3"></div>
                        <Button
                            type="primary"
                            text="Github"
                            color="blue"
                            size="lg"
                            onClick={() => {
                                window.open(
                                    "https://github.com/Mat0512",
                                    "_blank"
                                );
                            }}
                        />
                    </div>

                    <div>
                        <Button
                            type="primary"
                            text="LinkedIn"
                            color="blue"
                            size="lg"
                            onClick={() => {
                                window.open(
                                    "https://www.linkedin.com/in/mathew-mendoza-8ab2a71a3/",
                                    "_blank"
                                );
                            }}
                        />
                        <div className="mt-3"></div>
                        <Button
                            type="primary"
                            text="Facebook"
                            color="blue"
                            size="lg"
                            onClick={() => {
                                window.open(
                                    "https://www.facebook.com/mat.mendoza.3910/",
                                    "_blank"
                                );
                            }}
                        />
                    </div>
                </div>
            </div>
            <p className="mb-5 w-full drop-shadow-white text-sm text-center">
                &copy; Mathew Mendoza 2023
            </p>
        </motion.div>
    );
};

export default Contact;
