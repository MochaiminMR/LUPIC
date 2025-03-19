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
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Swal from "sweetalert2";

export default function TrainingDetail(props) {
    const swiperRef = useRef(null);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const training = props.training;
    const image = JSON.parse(training.image);
    const numSlides = image.length;
    const [description, setDescription] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
    });
    const [submited, setSubmited] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const checkDate = () => {
        const today = new Date();
        const trainingDate = new Date(training.date);
        return today < trainingDate;
    };

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            ...formData,
        };
        console.log(data);
        axios
            .post(`/training/${training.id}`, data, training.id)
            .then((res) => {
                setSubmited(true);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const toWhatsapp = () => {
        window.open(training.whatsapp_link);
    };

    const mySectionRef = useRef(null);

    const handleScroll = () => {
        if (mySectionRef.current) {
            mySectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <Navbar />
            <Head title="Training Detail" />
            <div className="w-full justify-center flex">
                <div className="text-center md:mt-10 mt-6 md:mx-auto  ">
                    <h1 className="font-[raleway] font-bold text-2xl relative md:text-4xl w-fit">
                        {training.title}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-2 h-1 w-full bg-red-600"></div>
                    </h1>
                </div>
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
                                    src={`/storage/${image}`}
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
            {checkDate() && !submited && (
                <div className="w-full flex justify-center">
                    <button
                        className="py-2 px-4 rounded-full font-semibold text-white   bg-red-600"
                        onClick={handleScroll}
                    >
                        Register Training
                    </button>
                </div>
            )}
            <div className="md:text-center  md:mx-64 text-justify mx-10 mb-10 mt-4 font-[poppins] text-slate-900 font-medium text-sm md:text-base">
                <p>{training.description}</p>
            </div>

            {checkDate() &&
                (submited ? (
                    <div className="w-full justify-center flex md:p-12 mb-12">
                        <div className="shadow-[0_0px_50px_-10px_rgba(0,0,0,0.3)] p-8 w-4/5 md:w-3/5 rounded-lg">
                            <div className="font-[raleway] font-bold text-lg relative md:text-2xl text-center mb-2">
                                Registration Form
                            </div>
                            <CheckCircleIcon className="w-1/5  mx-auto text-[#0FA958] my-2" />
                            <div className="font-[poppins] font-medium text-xs relative md:text-base text-center md:px-16">
                                Pendaftaran kamu berhasil silahkan kiik untuk
                                masuk grup Whtasapp
                            </div>
                            <button
                                onClick={toWhatsapp}
                                className="bg-[#EA1833] text-white font-semibold text-sm py-3 rounded-md mt-8 w-full flex justify-center"
                            >
                                Join Whatsapp Group
                            </button>
                        </div>
                    </div>
                ) : (
                    <div
                        ref={mySectionRef}
                        className="w-full justify-center flex md:p-12 mb-12"
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="shadow-[0_0px_50px_-10px_rgba(0,0,0,0.3)] p-8 w-4/5 md:w-3/5 rounded-lg"
                        >
                            <div className="font-[raleway] font-bold text-lg relative md:text-2xl text-center">
                                Registration Form
                            </div>
                            <div className="font-[poppins]">
                                <div>
                                    <label className="block mt-4 text-xs md:text-sm font-semibold text-slate-900 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-[#D7D4D4] rounded-md mt-1 py-3 border-none text-xs md:text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block mt-4 text-xs md:text-sm font-semibold text-slate-900 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        required
                                        onChange={handleChange}
                                        className="w-full bg-[#D7D4D4] rounded-md mt-1 py-3 border-none text-xs md:text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block mt-4 text-xs md:text-sm font-semibold text-slate-900 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="number"
                                        name="phone"
                                        placeholder="Your Phone Number"
                                        value={formData.phone}
                                        required
                                        onChange={handleChange}
                                        className="w-full bg-[#D7D4D4] rounded-md mt-1 py-3 border-none text-xs md:text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block mt-4 text-xs md:text-sm font-semibold text-slate-900 mb-2">
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        name="city"
                                        placeholder="Your City"
                                        value={formData.city}
                                        required
                                        onChange={handleChange}
                                        className="w-full bg-[#D7D4D4] rounded-md mt-1 py-3 border-none text-xs md:text-sm"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-[#EA1833] text-white font-semibold text-xs md:text-sm py-3 rounded-md mt-8 w-full flex justify-center"
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                ))}
            <Footer />
        </>
    );
}
