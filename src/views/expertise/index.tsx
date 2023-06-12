const Expertise = () => {
    return (
        <div className="w-full h-full max-w-6xl mx-auto text-center flex flex-col justify-center items-center pt-10">
            <p className="text-[40px] leading-none mb-10">
                Languages, Frameworks & Libraries
            </p>
            <div className="w-full flex justify-center items-center gap-10">
                <div className="border border-blue w-full h-[400px] max-w-[425px] px-3 py-7">
                    <p className="text-blue text-[32px] text-left">Front End</p>
                </div>
                <div className="border border-orchid w-full h-[400px] max-w-[425px] px-3 py-7">
                    <p className="text-orchid text-[32px] text-left">
                        Back End
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Expertise;
