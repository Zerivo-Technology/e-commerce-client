import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  children: React.ReactNode; // Gunakan React.ReactNode untuk mendukung berbagai jenis konten
  isOpen: boolean;
  onClose: () => void;
}

const Modals: React.FC<Props> = ({ children, isOpen, onClose }) => {
  return (
    <div
      onClick={onClose}
      className={`${
        isOpen ? 'flex' : 'hidden'
      } fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 items-center justify-center`}>
      <div
        className="h-max min-h-80 w-[90%] max-w-[370px] bg-white rounded-lg shadow-xl px-6 py-7 font-poppins relative"
        onClick={(e) => e.stopPropagation()} // Prevent click on modal content from closing the modal
      >
        <div
          onClick={onClose}
          className="h-7 w-7 text-xs bg-gray-300 hover:bg-gray-400 cursor-pointer rounded-full absolute top-2 right-2 flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faX} className="text-white" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modals;
