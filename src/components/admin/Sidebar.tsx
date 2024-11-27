import { IconsShopping } from "@/assets/icons"
import SidedarMenu from "./SidedarMenu"
import {  faDatabase, faExchangeAlt,  faHome, faMessage, faSignOut, faTicketAlt } from "@fortawesome/free-solid-svg-icons"


const Sidebar = () => {
    const Menu = [
        {
            title : 'Dashboard',
            url : '/admin',
            icons : faHome
        },
        {
            title : 'Master Data',
            url : '/admin/products',
            icons : faDatabase,
            type : 'submenu',
            submenu: [
                { 
                    title: 'Data User', 
                    url: '/admin/data-user' 
                },
                { 
                    title: 'Data Category', 
                    url: '/admin/data-category'  
                },
                { 
                    title: 'Data Product', 
                    url: '/admin/data-product' 
                },
            ]
        },
        {
            title : 'Voucher',
            url : '/admin/transactions',
            icons : faTicketAlt
        },
        {
            title : 'Message',
            url : '/admin/transactions',
            icons : faMessage
        },
        {
            title : 'Transactions',
            url : '/admin/transactions',
            icons : faExchangeAlt
        },
        {
            title : 'Sign Out',
            url : '/admin/transactions',
            icons : faSignOut
        },
    ]


    return (
        <div className={`w-[250px] h-screen fixed hidden md:flex flex-col bg-white text-black items-center  px-5 `}>
            <div className="flex items-center gap-3 my-7">
                <img src={IconsShopping} className="h-10 w-10" alt="" />
                <p className="text-2xl font-pridi font-semibold">Shopping</p>
            </div>
            <div className="w-full h-max flex flex-col gap-2 mt-6">
                {Menu.map((item, index) => (
                    <SidedarMenu 
                        key={index}
                        title={item.title}
                        icons={item.icons}
                        url={item.url}
                        type={item.type? item.type : ''}
                        subMenu={item.submenu ? item.submenu : []}
                    />
                ))}
            </div>
        </div>
    )
}

export default Sidebar