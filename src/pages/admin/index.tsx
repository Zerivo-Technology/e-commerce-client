import NavbarAdmin from "@/components/admin/NavbarAdmin"
import Sidebar from "@/components/admin/Sidebar"
import { Route, Routes } from "react-router-dom"
import DashboardAdmin from "./feature/dashboard"
import DataUser from "./feature/DataUser"
import DataCategory from "./feature/DataCategory"
import DataProduct from "./feature/DataProduct"

const PagesAdmin = () => {
  return (
    <div className="flex items-center w-full min-h-screen h-max">
      <Sidebar />
      <div className={`flex flex-col bg-[#EFF3F4] h-screen w-full ml-0 md:ml-[250px] px-8`}>
        <NavbarAdmin />
        <Routes>
          <Route path="/" element={<DashboardAdmin />} />
          <Route path="/data-user" element={<DataUser />} />
          <Route path="/data-category" element={<DataCategory />} />
          <Route path="/data-product" element={<DataProduct />} />
        </Routes>
      </div>
    </div>
  )
}

export default PagesAdmin