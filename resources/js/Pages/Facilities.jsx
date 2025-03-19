import imageNews from "../Asset/unsplash_faEfWCdOKIg.png";

import image from "../Asset/unsplash_EVgsAbL51Rk.png";
import photo from "../Asset/unsplash_g8lk5Y35tCc.png";
import structure from "../Asset/Structure.png";
import Indonesia from "../Asset/Indonesia.png";
import Korea from "../Asset/South Korea.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Head } from "@inertiajs/react";

export default function Facilities(props) {
    console.log(props);
    const facilities = props.facilities;

    return (
        <>
            <Head title="Facilities"/>
            <Navbar />

            <div className="text-center mt-8 md:mx-auto md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
                <h1 className="font-[raleway] font-bold text-2xl md:text-4xl">
                    Our Facilities
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-20 mt-2 -mb-2 h-1 bg-red-600"></div>
                </h1>
            </div>

            <div className="flex flex-col items-center justify-center gap-2 w-full mb-16 mt-8">
                <div className="mt-2 md:grid md:grid-cols-4 flex flex-col gap-y-10 gap-x-16 justify-center w-10/12">
                    {/* Kartu 1 */}
                    {facilities.map((facility) => (
                        <div className="border shadow-md rounded-lg">
                            <div className="h-auto rounded-xl overflow-hidden ">
                                <img
                                    className="aspect 2/3 h-auto w-80 object-cover object-center rounded-xl mx-auto"
                                    src={`/storage/${facility.image}`}
                                />
                            </div>
                            <h2 className="px-4 text-lg md:text-2xl font-semibold my-4">
                                {facility.title}
                            </h2>
                            <p className="px-4 text-sm md:text-lg font-light mb-4 line-clamp-4">
                                {facility.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
