import imageNews from "../Asset/unsplash_faEfWCdOKIg.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import React from "react";

import { Head, Link } from "@inertiajs/react";

export default function News(props) {
    let { news } = props;

    let anews = news
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .slice(1);
    console.log(news);
    return (
        <>
            <Head title="News" />
            <Navbar />
            <div className="flex-col justify-center mt-8 md:mt-14 items-center w-full gap-6 inline-flex">
                <div className="w-10/12 mx-8 flex-col justify-start items-center gap-6 inline-flex">
                    <div className="p-8 md:p-20 bg-gradient-to-bl from-blue-700 to-slate-900 rounded-tl-[13px] rounded-tr-[78px] rounded-bl-[75.6px] rounded-br-[13px] shadow justify-start items-center gap-lg inline-flex w-full mx-auto">
                        <div className="flex flex-col md:flex-row justify-between w-full p-2">
                            <div className="md:w-8/12 flex-col justify-start items-start gap-2 inline-flex">
                                <div className="text-white text-4xl font-bold font-[raleway]">
                                    LUPIC News
                                </div>
                                <div className="text-white text-base md:text-xl font-normal font-[raleway] pr-8">
                                    Stay tuned for the latest updates,
                                    breakthroughs, and stories from the
                                    forefront of our research endeavors.
                                </div>
                            </div>

                            <div className="mt-4 md:w-4/12 flex gap-4 content-center justify-center">
                                <form className="flex flex-grow items-center">
                                    <div className="flex w-full items-center my-auto">
                                        <input
                                            type="text"
                                            placeholder="Insert News Title"
                                            className="border border-white rounded-l focus:outline-none font-[poppins] flex w-full"
                                        />
                                        <button
                                            type="submit"
                                            className="bg-[#EA1833] border border-[#EA1833] text-white px-4 py-2 rounded-r hover:bg-[#ea1834e2] focus:outline-none"
                                        >
                                            <span className="flex justify-center items-center">
                                                {" "}
                                                {/* Updated this line */}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M2 12h5v2H2zm16.17 1.75c.52-.79.83-1.73.83-2.75c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5c1.02 0 1.96-.31 2.76-.83L20.59 19L22 17.59l-3.83-3.84zM14 14c-1.65 0-3-1.35-3-3s1.35-3 3-3s3 1.35 3 3s-1.35 3-3 3zM2 7h5v2H2zm0 10h10v2H2z"
                                                    />
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-4 md:mt-10 flex flex-col items-center justify-center gap-2 w-full">
                <div className="w-10/12 text-left text-slate-900 font-bold text-3xl md:text-5xl font-[raleway] ">
                    Latest News
                    {/* Baru UI */}
                    <div className="mt-2 h-1 w-32 bg-red-600"></div>
                </div>

                <div className="w-10/12 flex flex-col md:flex-row gap-4 mt-2 md:mt-4">
                    <img
                        src={`/storage/${news[0].image}`}
                        alt="latestimagenews"
                        className="aspect-[16/9] w-[600px] h-auto rounded-xl "
                    />

                    <div className="flex flex-col">
                        <div className="text-red-700 font-bold font-raleway text-2xl md:text-4xl hover:text-red-900 ">
                            <a href={`/news/${news[0].slug}`}>
                                {news[0].title}
                            </a>
                        </div>
                        <div className="font-['Poppins'] text-base text-justify mt-2 line-clamp-[7]" dangerouslySetInnerHTML={{ __html: news[0].content }}>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-4 mb-8 md:mt-8 flex flex-col items-center justify-center gap-2 w-full">
                <div className="w-10/12 text-left text-slate-900 font-bold text-3xl md:text-5xl font-[raleway]">
                    Another News
                    {/* Baru UI */}
                    <div className="mt-2 h-1 w-32 bg-red-600"></div>
                </div>
                <div className="w-10/12 gap-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-2 md:mt-4">
                        {anews.map((singleNews, id) => (
                            <Link
                                key={id}
                                className="rounded-xl flex-col md:gap-3.5 inline-flex"
                                href={`/news/${singleNews.slug}`}
                            >
                                <div className="h-60 rounded-xl overflow-hidden ">
                                    <img
                                        className="h-full w-full object-cover object-center rounded-xl"
                                        src={`/storage/${singleNews.image}`}
                                    />
                                </div>
                                <div className="mt-1 flex-col md:gap-1.5 flex">
                                    <div className="text-rose-600 text-lg md:text-xl font-bold font-['Raleway'] line-clamp-2 ">
                                        {singleNews.title}
                                    </div>
                                    <div className="text-slate-900 text-sm font-normal font-['Poppins'] text-justify line-clamp-4" dangerouslySetInnerHTML={{ __html: singleNews.content }}>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
