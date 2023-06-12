interface Tag {
    text: string;
}

const Tag = ({ text }: Tag) => {
    return (
        <div className="text-blue drop-shadow-blue border border-blue text-sm py-1 px-3 ">
            {text}
        </div>
    );
};

export default Tag;
