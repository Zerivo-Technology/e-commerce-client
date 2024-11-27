import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useLocation } from 'react-router-dom';

interface SubMenu {
    title: string;
    url: string;
}

interface MenuProps {
    title: string;
    url: string;
    icons: IconDefinition;
    type?: string;
    subMenu?: SubMenu[];  // Pastikan subMenu adalah array dari objek SubMenu
}

const SidedarMenu = ({ title, url, icons, type, subMenu }: MenuProps) => {
    const location = useLocation();
    const [subMenuIsActive, setSubMenuIsActive] = useState<boolean>(false);

    return (
        // Menggunakan ternary operator untuk memilih antara submenu dan menu biasa
        type === 'submenu' ? (
            <div className="flex flex-col gap-1">
                <div 
                    className="sidebar-menu"
                    onClick={() => setSubMenuIsActive(!subMenuIsActive)}
                >
                    <div className="h-10 w-10 flex items-center justify-center">
                        <FontAwesomeIcon icon={icons} className="text-md" />
                    </div>
                    <p className="font-medium text-sm">{title}</p>
                    <FontAwesomeIcon icon={subMenuIsActive ? faChevronUp : faChevronDown} className="absolute right-3 text-sm" />
                </div>
                {/* Render submenu jika subMenuIsActive adalah true */}
                <div className={`w-full ${subMenuIsActive ? 'flex' : 'hidden'} flex-col `}>
                    {subMenu?.map((item, index) => (
                        <Link 
                            key={index} 
                            to={item.url} 
                            className="h-10 w-full flex items-center px-2 gap-2 hover:bg-[#cdf463] cursor-pointer rounded-lg"
                        >
                            <div className="h-10 w-10 flex items-center justify-center" />
                            <p className=" text-sm">{item.title}</p>
                        </Link>
                    ))}
                </div>
            </div>
        ) : (
            // Menu biasa (Link)
            <Link to={url} className={`sidebar-menu ${location.pathname === url ? 'bg-[#cdf463]' : 'bg-transparent'}`}>
                <div className="h-10 w-10 flex items-center justify-center">
                    <FontAwesomeIcon icon={icons} className="text-md" />
                </div>
                <p className="font-medium text-sm">{title}</p>
            </Link>
        )
    );
}

export default SidedarMenu;
