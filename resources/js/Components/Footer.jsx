/* This example requires Tailwind CSS v2.0+ */
import LUPIC from "../Asset/LupicW.png";
import UPI from "../Asset/UPI.png";
import NRF from "../Asset/NRF.png";
import Ministry from "../Asset/Ministry.png";
import Sogang from "../Asset/Sogang.png";
import UNIDIKSHA from "../Asset/UNIDIKSHA.png";
import UNNES from "../Asset/UNNES.png";
import USD from "../Asset/USD.png";

const navigation = {
    support: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/aboutus" },
        { name: "Goals & Activities", href: "/goalsactivities" },
        { name: "News", href: "/news" },
        { name: "Facilities", href: "/facilities" },
        { name: "Gallery", href: "/gallery" },
        { name: "Services", href: "services" },
    ],
    company: [
        { name: "Lorem Ipsum", href: "#" },
        { name: "Lorem Ipsum", href: "#" },
        { name: "Lorem Ipsum", href: "#" },
        { name: "Lorem Ipsum", href: "#" },
        { name: "Lorem Ipsum", href: "#" },
    ],
    legal: [
        { name: "Claim", href: "#" },
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" },
    ],
    social: [
        {
            name: "Kimia UPI",
            href: "https://kimia.upi.edu/",
            icon: (props) => (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    {...props}
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                    />
                </svg>
            ),
        },
        {
            name: "Kimia UNNES",
            href: "https://unnes.ac.id/kimia-s1/",
            icon: (props) => (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    {...props}
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                    />
                </svg>
            ),
        },
        {
            name: "Kimia UNDHIKSA",
            href: "https://undiksha.ac.id/akademik/fakultas/fakultas-matematika-dan-ilmu-pengetahuan-alam/kimia/",
            icon: (props) => (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    {...props}
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                    />
                </svg>
            ),
        },
        // {
        //     name: "@upi_official",
        //     href: "#",
        //     icon: (props) => (
        //         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        //             <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        //         </svg>
        //     ),
        // },
        // {
        //     name: "UPI Podcast",
        //     href: "#",
        //     icon: (props) => (
        //         <svg
        //             {...props}
        //             fill="currentColor"
        //             className="w-8 h-8 -mb-2"
        //             viewBox="0 0 24 24"
        //         >
        //             <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z" />
        //         </svg>
        //     ),
        // },
        // {
        //     name: "Universitas Pendidikan Indonesia",
        //     href: "#",
        //     icon: (props) => (
        //         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        //             <path
        //                 fillRule="evenodd"
        //                 d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        //                 clipRule="evenodd"
        //             />
        //         </svg>
        //     ),
        // },
        // {
        //     name: "upiofficial",
        //     href: "#",
        //     icon: (props) => (
        //         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        //             <path
        //                 fillRule="evenodd"
        //                 d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
        //                 clipRule="evenodd"
        //             />
        //         </svg>
        //     ),
        // },
    ],
};

export default function Example() {
    return (
        <footer
            className="bg-slate-900 max-w-screen"
            aria-labelledby="footer-heading"
        >
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto w-11/12 sm:px-6 lg:py-8 lg:px-8 pb-4">
                <div className="xl:grid xl:grid-cols-2 items-center">
                    <div className="xl:col-span-1">
                        <img className="h-28 pt-8" src={LUPIC} alt="LUPIC" />
                        <div className="flex-col pb-8">
                            <div className="flex gap-3 my-4">
                                <img
                                    className="h-14 w-auto "
                                    src={Ministry}
                                    alt="Ministry"
                                />
                                <img
                                    className="h-14 w-auto "
                                    src={NRF}
                                    alt="NRF"
                                />
                                <img
                                    className="h-14 w-auto "
                                    src={Sogang}
                                    alt="Sogang"
                                />
                            </div>
                            <div className="flex gap-3">
                                <img
                                    className="h-12 w-auto "
                                    src={UPI}
                                    alt="UPI"
                                />
                                <img
                                    className="h-12 w-auto "
                                    src={UNNES}
                                    alt="UNNES"
                                />
                                <img
                                    className="h-12 w-auto "
                                    src={UNIDIKSHA}
                                    alt="UNIDIKSHA"
                                />
                                <img
                                    className="h-12 w-auto "
                                    src={USD}
                                    alt="USD"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 className="text-xl font-bold font-[poppins] text-white">
                                Menu
                            </h3>
                            <ul role="list" className="mt-4 space-y-4">
                                {navigation.support.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            className="text-base text-white font-[poppins] hover:text-gray-300"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* <div>
                            <h3 className="text-xl font-bold font-[poppins] text-white mt-4 md:mt-0">
                                Program
                            </h3>
                            <ul role="list" className="mt-4 space-y-4">
                                {navigation.company.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            className="text-base text-white font-[poppins] hover:text-gray-300"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div> */}
                        <div className="mt-12 md:mt-0">
                            <h3 className="text-xl font-bold font-[poppins] text-white">
                                Contact Us
                            </h3>
                            <ul role="list" className="mt-4 space-y-4">
                                {navigation.social.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-base text-white flex gap-2 font-[poppins] hover:text-gray-300"
                                    >
                                        <item.icon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                        <span className="">{item.name}</span>
                                    </a>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-200 mt-4">
                    <p className="text-base text-gray-400 xl:text-center mt-4">
                        &copy; 2024 LUPIC. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
