import { useState } from "react";

const Accordion = ({ image, number, title, content }) => {
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
    const dynamicGradientColor =
        number % 2 === 0
            ? "from-[#001932] to-[#1322a8]"
            : "from-rose-600 via-red-600 to-rose-950";

    return (
        <div className="flex-col items-center md:mb-10 mb-6 relative">
            <button
                className={`absolute bg-black md:w-24 md:h-24 md:transform md:-translate-y-2 w-14 h-14 text-white bg-gradient-to-r ${dynamicGradientColor} rounded-full flex items-center justify-center`}
            >
                <img src={image} className="h-10 mb-1 md:h-20 md:mb-2 md:mr-1" />
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
                <div className="w-11/12 mx-auto text-justify text-slate-900 text-sm md:text-lg font-normal font-[poppins] my-6">
                    <p className="mb-4">
                        Chemistry Education Study Program: The Chemistry
                        Education Study Program is one of the study programs
                        under the Chemistry Department of FMIPA Undiksha which
                        is located in Singaraja, Buleleng Regency, Bali
                        Province. The Chemistry Education Study Program began
                        accepting students in 1980 until now. The Chemistry
                        Education Study Program currently has an accreditation
                        rating from BAN-PT with an A rating. Website link:{" "}
                        <a
                            href="https://undiksha.ac.id/akademik/fakultas/fakultas-matematika-dan-ilmu-pengetahuan-alam/pendidikan-kimia/"
                            className="hover:text-blue-500"
                        >
                            https://undiksha.ac.id/akademik/fakultas/fakultas-matematika-dan-ilmu-pengetahuan-alam/pendidikan-kimia/
                        </a>
                    </p>
                    <p className="mb-4">
                        Chemistry Study Program: Undergraduate Chemistry Study
                        Program, Department of Chemistry, FMIPA Singaraja-Bali
                        was established based on the Letter of the Director
                        General of Higher Education No. 356/KPT/I/2016 dated 16
                        November 2016 concerning Permit to Open the
                        Undergraduate Chemistry Study Program. As part of the
                        education provider institution, the Undergraduate
                        Chemistry Study Program is committed to providing
                        quality education to produce a superior generation in
                        the field of chemistry with a deep understanding of the
                        concept of sustainable chemistry. This vision supports
                        sustainable development programs and is also in line
                        with Undiksha's vision and mission to become a superior
                        university based on the Tri Hita Karana philosophy.
                    </p>
                    <p className="mb-4">
                        Learning in the Undergraduate Chemistry Study Program is
                        carried out by adapting the MBKM curriculum, providing
                        opportunities for students to study on campus and carry
                        out activities outside campus through an industrial
                        internship program. Improving the quality of learning in
                        the Undergraduate Chemistry Study Program continues to
                        be carried out by establishing international
                        collaboration with MCUT Taiwan, University of Gottingen
                        Germany and Sogang University South Korea. As of 2023,
                        the Undergraduate Chemistry Study Program has produced
                        46 graduates, all of whom have been absorbed in various
                        industries inside and outside Bali. Two of them are also
                        continuing their master's studies at MCUT Taiwan and
                        ITB, and several others have been successful in setting
                        up independent business units. Website link:{" "}
                        <a
                            href="https://undiksha.ac.id/akademik/fakultas/fakultas-matematika-dan-ilmu-pengetahuan-alam/kimia/"
                            className="hover:text-blue-500"
                        >
                            https://undiksha.ac.id/akademik/fakultas/fakultas-matematika-dan-ilmu-pengetahuan-alam/kimia/
                        </a>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Accordion;
