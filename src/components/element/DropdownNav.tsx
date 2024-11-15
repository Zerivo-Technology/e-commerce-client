// DropdownMenu.tsx
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface DropdownMenuProps {
    title: string;
    items: { label: string; path: string }[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, items }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div 
            className="relative flex items-center gap-1 cursor-pointer font-semibold text-secondary-color-2"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
        >
            <p className="flex items-center gap-1">
                {title}
                <FontAwesomeIcon icon={isDropdownOpen ? faChevronUp : faChevronDown} className="text-xs" />
            </p>
            
            {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white border shadow-lg rounded-md w-32">
                    {items.map((item, index) => (
                        <Link 
                            key={index} 
                            to={item.path} 
                            className="block px-4 py-2 text-sm hover:bg-gray-200 "
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
