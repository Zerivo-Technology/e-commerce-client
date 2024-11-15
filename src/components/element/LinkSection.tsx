interface LinkSectionProps {
    title: string;
    links: string[];
}

const LinkSection: React.FC<LinkSectionProps> = ({ title, links }) => {
    return (
        <div className="flex flex-col gap-2">
            <p className="font-semibold">{title}</p>
            <div className="flex flex-col gap-1 text-sm text-secondary-color-2">
                {links.map((link, index) => (
                    <p key={index} className="cursor-pointer">{link}</p>
                ))}
            </div>
        </div>
    );
};

export default LinkSection