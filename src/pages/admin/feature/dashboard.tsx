import { faBoxOpen, faDollarSign, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const DashboardAdmin = () => {
    const DataCard = [
        {
            title: 'Total Users',
            icons: faUser, // Ikon pengguna
            count: 1500,  // Jumlah total pengguna
            color: 'bg-[#CDC3FF]'  // Warna latar belakang
        },
        {
            title: 'Total Orders',
            icons: faShoppingCart, // Ikon untuk pesanan
            count: 3200,  // Jumlah total pesanan
            color: 'bg-[#AAC9FF]'  // Warna latar belakang
        },
        {
            title: 'Total Revenue',
            icons: faDollarSign,  // Ikon untuk pendapatan
            count: 45000,  // Total pendapatan dalam satuan mata uang
            color: 'bg-[#92E3B8]'  // Warna latar belakang
        },
        {
            title: 'Products Sold',
            icons: faBoxOpen,  // Ikon untuk produk yang terjual
            count: 5800,  // Jumlah produk yang terjual
            color: 'bg-[#FFF9C4]'  // Warna latar belakang
        },
    ];


    return (
        <div className="h-max w-full flex flex-col font-poppins">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {DataCard.map((items, index) => (
                    <div 
                        key={index}
                        className={`${items.color}  rounded-lg h-[150px] flex flex-col gap-2 p-4 text-[#2f302f]`}
                    >
                        <div className="flex items-center gap-3">
                            <div className={`h-8 w-8 bg-black bg-opacity-10  rounded-full flex items-center justify-center`}>
                                <FontAwesomeIcon icon={items.icons} className="text-sm" />
                            </div>
                            <p className="text-sm font-medium">{items.title}</p>
                        </div>
                        <div className="flex flex-1 flex-col  items-center justify-center gap-1">
                            <p className="text-lg">{items.count}</p>
                            <p className="text-xs text-gray-600">From the running month</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DashboardAdmin