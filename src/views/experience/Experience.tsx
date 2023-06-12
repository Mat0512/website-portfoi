import Tag from "../../components/tags/Tag";
import ctiLogo from "../../assets/CTI-icon.png";

const Experience = () => {
    return (
        <div className="w-full h-full max-w-6xl mx-auto flex flex-col justify-center items-center">
            <p className="text-[48px] text-blue self-start mb-5">
                Work Experience
            </p>
            <div className="w-full border border-blue p-7 flex gap-5">
                <div className="flex flex-col gap-4">
                    <div className="w-full flex justify-between">
                        <div>
                            <p className="text-orchid text-lg">
                                Web Developer Intern
                            </p>
                            <p className="text-blue text-lg">
                                BatStateU Center for Technopreneurship and
                                Innovation
                            </p>
                            <p className="text-blue text-lg">
                                Jan 2023 - May 2023
                            </p>
                        </div>
                    </div>
                    <p>
                        Developed admin dashboard for one of their website.
                        Includes designing GUI, developed front-end, backend and
                        database.
                    </p>

                    <div className="flex gap-2 flex-wrap">
                        <Tag text="React" />
                        <Tag text="Material UI" />
                        <Tag text="Slim Php" />
                        <Tag text="MySQL" />
                    </div>
                </div>
                {/* image here */}
                <div>
                    <img className="w-[110px] h-auto " src={ctiLogo} />
                </div>
            </div>
        </div>
    );
};

export default Experience;
