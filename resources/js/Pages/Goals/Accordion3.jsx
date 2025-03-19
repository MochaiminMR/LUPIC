import { useState } from "react";

const Accordion = ({ number, title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const dynamicBgColor = number % 2 === 0 ? "bg-[#001932]" : "bg-[#EA1833]";
    const iconArrow = isOpen ? (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 1024 1024"
        >
            <path
                fill="white"
                d="M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8l316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z"
            />
        </svg>
    ) : (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 1024 1024"
        >
            <path
                fill="white"
                d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"
            />
        </svg>
    );
    const [showAchievements1, setShowAchievements1] = useState(false);
    const [showAchievements2, setShowAchievements2] = useState(false);
    const [showAchievements3, setShowAchievements3] = useState(false);
    const [selectedYear1, setSelectedYear1] = useState(null);
    const [selectedYear2, setSelectedYear2] = useState(null);
    const [selectedYear3, setSelectedYear3] = useState(null);

    const toggleAchievements1 = (year) => {
        setShowAchievements1(true);
        setSelectedYear1(year);
    };
    const toggleAchievements2 = (year) => {
        setShowAchievements2(true);
        setSelectedYear2(year);
    };
    const toggleAchievements3 = (year) => {
        setShowAchievements3(true);
        setSelectedYear3(year);
    };

    const percentages1 = {
        1: 30,
        2: 50,
        3: 70,
        4: 80,
        5: 90,
        6: 100,
    };
    const percentages2 = {
        1: 10,
        2: 30,
        3: 50,
        4: 70,
        5: 80,
        6: 100,
    };
    const percentages3 = {
        1: 10,
        2: 30,
        3: 50,
        4: 70,
        5: 80,
        6: 100,
    };

    const dynamicGradientColor =
        number % 2 === 0
            ? "from-[#001932] to-[#1322a8]"
            : "from-rose-600 via-red-600 to-rose-950";

    return (
        <div className="flex-col items-center md:mb-10 mb-6 relative">
            <button
                className={`absolute bg-black md:w-24 md:h-24 md:transform md:-translate-y-2 w-14 h-14 text-white bg-gradient-to-r ${dynamicGradientColor} rounded-full flex items-center justify-center`}
            >
                <h2 className="font-[montserrat] md:text-5xl font-bold leading-[60px] text-xl text-[#F6F6F6]">
                    {number}
                </h2>
            </button>
            <div
                className={`flex md:h-20 w-full h-14 justify-between items-center ${dynamicBgColor} md:pr-16 md:pl-44 pl-16 pr-2 cursor-pointer rounded-[108px]`}
                onClick={toggleAccordion}
            >
                <h3 className="md:text-xl text-[poppins] md:leading-[36px] text-xs  text-white font-semibold">
                    {title}
                </h3>
                <span>{iconArrow}</span>
            </div>

            {isOpen && (
                <div class="relative w-11/12 mx-auto ">
                    <div class="px-4 sm:px-6 lg:px-8">
                        <div class="mt-8 flex flex-col">
                            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                    <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                        <table class="min-w-full divide-y divide-gray-300">
                                            <thead class="bg-red-300 mx-10">
                                                <th className="p-4 text-start flex items-center justify-between">
                                                <h className="w-full font-[poppins] text-xs md:text-base font-semibold">
                                                3-1. Improvement of personal Competence in majoring field	
                                                </h>
                                                <div className="gap-4 md:flex w-11/12  hidden justify-end items-center">
                                                        {[1, 2, 3, 4, 5, 6].map(
                                                            (year) => (
                                                                <button
                                                                    key={year}
                                                                    onClick={() =>
                                                                        toggleAchievements1(
                                                                            year
                                                                        )
                                                                    }
                                                                    className="text-xs md:text-base font-semibold border border-white px-2 rounded-full hover:border-[#EA1833]  focus:bg-[#EA1833] focus:border-[#EA1833] focus:text-white"
                                                                >
                                                                    {year} Year
                                                                </button>
                                                            )
                                                        )}
                                                    </div>
                                                    <div className="gap-4 flex w-11/12 justify-end items-center md:hidden">
                                                        <select
                                                            onChange={(e) =>
                                                                toggleAchievements1(
                                                                    parseInt(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                )
                                                            }
                                                            className="text-xs border-none font-semibold px-2 rounded-full  focus:outline-none bg-[#EA1833] text-white"
                                                        >
                                                            <option value="">
                                                                Select Year
                                                            </option>
                                                            {[
                                                                1, 2, 3, 4, 5,
                                                                6,
                                                            ].map((year) => (
                                                                <option
                                                                    key={year}
                                                                    value={year}
                                                                >
                                                                    {year} Year
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </th>
                                            </thead>
                                            <div className="flex justify-between items-center">
                                            <tbody class="divide-y divide-gray-200 bg-white">
                                            <tr>
                                                        <div
                                                            className={`md:hidden p-4 font-[poppins] flex justify-between items-center ${
                                                                showAchievements1
                                                                    ? ""
                                                                    : "hidden"
                                                            }`}
                                                        >
                                                            <h1 className="text-xs font-bold item-start flex">
                                                                Achievements (%)
                                                                / yr{" "}
                                                                {selectedYear1 &&
                                                                    `(${selectedYear1})`}
                                                            </h1>
                                                            <h1 className="text-xs font-bold text-[#EA1833]">
                                                                {selectedYear1 &&
                                                                    percentages1[
                                                                        selectedYear1
                                                                    ]}
                                                                %
                                                            </h1>
                                                        </div>
                                                    </tr>
                                                <tr>
                                                    <h1 className="p-4 w-full font-[poppins] text-xs md:text-base font-medium">
                                                    3-1-1. Joint development of competency evaluation plan for science teachers
                                                    </h1>
                                                </tr>
                                                <tr>
                                                    <h1 className="p-4 w-full font-[poppins] text-xs md:text-base font-medium">
                                                    3-1-2. Identifying local science teacher levels and complementary factors
                                                    </h1>
                                                </tr>
                                                <tr>
                                                    <h1 className="p-4 w-full font-[poppins] text-xs md:text-base font-medium">
                                                    3-1-3. Support for supplementary lectures on biology, chemistry, physics, and mathematics and guidance on teaching method (once a year) 
                                                    </h1>
                                                </tr>
                                                <tr>
                                                    <h1 className="p-4 w-full font-[poppins] text-xs md:text-base font-medium">
                                                    3-1-4. Support for lectures in the local language with SDU faculty
                                                    </h1>
                                                </tr>
                                            </tbody>
                                            <div
                                                    className={`hidden p-4 font-[poppins] md:flex md:flex-col items-center ${
                                                        showAchievements1
                                                            ? ""
                                                            : "hidden"
                                                    }`}
                                                >
                                                    <h1 className="text-lg md:text-xl font-bold item-start flex flex-col mb-4">
                                                        Achievements (%) / yr{" "}
                                                        {selectedYear1 &&
                                                            `(${selectedYear1})`}
                                                    </h1>
                                                    <h1 className="text-xl md:text-3xl font-bold text-[#EA1833]">
                                                        {selectedYear1 &&
                                                            percentages1[
                                                                selectedYear1
                                                            ]}
                                                        %
                                                    </h1>
                                                </div>
                                            </div>
                                            <thead class="bg-red-300 mx-10">
                                                <th className="p-4 text-start flex items-center justify-between">
                                                <h className="w-full font-[poppins] text-xs md:text-base font-semibold">
                                                3-2. Development of Integrated Science Education Capabilities	
                                                </h>
                                                <div className="gap-4 md:flex w-11/12  hidden justify-end items-center">
                                                        {[1, 2, 3, 4, 5, 6].map(
                                                            (year) => (
                                                                <button
                                                                    key={year}
                                                                    onClick={() =>
                                                                        toggleAchievements2(
                                                                            year
                                                                        )
                                                                    }
                                                                    className="text-xs md:text-base font-semibold border border-white px-2 rounded-full hover:border-[#EA1833]  focus:bg-[#EA1833] focus:border-[#EA1833] focus:text-white"
                                                                >
                                                                    {year} Year
                                                                </button>
                                                            )
                                                        )}
                                                    </div>
                                                    <div className="gap-4 flex w-11/12 justify-end items-center md:hidden">
                                                        <select
                                                            onChange={(e) =>
                                                                toggleAchievements2(
                                                                    parseInt(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                )
                                                            }
                                                            className="text-xs border-none font-semibold px-2 rounded-full  focus:outline-none bg-[#EA1833] text-white"
                                                        >
                                                            <option value="">
                                                                Select Year
                                                            </option>
                                                            {[
                                                                1, 2, 3, 4, 5,
                                                                6,
                                                            ].map((year) => (
                                                                <option
                                                                    key={year}
                                                                    value={year}
                                                                >
                                                                    {year} Year
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </th>
                                            </thead>
                                            <div className="flex justify-between items-center">
                                            <tbody class="divide-y divide-gray-200 bg-white">
                                            <tr>
                                                        <div
                                                            className={`md:hidden p-4 font-[poppins] flex justify-between items-center ${
                                                                showAchievements2
                                                                    ? ""
                                                                    : "hidden"
                                                            }`}
                                                        >
                                                            <h1 className="text-xs font-bold item-start flex">
                                                                Achievements (%)
                                                                / yr{" "}
                                                                {selectedYear2 &&
                                                                    `(${selectedYear2})`}
                                                            </h1>
                                                            <h1 className="text-xs font-bold text-[#EA1833]">
                                                                {selectedYear2 &&
                                                                    percentages2[
                                                                        selectedYear2
                                                                    ]}
                                                                %
                                                            </h1>
                                                        </div>
                                                    </tr>
                                                <tr>
                                                    <h1 className="p-4 w-full font-[poppins] text-xs md:text-base font-medium">
                                                    3-2-1. Support for STEAM-based scientific activities in local middle and high schools 
                                                    </h1>
                                                </tr>
                                                <tr>
                                                    <h1 className="p-4 w-full font-[poppins] text-xs md:text-base font-medium">
                                                    3-2-2. Holding a science Olympiad for high school students and encouraging them to participate (total 3-times) 
                                                    </h1>
                                                </tr>
                                                <tr>
                                                    <h1 className="p-4 w-full font-[poppins] text-xs md:text-base font-medium">
                                                    3-2-3. Support for design and lectures on 3D printing and local environmental problem-solving project
                                                    </h1>
                                                </tr>
                                            </tbody>
                                            <div
                                                    className={`hidden p-4 font-[poppins] md:flex md:flex-col items-center ${
                                                        showAchievements2
                                                            ? ""
                                                            : "hidden"
                                                    }`}
                                                >
                                                    <h1 className="text-lg md:text-xl font-bold item-start flex flex-col mb-4">
                                                        Achievements (%) / yr{" "}
                                                        {selectedYear2 &&
                                                            `(${selectedYear2})`}
                                                    </h1>
                                                    <h1 className="text-xl md:text-3xl font-bold text-[#EA1833]">
                                                        {selectedYear2 &&
                                                            percentages2[
                                                                selectedYear2
                                                            ]}
                                                        %
                                                    </h1>
                                                </div>
                                            </div>
                                            <thead class="bg-red-300 mx-10">
                                                <th className="p-4 text-start flex items-center justify-between">
                                                <h className="w-full font-[poppins] text-xs md:text-base font-semibold">
                                                3-3. Operation of National Science Teacher Network	
                                                </h>
                                                <div className="gap-4 md:flex w-11/12  hidden justify-end items-center">
                                                        {[1, 2, 3, 4, 5, 6].map(
                                                            (year) => (
                                                                <button
                                                                    key={year}
                                                                    onClick={() =>
                                                                        toggleAchievements3(
                                                                            year
                                                                        )
                                                                    }
                                                                    className="text-xs md:text-base font-semibold border border-white px-2 rounded-full hover:border-[#EA1833]  focus:bg-[#EA1833] focus:border-[#EA1833] focus:text-white"
                                                                >
                                                                    {year} Year
                                                                </button>
                                                            )
                                                        )}
                                                    </div>
                                                    <div className="gap-4 flex w-11/12 justify-end items-center md:hidden">
                                                        <select
                                                            onChange={(e) =>
                                                                toggleAchievements3(
                                                                    parseInt(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                )
                                                            }
                                                            className="text-xs border-none font-semibold px-2 rounded-full  focus:outline-none bg-[#EA1833] text-white"
                                                        >
                                                            <option value="">
                                                                Select Year
                                                            </option>
                                                            {[
                                                                1, 2, 3, 4, 5,
                                                                6,
                                                            ].map((year) => (
                                                                <option
                                                                    key={year}
                                                                    value={year}
                                                                >
                                                                    {year} Year
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </th>
                                            </thead>
                                            <div className="flex justify-between items-center">
                                            <tbody class="divide-y divide-gray-200 bg-white">
                                            <tr>
                                                        <div
                                                            className={`md:hidden p-4 font-[poppins] flex justify-between items-center ${
                                                                showAchievements3
                                                                    ? ""
                                                                    : "hidden"
                                                            }`}
                                                        >
                                                            <h1 className="text-xs font-bold item-start flex">
                                                                Achievements (%)
                                                                / yr{" "}
                                                                {selectedYear3 &&
                                                                    `(${selectedYear3})`}
                                                            </h1>
                                                            <h1 className="text-xs font-bold text-[#EA1833]">
                                                                {selectedYear3 &&
                                                                    percentages3[
                                                                        selectedYear3
                                                                    ]}
                                                                %
                                                            </h1>
                                                        </div>
                                                    </tr>
                                                <tr>
                                                    <h1 className="p-4 w-full font-[poppins] text-xs md:text-base font-medium">
                                                    3-3-1. Securing a regular contact network for the establishment of a national network, including island areas (UNET) (the 3rd year) 
                                                    </h1>
                                                </tr>
                                                <tr>
                                                    <h1 className="p-4 w-full font-[poppins] text-xs md:text-base font-medium">
                                                    3-3-2. Financial support for online design-production program and Open-Lab installation (the 4th ~ 6th years)
                                                    </h1>
                                                </tr>
                                            </tbody>
                                            <div
                                                    className={`hidden p-4 font-[poppins] md:flex md:flex-col items-center ${
                                                        showAchievements3
                                                            ? ""
                                                            : "hidden"
                                                    }`}
                                                >
                                                    <h1 className="text-lg md:text-xl font-bold item-start flex flex-col mb-4">
                                                        Achievements (%) / yr{" "}
                                                        {selectedYear3 &&
                                                            `(${selectedYear3})`}
                                                    </h1>
                                                    <h1 className="text-xl md:text-3xl font-bold text-[#EA1833]">
                                                        {selectedYear3 &&
                                                            percentages3[
                                                                selectedYear3
                                                            ]}
                                                        %
                                                    </h1>
                                                </div>
                                            </div>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Color
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Category
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Price
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th
                                        scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td class="px-6 py-4">Silver</td>
                                    <td class="px-6 py-4">Laptop</td>
                                    <td class="px-6 py-4">$2999</td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th
                                        scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        Microsoft Surface Pro
                                    </th>
                                    <td class="px-6 py-4">White</td>
                                    <td class="px-6 py-4">Laptop PC</td>
                                    <td class="px-6 py-4">$1999</td>
                                </tr>
                                <tr class="bg-white dark:bg-gray-800">
                                    <th
                                        scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        Magic Mouse 2
                                    </th>
                                    <td class="px-6 py-4">Black</td>
                                    <td class="px-6 py-4">Accessories</td>
                                    <td class="px-6 py-4">$99</td>
                                </tr>
                            </tbody>
                        </table> */}
                </div>
            )}
        </div>
    );
};

export default Accordion;
