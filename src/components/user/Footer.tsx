import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram,  faTwitter } from '@fortawesome/free-brands-svg-icons'
import LinkSection from "../element/LinkSection";

const FooterUser = () => {
    const footerLinks = [
        {
            title: "Company Info",
            links: ["About us", "Carrier", "We Are Hiring", "Blog"]
        },
        {
            title: "Legal",
            links: ["Terms & Conditions", "Privacy Policy", "Cookie Policy"]
        },
        {
            title: "Feature",
            links: ["Business Marketing", "User Analytic", "Live Chat", "Unlimited Support"]
        },
        {
            title: "Resources",
            links: ["IOS & Android", "Watch a Demo", "Customer", "API"]
        }
    ];

    return (
        <div className="w-full h-max flex flex-col items-center">

            <div className="container flex flex-col gap-2">
                <div className="h-[102px] w-full flex items-center justify-between">
                    <p className="font-semibold text-2xl">Zerivo</p>
                    <div className="flex items-center gap-4">
                        <FontAwesomeIcon icon={faFacebook} className="text-primary-color hover:text-hover-color cursor-pointer text-lg" />
                        <FontAwesomeIcon icon={faInstagram} className="text-primary-color hover:text-hover-color cursor-pointer text-lg" />
                        <FontAwesomeIcon icon={faTwitter} className="text-primary-color hover:text-hover-color cursor-pointer text-lg" />
                    </div>
                </div>
                <hr />
                <div className="h-max  py-7  grid grid-cols-2 md:flex gap-5 md:gap-3 justify-between">

                    {footerLinks.map((section, index) => (
                        <LinkSection key={index} title={section.title} links={section.links} />
                    ))}
                    
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold">Get in Touch</p>
                        <div className="w-max flex items-center ">
                            <input type="text" placeholder="Your Email" className="h-10 focus:outline-none text-xs indent-3 w-36 border rounded-l " />
                            <button className="flex flex-1 w-20 bg-primary-color hover:bg-hover-color h-full rounded-r items-center justify-center text-xs text-white">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-xs text-secondary-color-2">lorem ipsum dolordsadas</p>
                    </div>
                </div>
            </div>

            <div className="h-[74px] w-full bg-light-gray-1 flex items-center justify-center">
                <div className="container flex items-center text-secondary-color-2">
                    <p className="font-medium text-sm">Made with Love all right reserved</p>
                </div>
            </div>
        </div>
    )
}

export default FooterUser