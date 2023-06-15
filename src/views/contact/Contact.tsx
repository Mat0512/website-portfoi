import Button from "../../components/button";

const Contact = () => {
    return (
        <div className="mx-auto w-full min-h-screen max-w-2xl flex flex-col justify-center items-center gap-3 lg:max-w-6xl">
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
                            console.log("hello");
                        }}
                    />
                    <div className="mt-3"></div>
                    <Button
                        type="primary"
                        text="Github"
                        color="blue"
                        size="lg"
                        onClick={() => {
                            console.log("hello");
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
                            console.log("hello");
                        }}
                    />
                    <div className="mt-3"></div>
                    <Button
                        type="primary"
                        text="Facebook"
                        color="blue"
                        size="lg"
                        onClick={() => {
                            console.log("hello");
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact;
