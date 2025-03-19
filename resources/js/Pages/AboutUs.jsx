import image from "../Asset/unsplash_EVgsAbL51Rk.png";
import photo from "../Asset/Prof. Wonkoo Lee.jpg";
import Indonesia from "../Asset/Indonesia.png";
import partner from "../Asset/partner.png";
import sogang from "../Asset/Sogang.png";
import Korea from "../Asset/South Korea.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import upi from "../Asset/LogoUPI.jpg";
import unnes from "../Asset/UNNES.png";
import undiksha from "../Asset/UNIDIKSHA.png";
import UPI from "./Partner/UPI.jsx";
import UNNES from "./Partner/UNNES.jsx";
import UNDIKSHA from "./Partner/UNIDIKSHA.jsx";
import { Head, Link } from "@inertiajs/react";

const AboutUs = () => {
    return (
        <>
            <Head title="About Us" />
            <Navbar />

            <div className="flex-col justify-center mt-5 md:my-10 items-center w-full gap-6 inline-flex">
                <div
                    style={{ lineHeight: "1.2" }}
                    className="w-10/12 flex-col text-left text-slate-900 text-2xl md:text-4xl font-bold font-[raleway] leading-[52.14px] relative"
                >
                    Greetings from coordinator LUPIC
                    <div className="absolute bottom-0 md:left-16 left-8 top-13 md:top-14   transform -translate-x-1/2 -mb-2 h-1 w-16 md:w-32 bg-red-600"></div>
                </div>
                <div className="w-full sm:w-10/12 h-[auto] sm:h-[547px] flex-col justify-start -mb-5 items-center gap-6 inline-flex">
                    <div className="md:w-[1154px] md:h-[463px] w-10/12 h-[463px] justify-center relative">
                        <div className="w-[120px] h-[60px] top-[370px] md:w-[329px] md:h-[171px] left-[-10px] md:top-[292px] absolute bg-gradient-to-r from-rose-600 via-red-600 to-rose-950 rounded-bl-[32px]" />
                        <div className="w-[120px] h-[120px] left-[200px] top-[-10px]  md:w-[179px] md:h-[194.30px] md:left-[975px] md:top-[50px] absolute bg-rose-600 rounded-tr-[32px]" />
                        <div className="w-full h-[420px] pt-6 mx-auto md:w-[905px] md:h-[317px] md:p-[42.40px] md:left-[142px] md:top-[102px] absolute flex-none md:flex-none md:inline-flex bg-gradient-to-bl from-blue-700 to-slate-900 rounded-tl-[14px] rounded-tr-[78px] rounded-bl-[14px] rounded-br-[14px] shadow justify-start items-center gap-[28.27px] ">
                            <img
                                className="md:w-96 md:h-64 object-cover mx-auto justify-center w-48 rounded-[7px]"
                                src={photo}
                            />
                            <div className=" flex-col justify-start items-start gap-[28.27px] inline-flex">
                                <div className="md:hidden px-5 pt-2 flex-col justify-start items-start flex">
                                    <div className="text-white text-base font-bold font-[raleway]">
                                        Prof. Wonkoo Lee
                                    </div>
                                    <div className=" text-white text-xs font-normal font-[raleway] leading-tight">
                                        Department of Chemistry Sogang
                                        University
                                    </div>
                                    <div className=" text-white text-xs font-normal font-[raleway] leading-tight">
                                        Seoul, Korea
                                    </div>
                                </div>
                                <div className="md:hidden text-white text-sm px-5 -mt-5 text-justify font-[raleway]">
                                    I am pleased to welcome you as the Director
                                    of the LUPIC program. It is with great
                                    excitement that I announce the launch of our
                                    new website, serving as a platform for
                                    collaboration and communication between
                                    Sogang University and Indonesian
                                    universities
                                </div>
                                <div className="hidden md:flex-col justify-start items-start  md:inline-flex">
                                    <div className="text-white text-lg font-semibold mb-4 font-[raleway]">
                                        I am pleased to welcome you as the
                                        Director of the LUPIC program. It is
                                        with great excitement that I announce
                                        the launch of our new website, serving
                                        as a platform for collaboration and
                                        communication between Sogang University
                                        and Indonesian universities
                                    </div>
                                    <div className="hidden flex-col justify-start items-start md:flex">
                                        <div className="text-white mb-1 text-xl font-bold font-[raleway] leading-[30.15px]">
                                            Prof. Wonkoo Lee
                                        </div>
                                        <div className="text-white text-sm font-normal font-[raleway] leading-tight">
                                            Department of Chemistry, Sogang
                                            University
                                        </div>
                                        <div className="text-white text-sm font-normal font-[raleway] leading-tight">
                                            Seoul, Korea
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-col justify-center items-center w-full mt-10 inline-flex">
                    <div className="w-10/12 flex-col text-left text-slate-900 text-2xl md:text-4xl font-bold font-[raleway] leading-[52.14px] relative mb-8">
                        Short History
                        <div className="absolute bottom-0 md:left-16 left-8 top-11 md:top-14 transform -translate-x-1/2 -mb-2 h-1 w-16 md:w-32 bg-red-600"></div>
                    </div>
                    <div className="w-10/12 text-justify text-slate-900 text-sm md:text-lg font-normal font-[poppins]">
                        Leading University for International Cooperation (LUPIC)
                        program began in 2012. The program aims to assist
                        universities in developing countries to create,
                        reorganize and systematically train human resources
                        using the excellent resources and experiences from
                        Korean universities. Through this program with the
                        support from the Ministry of Education (MOE) of Korea,
                        more than 41 universities in 18 developing countries had
                        the opportunities to strengthen their educational
                        capabilities and develop their communities (as of 2023).
                    </div>
                </div>
                <div className="w-10/12 text-justify text-slate-900 text-sm md:text-lg font-normal font-[poppins] mb-6 ">
                    <p className="mb-4">
                        The LUPIC program, supported by the Korean government,
                        aims to assist universities in developing countries by
                        fostering academic exchange, promoting development, and
                        encouraging international collaboration. This website
                        will play a crucial role in achieving our goals,
                        enhancing cooperation between Korean and Indonesian
                        universities.
                    </p>
                    <p className="mb-4">
                        Through the new website, you can easily find information
                        about our program, participate in various collaborative
                        projects and activities, and engage in effective
                        communication. We look forward to the continued and
                        strengthened collaboration between Sogang University and
                        Indonesian universities.
                    </p>
                    <p className="mb-4">Thank you.</p>
                    <div>
                        <p>Prof. Wonkoo Lee</p>
                        <p>Department of Chemistry Sogang University</p>
                        <p>Seoul, Korea</p>
                    </div>
                </div>
            </div>
            <div className="flex-col justify-center items-center w-full -mt-32 mb-10 gap-6 inline-flex">
                <div
                    style={{ lineHeight: "1.2" }}
                    className="w-10/12 flex-col text-left text-slate-900 text-2xl md:text-4xl font-bold font-[raleway] leading-[52.14px] relative"
                >
                    Sogang University
                    <div className="absolute bottom-0 md:left-16 left-8 top-13 md:top-14   transform -translate-x-1/2 -mb-2 h-1 w-16 md:w-32 bg-red-600"></div>
                </div>
                <img src={sogang} alt="sogang" />
                <div className="w-10/12 text-justify text-slate-900 text-sm md:text-lg font-normal font-[poppins] -mb-6 md:mb-0">
                    <p className="mb-4">
                        Sogang University aims the education of the whole person
                        with love and faith, respect the values on the sense of
                        human dignity and encourage to pursuit and seek for
                        learning with the sincere quest for truth. Through this
                        education, educate the talents who will devote their
                        lives to the development of a humanistic culture and
                        community.
                    </p>
                    <p className="mb-4">
                        Located in the heart of Seoul, Sogang University was
                        founded by the Society of Jesus in 1960. Since its
                        foundation, Sogang has grown onto one of the most
                        prestigious universities in Korea. Sogang seeks
                        scholastic excellence by providing world-class education
                        through its outstanding faculty, state-of-the art
                        research, quality educational programs, and rigorous
                        academic management system based on the Jesuit
                        educational philosophy.
                    </p>
                    <p className="mb-4">
                        There are 30 departments within 8 colleges in the
                        undergraduate program with 8,000 students and 408
                        full-time, tenure-track professors. There are 12
                        graduate schools including professional and special
                        graduate schools with a student enrollment of 4,000 in
                        master's and doctoral programs. Approximately 5,100
                        foreign students study annually at Sogang University in
                        various academic programs.
                    </p>
                    <p className="mb-4">
                        Recognized for its high standard of education, Sogang
                        University boasts the highest employment rate with major
                        corporations in Korea with over 40,000 alumni working in
                        influential positions in various areas of society.
                    </p>
                    <p className="mb-4">
                        Sogang particularly strives to offer the best
                        educational environment for our domestic and
                        international students in order to make their stay at
                        Sogang as seamless and memorable as possible.
                    </p>
                </div>
            </div>
            <div className="flex-col justify-center items-center w-full -mt-32 mb-10 gap-6 inline-flex">
                <div
                    style={{ lineHeight: "1.2" }}
                    className="w-10/12 flex-col text-left text-slate-900 text-2xl md:text-4xl font-bold font-[raleway] leading-[52.14px] relative"
                >
                    Partner University
                    <div className="absolute bottom-0 md:left-16 left-8 top-13 md:top-14   transform -translate-x-1/2 -mb-2 h-1 w-16 md:w-32 bg-red-600"></div>
                </div>
                <div className="w-full sm:w-10/12 h-[auto] sm:h-[273.90px] flex-col justify-center mt-14 mb-8 items-center gap-6 inline-flex">
                    <div className="w-fit px-8">
                        <img src={partner} alt="partner" />
                    </div>
                </div>
                <div className="w-10/12 mx-auto mt-8 md:mt-8">
                    <UPI
                        image={upi}
                        number="01"
                        title="UNIVERSITAS PENDIDIKAN INDONESIA"
                        content="Content for section 1 goes here."
                    />
                    <UNNES
                        image={unnes}
                        number="01"
                        title="UNIVERSITAS NEGERI SEMARANG"
                        content="Content for section 2 goes here."
                    />
                    <UNDIKSHA
                        image={undiksha}
                        number="01"
                        title="UNIVERSITAS PENDIDIKAN GANESHA"
                        content="Content for section 1 goes here."
                    />
                </div>
            </div>
            <div className="flex-col justify-center mb-20 items-center w-full gap-6 inline-flex">
                <div
                    style={{ lineHeight: "1.2" }}
                    className="w-10/12 flex-col text-center text-slate-900 text-2xl md:text-4xl font-bold font-[raleway] leading-[52.14px] relative"
                >
                    Collaboration With
                    <div className="absolute bottom-0 left-1/2  top-13 md:top-14   transform -translate-x-1/2 -mb-2 h-1 w-16 md:w-32 bg-red-600"></div>
                </div>
                <div className="md:w-full sm:w-10/12 md:flex w-fit justify-center items-center">
                    <img
                        src={Indonesia}
                        alt="Indonesia"
                        className="shadow-slate-400 my-5 shadow-lg md:mr-4"
                    />
                    <img
                        src={Korea}
                        alt="South Korea"
                        className="shadow-slate-400 shadow-lg md:ml-4"
                    />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AboutUs;
