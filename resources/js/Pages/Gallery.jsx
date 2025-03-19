import { Link, Head } from "@inertiajs/react";
import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import slide_image_1 from "../Asset/unsplash_EVgsAbL51Rk.png";

export default function Gallery(props) {
    const swiperRef = useRef(null);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const { image } = props;
    const numSlides = image.length;
    const [description, setDescription] = useState("");

    useEffect(() => {
        const swiper = swiperRef.current.swiper;
        if (swiper) {
            swiper.allowTouchMove = true;

            const handleSlideChange = () => {
                const currentIndex = swiper.realIndex;
                setActiveSlideIndex(currentIndex);
                setDescription(image[currentIndex]?.description || "");
            };
            handleSlideChange();
            swiper.on("slideChange", handleSlideChange);

            return () => {
                swiper.off("slideChange", handleSlideChange);
            };
        }
    }, [image]);

    const handlePaginationClick = (index) => {
        setActiveSlideIndex(index);
        const swiper = swiperRef.current.swiper;
        if (swiper) {
            swiper.slideTo(index);
        }
    };

    const getLoopedIndex = (index) => {
        // Fungsi ini mengembalikan indeks yang looped
        if (index < 0) {
            return numSlides - 1;
        } else if (index >= numSlides) {
            return 0;
        }
        return index;
    };

    return (
        <>
            <Head title="Gallery" />
            <Navbar />
            <Head title="Gallery" />
            <div className="text-center md:mt-10 mt-6 md:mx-auto">
                <h1 className="font-[raleway] font-bold text-2xl relative md:text-4xl ">
                    Our Gallery
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-2 h-1 w-20 bg-red-600"></div>
                </h1>
            </div>
            <div className="flex relative pt-10">
                <button
                    onClick={() => changeImage("prev")}
                    className="w-16 h-16 hidden absolute left-24 top-1/2 transform -translate-y-1/2 text-white bg-gradient-to-r from-rose-600 via-red-600 to-rose-950 rounded-full md:flex items-center justify-center custom-swiper-button-prev"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="w-8 h-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                    </svg>
                </button>

                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    spaceBetween={0}
                    loop={true}
                    slidesPerView={1}
                    breakpoints={{
                        // For larger screens
                        768: {
                            slidesPerView: 2,
                            spaceBetween: -50,
                        },
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 125,
                        modifier: 5,
                        slideShadows: true,
                    }}
                    navigation={{
                        clickable: true,
                        nextEl: ".custom-swiper-button-next",
                        prevEl: ".custom-swiper-button-prev",
                    }}
                    pagination={{
                        clickable: true,
                        el: ".custom-pagination",
                    }}
                    modules={[Pagination, Navigation, EffectCoverflow]}
                    className="swiper_container w-4/5 md:w-3/4 "
                    ref={swiperRef}
                    onSlideChange={(swiper) => {
                        setActiveSlideIndex(swiper.realIndex);
                    }}
                >
                    {image.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="h-60 md:h-80 rounded-xl overflow-hidden ">
                                <img
                                    src={`/storage/${image.image}`}
                                    className="mx-auto h-full w-full object-cover object-center rounded-3xl"
                                    alt="Left Image"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button
                    onClick={() => changeImage("next")}
                    className="w-16 h-16 hidden absolute right-24 top-1/2 transform -translate-y-1/2 text-white bg-gradient-to-r from-rose-600 via-red-600 to-rose-950 rounded-full md:flex items-center justify-center custom-swiper-button-next"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="w-8 h-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </button>
            </div>
            <div className="flex justify-center my-4">
                <div className="flex items-center">
                    {[...Array(numSlides)].map((_, index) => (
                        <div
                            key={index}
                            className={`md:h-3 md:w-3 h-2 w-2 rounded-full mx-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 ${
                                activeSlideIndex === getLoopedIndex(index)
                                    ? "bg-red-600"
                                    : "bg-gray-400"
                            }`}
                            onClick={() => handlePaginationClick(index)}
                        ></div>
                    ))}
                </div>
            </div>

            <div className="md:text-center  md:mx-64 text-justify mx-10 my-10 font-[poppins] text-slate-900 font-medium text-sm md:text-base">
                <p>{description}</p>
            </div>
            <Footer />
        </>
    );
}
