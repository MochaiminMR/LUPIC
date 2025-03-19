/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import {
    Bars3Icon,
    XMarkIcon,
    ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Logo from "../Asset/Lupic.png";
import { Link } from "@inertiajs/react";
import Dropdown from "./Dropdown";
import { useState } from "react";

const navigation = [
    { name: "Home", href: "/", current: false },
    { name: "About Us", href: "/about", current: false },
    { name: "Goals & Activities", href: "/activities", current: false },
    { name: "News", href: "/news", current: false },
    { name: "Facilities", href: "/facilities", current: false },
    { name: "Gallery", href: "/gallery", current: false },
    {
        name: "Services",
        href: "/product&service/services",
        current: false,
        type: "service",
    },
];
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Example() {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleDropdownToggle = (name) => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };
    return (
        <Disclosure as="nav" className="bg-[#EA1833] w-full top-0 left-0 z-50">
            {({ open }) => (
                <>
                    <div className="mx-auto w-11/12 px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-18">
                            <div className="flex items-center justify-between w-screen">
                                <div className="-ml-2 mr-2 flex items-center md:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-red-400 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">
                                            Open main menu
                                        </span>
                                        {open ? (
                                            <XMarkIcon
                                                className="block h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <Bars3Icon
                                                className="block h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex items-center justify-center lg:justify-start w-full mr-10">
                                    <Link href="/" className="mt-2">
                                        <img
                                            className="block mx-auto lg:mx-0 h-14 w-auto"
                                            src={Logo}
                                            alt="LUPIC"
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="flex-1 flex justify-end">
                                <div className="hidden md:flex md:ml-6 md:items-center md:space-x-4 whitespace-nowrap">
                                    {navigation.map((item) => (
                                        <div
                                            key={item.name}
                                            className="relative"
                                        >
                                            <Link
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? " text-white"
                                                        : "text-white hover:text-red-900",
                                                    "px-3 py-2 rounded-md text-sm font-medium font-[poppins]"
                                                )}
                                                aria-current={
                                                    item.current
                                                        ? "page"
                                                        : undefined
                                                }
                                                {...(item.type ===
                                                    "service" && {
                                                    onClick: (e) => {
                                                        e.preventDefault();
                                                        handleDropdownToggle(
                                                            item.name
                                                        );
                                                    },
                                                })}
                                            >
                                                {item.name}
                                            </Link>
                                            {activeDropdown === item.name && (
                                                <div className="absolute top-full left-0 mt-2 bg-white rounded-md shadow-lg z-10">
                                                    <ul className="py-1">
                                                        <li>
                                                            <Link
                                                                href="/training"
                                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                            >
                                                                Training
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href="/product&service/eCommerce"
                                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                            >
                                                                Ecommerce
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href="/product&service/services"
                                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                            >
                                                                Service
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                            {navigation.map((item) => (
                                <div key={item.name} className="relative">
                                    <Disclosure.Button
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current
                                                ? "bg-[#001932] text-white"
                                                : "text-gray-300 hover:bg-[#001932] hover:text-white",
                                            "block px-3 py-2 rounded-md text-base font-medium"
                                        )}
                                        aria-current={
                                            item.current ? "page" : undefined
                                        }
                                        onClick={(e) => {
                                            if (item.type === "service") {
                                                e.preventDefault();
                                                handleDropdownToggle(item.name);
                                            }
                                        }}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                    {item.type === "service" &&
                                        activeDropdown === item.name && (
                                            <div className="space-y-1 mt-2">
                                                <Link
                                                    href="/training"
                                                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#001932] hover:text-white"
                                                >
                                                    Training
                                                </Link>
                                                <Link
                                                    href="/product&service/eCommerce"
                                                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#001932] hover:text-white"
                                                >
                                                    Ecommerce
                                                </Link>
                                                <Link
                                                    href="/product&service/services"
                                                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#001932] hover:text-white"
                                                >
                                                    Service
                                                </Link>
                                            </div>
                                        )}
                                </div>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
