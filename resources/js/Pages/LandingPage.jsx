import image from "../Asset/unsplash_EVgsAbL51Rk.png";
import illustration1 from "../Asset/reorganization.png";
import illustration2 from "../Asset/training.png";
import illustration3 from "../Asset/programs.png";
import goals from "../Asset/Goals.png";
import goals_horizontal from "../Asset/goals_horizontal.png";
import Img from "../Asset/instansi.png";
import bg_hero from "../Asset/bg_hero.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import background from "../Asset/opening_ceremony.jpg";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Head, Link } from "@inertiajs/react";
import Guest from "@/Layouts/GuestLayout";

export default function AboutUs(props) {
    const { news, activities } = props;

    const sortedNews = news.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );

    const latestNews = sortedNews.slice(0, 3);

    return (
        <>
            <Head title="Home" />
            <Navbar />

            <div className="relative mb-8">
                <img
                    src={bg_hero}
                    alt="Your Image"
                    className="w-full h-screen md:h-auto overflow-hidden object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#d4d7d9]"></div>
                <div className="bg-[#001932] absolute inset-0 opacity-60"></div>

                <div className="absolute inset-0 z-0 flex md:items-center md:justify-center md:mt-2 -pt-14">
                    <div className="flex-col my-6 md:my-12 justify-center items-center w-full gap-6 inline-flex ">
                        <Link
                            onClick={() => (window.location.href = "/about")}
                            className="flex justify-between items-center gap-2 bg-[#EA1833] text-white py-2 px-5 rounded-full text-xs md:text-sm font-[poppins] font-medium"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-4 h-4  justify-center items-center -mt-1"
                                transform="rotate(-45 0 0)"
                            >
                                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                            </svg>
                            In Collaboration With Great Univ
                        </Link>
                        <img
                            className="p-4 -mb-5 w-4/6 md:w-3/6 md:p-0 md:mb-0"
                            src={Img}
                            alt="LandingPageImg"
                        />
                        <h1
                            className="text-center font-[raleway] font-bold text-4xl md:text-7xl text-white mx-8 md:mx-72 "
                            style={{ lineHeight: "1.2" }}
                        >
                            Leading University Project for International
                            Cooperation
                        </h1>
                        <p className="text-center font-[poppins] font-medium text-sm md:text-xl text-white mx-8 md:mx-72 ">
                            Improving Chemistry/Science Education Program in
                            Java and Northern Bali Islands and Community Service
                        </p>
                        <button
                            onClick={() => (window.location.href = "/about")}
                            className="text-sm text-center bg-[#EA1833] font-bold text-white py-3 px-6 rounded-md"
                        >
                            Read More
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex-col justify-center items-center md:my-10 w-full gap-6 inline-flex">
                <Swiper
                    grabCursor={true}
                    centeredSlides={true}
                    spaceBetween={0}
                    loop={true}
                    slidesPerView={"auto"}
                    autoplay={{
                        delay: 6000,
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
                    className="swiper_container rounded-2xl w-10/12 h-auto "
                >
                    <SwiperSlide className="h-auto w-full relative ">
                        <img
                            src={background}
                            className="mx-auto rounded-3xl object-cover object-center h-auto w-full  "
                            alt="Left Image"
                        />
                    </SwiperSlide>
                    {/* <SwiperSlide className="h-auto w-full relative ">
                        <img
                            src={background}
                            className="mx-auto rounded-3xl object-cover object-center h-auto w-full  "
                            alt="Left Image"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="h-auto w-full relative ">
                        <img
                            src={background}
                            className="mx-auto rounded-3xl object-cover object-center h-auto w-full  "
                            alt="Left Image"
                        />
                    </SwiperSlide> */}
                </Swiper>
            </div>
            <div className="flex flex-col justify-center my-10 items-center gap-6">
                <div className="w-10/12 flex flex-col md:flex-row justify-between items-center ">
                    <h1 className="text-left text-slate-900 text-2xl md:text-4xl font-bold font-[raleway]">
                        Lupic Big Goals
                    </h1>
                    <Link
                        href="/activities"
                        className=" flex justify-between items-center gap-2 text-rose-600"
                    >
                        <h1 className=" text-sm md:text-lg font-medium font-['Poppins'] leading-[34px]">
                            Read More
                        </h1>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>
                </div>
                <img
                    src={goals_horizontal}
                    alt="goals"
                    className="w-fit px-4 hidden md:block w-10/12"
                />
                <img
                    src={goals}
                    alt="goals"
                    className="w-fit px-4 md:hidden w-10/12"
                />
            </div>
            <div className="flex justify-center items-center w-full mx-auto justify-center">
                <div className="flex flex-col md:flex-row w-10/12 items-center">
                    <div className="flex-col w-full md:w-1/2 md:mr-8">
                        <h1 className="flex-col md:mb-4 text-left text-rose-600 text-lg md:text-xl font-semibold font-[poppins] ">
                            Our Services
                        </h1>
                        <h1 className="flex-col mb-4 text-left text-slate-900 text-2xl md:text-4xl font-bold font-[raleway] ">
                            Main Activities
                        </h1>
                        <p className="mb-9 font-[poppins] text-sm font-medium">
                            Lupic's main activities revolve around cutting-edge
                            research and innovation. Our dedicated team is
                            committed to exploring uncharted territories,
                            conducting in-depth analyses, and developing
                            groundbreaking solutions.
                        </p>
                        <Link
                            href="/activities"
                            className="w-full justify-end flex items-center gap-2 text-rose-600"
                        >
                            <h1 className=" text-sm md:text-lg font-medium font-['Poppins']">
                                Read More
                            </h1>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Link>
                    </div>

                    <div className="flex flex-col my-10 gap-2 justify-center w-full md:w-1/2 text-center">
                        <a
                            href="#"
                            class="flex flex-col items-center bg-white rounded-lg shadow md:flex-row hover:bg-gray-100 text-start "
                        >
                            {/* <img
                                class="object-cover w-full rounded-t-lg h-48 md:h-auto md:w-36 md:rounded-none md:rounded-s-lg"
                                src={illustration1}
                                alt=""
                            /> */}
                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                    Re-organization of department of partner
                                </h5>
                                <p class="font-normal text-sm text-gray-700 line-clamp-2">
                                    Supporting the construction or
                                    re-organization of department/college of
                                    partner universities in developing countries
                                </p>
                            </div>
                        </a>
                        <a
                            href="#"
                            class="flex flex-col items-center bg-white rounded-lg shadow md:flex-row hover:bg-gray-100 text-start "
                        >
                            {/* <img
                                class="object-cover w-full rounded-t-lg h-48 md:h-auto md:w-36 md:rounded-none md:rounded-s-lg"
                                src={illustration2}
                                alt=""
                            /> */}
                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                    Training lecturers of partner
                                </h5>
                                <p class="font-normal text-sm text-gray-700 line-clamp-2">
                                    Training excellent lecturers/professors of
                                    partner universities through Global Korea
                                    Scholarship (GKS) Program
                                </p>
                            </div>
                        </a>
                        <a
                            href="#"
                            class="flex flex-col items-center bg-white rounded-lg shadow md:flex-row hover:bg-gray-100 text-start "
                        >
                            {/* <img
                                class="object-cover w-full rounded-t-lg h-48 md:h-auto md:w-36 md:rounded-none md:rounded-s-lg"
                                src={illustration3}
                                alt=""
                            /> */}
                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                    Operating programs
                                </h5>
                                <p class="font-normal text-sm text-gray-700 line-clamp-2">
                                    Operating various programs to contribute to
                                    local community developments
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex-col justify-center mb-6 md:my-12 items-center w-full gap-6 inline-flex">
                <div className="w-10/12 flex-col text-center text-slate-900 text-2xl md:text-4xl font-bold font-[raleway] ">
                    Latest News
                </div>
                <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-10 h-autojustify-start items-start inline-flex">
                    {latestNews.map((singleNews, index) => (
                        <Link
                            key={index}
                            className="rounded-xl flex-col md:gap-3.5 inline-flex"
                            href={`/news/${singleNews.slug}`}
                        >
                            <div className="h-52 rounded-xl overflow-hidden ">
                                <img
                                    className="h-full w-full object-cover object-center rounded-xl"
                                    src={`/storage/${singleNews.image}`}
                                />
                            </div>
                            <div className="mt-1 flex-col md:gap-1.5 flex">
                                <div className="text-rose-600 text-lg md:text-xl font-bold font-['Raleway'] line-clamp-2 ">
                                    {singleNews.title}
                                </div>
                                <div className="text-slate-900 text-sm font-normal font-['Poppins'] text-justify line-clamp-4">
                                    {singleNews.content}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="w-10/12 flex justify-start">
                    <Link
                        href="news"
                        className="flex gap-2 text-white  text-sm md:text-base bg-rose-600 px-8 py-4 rounded-md font-bold"
                    >
                        <h1>Read more news</h1>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}
