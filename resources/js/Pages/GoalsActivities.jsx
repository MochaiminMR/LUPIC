import Accordion1 from "./Goals/Accordion1.jsx";
import Accordion2 from "./Goals/Accordion2.jsx";
import Accordion3 from "./Goals/Accordion3.jsx";
import Accordion4 from "./Goals/Accordion4.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import phase1 from "../Asset/phase1.png";
import phase2 from "../Asset/phase2.png";
import phase3 from "../Asset/phase3.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer.jsx";
import { Head } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import Year1 from "./Activity/Year1.jsx";

export default function GoalsActivities(props) {
    const { activities } = props;
    const swiperRef = useRef(null);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const phase = [
        {
            image:phase1,
            title: 'Phase I (2015-2021)',
            content: 'Building an educational network in the Yogyakarta region',
        },
        {
            image:phase2,
            title: 'Phase II-1 (2023-2026)',
            content: 'Developing a triangle online educational network with 3 participating universities connecting West (Bandung) Java - North Central (Semarang) Java - Northern Bali',
        },
        {
            image:phase3,
            title: 'Phase II-2 (2026-2029)',
            content: 'Developing a trans-island online educational network with representative universities of 32 Indonesian island areas to resolve inter-regional education imbalance.',
        },
    ];

    useEffect(() => {
        const swiper = swiperRef.current.swiper;
        if (swiper) {
            swiper.allowTouchMove = true;
    
            const handleSlideChange = () => {
                const currentIndex = swiper.realIndex;
                setTitle(phase[currentIndex]?.title || "");
                setContent(phase[currentIndex]?.content || "");
            };
            handleSlideChange();
            swiper.on("slideChange", handleSlideChange);
            
            return () => {
                swiper.off("slideChange", handleSlideChange);
            };
        }
    }, [phase]);

    
    return (
        <>
            <Head title="Goals & Activities" />
            <Navbar />

            <div className="flex  justify-center items-center w-full my-10">
                <div className="w-10/12 py-8 h-2/5 bg-gradient-to-r rounded-br-[78px] rounded-2xl md:flex text-white from-[#B90024] to-[rgb(253,21,84)]">
                    <div className="md:hidden mx-auto pt-10 w-1/2 flex items-center justify-center">
                    </div>
                    <div className="hidden md:w-1/2 m-8 md:px-12 md:flex md:flex-col justify-center items-start">
                        <h1
                            className="text-start text-lg md:text-3xl font-[raleway] font-bold mb-5 md:mb-8"
                            style={{ lineHeight: "1.2" }}
                        >
                            {title}
                        </h1>
                        <h1
                            className="text-start text-sm md:text-base font-[poppins] font-light mb-5"
                            style={{ lineHeight: "1.2" }}
                        >
                            {content}
                        </h1>
                    </div>
                    <div className="w-full md:w-1/2 flex items-center justify-center">
                        <Swiper
                            grabCursor={true}
                            centeredSlides={true}
                            spaceBetween={10}
                            loop={true}
                            slidesPerView={"auto"}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                clickable: true,
                                nextEl: ".custom-swiper-button-next",
                                prevEl: ".custom-swiper-button-prev",
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="swiper_container flex h-auto w-3/4"
                            ref={swiperRef}
                        >
                            {phase.map((phase, index) => (
                        <SwiperSlide key={index}>
                            <div className="h-full w-full relative ">
                            <img
                                src={phase.image}
                                className="mx-auto rounded-3xl object-cover object-center  "
                                alt="Left Image"
                            />
                            </div>
                        </SwiperSlide>
                        ))}
                        </Swiper>
                    </div>
                    <div className="md:hidden m-8 flex-col justify-center items-start">
                        <h1
                            className="text-start text-lg md:text-3xl font-[raleway] font-bold mb-5 md:mb-8"
                            style={{ lineHeight: "1.2" }}
                        >
                            {title}
                        </h1>
                        <h1
                            className="text-start text-sm md:text-base font-[poppins] font-light mb-5"
                            style={{ lineHeight: "1.2" }}
                        >
                            {content}
                        </h1>
                    </div>
                </div>
            </div>
            <div className="text-center mt-6 md:mx-auto">
                <h1 className="font-[raleway] text-slate-900 font-bold relative text-2xl md:text-4xl">
                    Our Goals
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2  mt-2 -mb-2 h-1 w-32 bg-red-600"></div>
                </h1>
            </div>
            <div className="w-10/12 mx-auto mt-8 md:mt-8">
                <Accordion1
                    number="01"
                    title="National University's Chemistry Education and Capacity Building Program"
                    content="Content for section 1 goes here."
                />
                <Accordion2
                    number="02"
                    title="Expansion of STEM-linked Education for the Scientific Competence of Prospective Teachers"
                    content="Content for section 2 goes here."
                />
                <Accordion3
                    number="03"
                    title="Retraining Program for Incumbent Science Teachers"
                    content="Content for section 1 goes here."
                />
                <Accordion4
                    number="04"
                    title="Social Contribution: Regional Network and Activities based on Appropriate Technology"
                    content="Content for section 2 goes here."
                />
            </div>
            <div className="flex-col w-full mb-10 justify-center items-center inline-flex ">
                <div className="flex-col w-10/12 text-left justify-start items-start">
                    <Year1 activities={props.activities} />
                </div>
            </div>

            <Footer />
        </>
    );
}
