interface ItemProps {
    image: string;
    label: string;
    imgWidthHeight?: string;
    labelColor?: string;
}

const Item = ({ image, label, imgWidthHeight, labelColor }: ItemProps) => {
    return (
        <div className="w-[33.33%] p-4 md:w-[92px] lg:w-[80px] lg:p-3 flex flex-col items-center">
            <img
                className={`w-[${imgWidthHeight || "50px"}] h-auto`}
                src={image}
                alt="Programming Icon"
            />
            <p
                className={`mt-1 text-xs text-${
                    labelColor ? labelColor : "blue"
                } drop-shadow-${labelColor ? labelColor : "blue"}`}
            >
                {label}
            </p>
        </div>
    );
};

export default Item;
