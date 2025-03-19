import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Head, Link } from "@inertiajs/react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ECommerce from "./ECommerce";
import Services from "./Services";
import FloatingCart from "@/Components/FloatingCart";

export default function ProductService(props) {
    const defaultTab = props.prop === "Services" ? 1 : 0;

    return (
        <>
            <Navbar />
            <FloatingCart  />
            <div className="w-full justify-center flex">
                <div className="w-11/12 md:w-10/12">
                    <div className="text-center md:mt-10 mt-6 md:mx-auto">
                        <h1 className="font-[raleway] font-bold text-2xl relative md:text-4xl ">
                            Products & Services
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-3 h-1 w-36 md:w-80 bg-red-600"></div>
                        </h1>
                    </div>
                    <div className="mt-8">
                        <Tabs
                            defaultIndex={defaultTab}
                            onSelect={(index) => handleSelect(index)}
                        >
                            <TabList className="flex justify-center font-[poppins] text-white border-gray-200">
                                <div className="flex bg-[#001932] rounded-lg p-0.5 md:p-1 text-sm md:text-base">
                                    <Link href="/product&service/eCommerce">
                                        <Tab
                                            className="px-12 py-1 md:px-24 md:py-2 font-medium cursor-pointer rounded-lg "
                                            selectedClassName="bg-[#EA1833]"
                                        >
                                            Products
                                        </Tab>
                                    </Link>
                                    <Link href="/product&service/services">
                                        <Tab
                                            className="px-12 py-1 md:px-24 md:py-2 font-medium cursor-pointer rounded-lg "
                                            selectedClassName="bg-[#EA1833]    "
                                        >
                                            Services
                                        </Tab>
                                    </Link>
                                </div>
                            </TabList>
                            <TabPanel>
                                <Head title="E-Commerce" />
                                <ECommerce props={props.products} />
                            </TabPanel>
                            <TabPanel>
                                <Head title="Services" />
                                <Services props={props.services} />
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
