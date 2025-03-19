import { Head } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import dateFormat from "dateformat";

export default function NewsDetail(props) {
    console.log(props.news);
    const newsDetail = props.news;
    const publishedAt = dateFormat(newsDetail.created_at, "mmmm dS, yyyy");
    console.log(newsDetail.created_at, publishedAt);
    return (
        <>
            <Head title="News Detail" />
            <Navbar />
            <div className="mt-8 mb-8 flex flex-col items-center justify-center gap-2 w-full">
                <div className="w-10/12  text-slate-900 font-bold text-3xl font-[raleway]">
                    {newsDetail.title}
                    <div className="mt-2 h-1 w-1/2 md:w-64 bg-red-600"></div>
                </div>
                <div className="w-10/12 text-slate-500 text-sm  font-poppins leading-7">
                    Author: {newsDetail.author} | Published at: {publishedAt}
                </div>

                <img
                    className="mt-1 md:mt-2 aspect-[4/3] w-10/12 md:w-4/12 h-auto rounded-xl"
                    src={`/storage/${newsDetail.image}`}
                    alt="cover news"
                />

                <div className="mt-1 md:mt-4 flex flex-col items-center gap-6">
                    <div className="w-10/12 text-justify text-slate-900 font-poppins leading-6 text-base md:text-lg" dangerouslySetInnerHTML={{ __html: newsDetail.content }}>
                    </div>
                </div>

                <div className="mt-4 flex justify-center items-center w-full gap-8">
                    <div className="w-10/12">
                        <a
                            href="/news"
                            className="flex items-center gap-2 text-red-500 text-[20px] hover:text-red-700"
                        >
                            <span>&larr;</span>
                            <span className="font-poppins">Back</span>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
