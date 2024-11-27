import { useState } from "react"
import Modals from "./Modals";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface props {
    children : React.ReactElement;
    icons : IconDefinition;
    title? : string;
    type? : string;
}

const ModalsTable:React.FC<props> = ({children, icons, title, type}) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>  
            {type === 'btn-table' ? (
                <button 
                    onClick={openModal}
                    className="flex items-center h-10 justify-center gap-3 px-3  rounded text-white bg-primary-color hover:bg-hover-color">
                    <FontAwesomeIcon icon={icons} />
                    <p className="text-sm">{title}</p>
                </button>
            ) : (
                <div 
                    onClick={openModal}
                    className="px-4 gap-3 h-8 rounded-full bg-[#5d5c72] text-white flex items-center justify-center text-sm cursor-pointer font-medium hover:opacity-70">
                    <FontAwesomeIcon icon={icons} />
                    {title && 
                        <p className="font-medium text-sm font-poppins">{title}</p>
                    } 
                </div>
            )}
            <Modals isOpen={isOpen} onClose={closeModal}>
                <div className="flex flex-col w-full gap-5 text-black">
                    {children}
                </div>
            </Modals>
        </>
    )
}

export default ModalsTable