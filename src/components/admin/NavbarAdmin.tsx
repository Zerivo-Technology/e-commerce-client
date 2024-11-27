import { IconsProfile } from "@/assets/icons"
import { faBell } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useLocation } from "react-router-dom"


const NavbarAdmin = () => {
    const location = useLocation();

    let url = "";  // Gunakan `let` karena kita akan mengubah nilai variabel

    if (location.pathname === "/admin") {
        url = "Dashboard";  // Set nilai baru untuk url
    } else if (location.pathname === "/admin/data-user") {
        url = "Data User";  // Set nilai baru untuk url
    } else if (location.pathname === "/admin/data-category") {
        url = "Data Category";  // Set nilai baru untuk url
    } else if (location.pathname === "/admin/data-product") {
        url = "Data Products";  // Set nilai baru untuk url
    } 

    return (
        <div className="w-full h-16  my-5 flex items-center justify-between font-poppins">
            <div className="flex flex-col">
                <p className="font-semibold text-xl">{url}</p>
                <p className="text-xs text-gray-400">14th Aug 2024</p>
            </div>
            <div className="flex items-center gap-5">
                <div className="h-8 w-8 border rounded-xl border-gray-500 flex items-center justify-center cursor-pointer text-gray-500">
                    <FontAwesomeIcon icon={faBell} />
                </div>
                <div className="flex items-center gap-3">
                    <img src={IconsProfile} className="h-10 w-10 rounded-full object-cover" alt="" />
                    <div className="flex flex-col ">
                        <p className="font-medium text-sm">Username</p>
                        <p className="text-xs text-gray-400">Administrator</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarAdmin