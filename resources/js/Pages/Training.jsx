import Construction from "../Asset/Construction.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {
    CalendarIcon,
    ClockIcon,
    MapPinIcon,
} from "@heroicons/react/24/outline";
import { Head, Link } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Training(props) {
    const [searchValue, setSearchValue] = useState("");
    const [training, setTraining] = useState(props.trainings);
    const [posterModal, setPosterModal] = useState(false);
    const [poster, setPoster] = useState("");
    
    useEffect(() => {
        const search = training.filter((item) => {
            return item.title.toLowerCase().includes(searchValue.toLowerCase());
        });
        setTraining(search);
        if (searchValue === "") {
            setTraining(props.trainings);
        }
    }, [searchValue]);

    const handleSearch = (event) => {
        setSearchValue(event.target.value);
    };

    const handlePoster = (poster) => {
        setPosterModal(!posterModal);
        setPoster(poster);
    };

    const checkDate = (date) => {
        const today = new Date();
        const trainingDate = new Date(date);
        return today < trainingDate;
    };

    return (
        <>
            <Head title="Training" />
            <Navbar />
            <div className="w-full justify-center flex">
                <div className="w-10/12">
                    <div className="text-center md:mt-10 mt-6 md:mx-auto">
                        <h1 className="font-[raleway] font-bold text-2xl relative md:text-4xl ">
                            LUPIC Training
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-3 h-1 w-24 md:w-60  bg-red-600"></div>
                        </h1>
                    </div>
                    <div className="mt-10 md:w-auto flex content-center justify-center">
                        <div className="flex flex-grow justify-center items-center">
                            <div className="flex justify-center w-full md:w-3/5 items-center my-auto">
                                <input
                                    type="text"
                                    onChange={handleSearch}
                                    placeholder="Insert Training Title"
                                    className="border rounded-l focus:outline-none font-[poppins] text-sm md:text-base flex w-full bg-[#D7D4D4] border-[#D1D1D1]"
                                />
                                <div className="bg-[#EA1833] border border-[#EA1833] text-white px-4 py-[6px] md:py-2 rounded-r focus:outline-none">
                                    <span className="flex justify-center items-center">
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
                                </div>
                            </div>
                        </div>
                    </div>
                    {training.length === 0 && (
                        <div className="flex-col flex gap-5 justify-center items-center my-10">
                            <img
                                src={Construction}
                                className="h-48 md:h-72"
                                alt="Construction"
                            />
                            <div className="text-center">
                                <h1 className="font-[raleway] font-bold text-lg md:text-2xl">
                                    Training Not Found
                                </h1>
                                <p className="font-[poppins] text-[#828390] text-sm  md:text-base">
                                    We are sorry, the training you are looking
                                    for is not found
                                </p>
                            </div>
                        </div>
                    )}
                    {training.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-16 my-16"
                        >
                            <div className="relative flex w-auto items-end ">
                                {JSON.parse(item.image).map(
                                    (img, index) =>
                                        index === 0 && (
                                            <img
                                                key={img}
                                                className="md:max-w-60 w-52"
                                                src={`/storage/${img}`}
                                                alt="TrainingImg"
                                            />
                                        )
                                )}
                                <div className="absolute bg-[#EA1833] w-full rounded-lg">
                                    <div className="mt-2 pl-2 text-white font-[raleway] text-xs bg">
                                        Speaker :
                                    </div>
                                    <p className="text-sm font-bold text-white font-[raleway] bg-opacity-50 pl-2 pb-2 ">
                                        {item.speaker}
                                    </p>
                                </div>
                            </div>
                            <div className="flex-col text-center w-auto">
                                <div className="font-[raleway] text-[#828390] font-bold md:text-2xl">
                                    {item.theme}
                                </div>
                                <div className="font-[raleway] font-bold text-xl md:text-2xl">
                                    “{item.title}”
                                </div>
                                <div className="text-start font-[poppins] text-sm font-medium md:text-base my-4 line-clamp-4">
                                    {item.description}
                                </div>
                                <div className="flex gap-6 text-xs md:text-base ">
                                    <div className="flex items-center gap-2">
                                        <div className="bg-black text-white rounded-md md:px-1 px-0">
                                            <CalendarIcon
                                                className="h-6 w-6 p-1"
                                                strokeWidth={2}
                                            />
                                        </div>
                                        <div>{item.date}</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="bg-black text-white rounded-md md:px-1 px-0">
                                            <ClockIcon
                                                className="h-6 w-6 p-1"
                                                strokeWidth={2}
                                            />
                                        </div>
                                        <div>{item.time}</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="bg-black text-white rounded-md md:px-1 px-0">
                                            <MapPinIcon
                                                className="h-6 w-6 p-1"
                                                strokeWidth={2}
                                            />
                                        </div>
                                        <div>{item.location}</div>
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-6 text-sm md:text-base">
                                    <Link href={`/training/${item.id}`}>
                                        {checkDate(item.date) ? (
                                            <div className="bg-[#EA1833] hover:bg-red-700 py-2 px-20 md:px-24 font-[poppins] border-2 font-semibold text-white rounded-lg">
                                                Register
                                            </div>
                                        ):(
                                            <div className="bg-[#001932] hover:bg-blue-950 py-2 px-12 md:px-24 font-[poppins] border-2 font-semibold text-white rounded-lg">
                                                Detail Training
                                            </div>
                                        )}
                                    </Link>
                                    <div
                                        onClick={() => handlePoster(item.image)}
                                        className="cursor-pointer bg-white hover:bg-gray-100 py-2 px-6 font-[poppins] font-semibold border-2 border-[#EA1833] text-[#EA1833] rounded-lg"
                                    >
                                        Poster
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {posterModal && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
                    <div className="bg-white p-4 rounded-lg">
                        <div className="flex justify-end">
                            <div
                                onClick={handlePoster}
                                className="text-[#EA1833] font-[poppins] font-semibold cursor-pointer"
                            >
                                Close
                            </div>
                        </div>
                        <div className="flex justify-center">
                            {JSON.parse(poster).map(
                                (img, index) =>
                                    index === 0 && (
                                        <img
                                            key={img}
                                            src={`/storage/${img}`}
                                            className="h-[80vh] w-[80vw] object-contain"
                                            alt="Poster"
                                        />
                                    )
                            )}
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </>
    );
}
