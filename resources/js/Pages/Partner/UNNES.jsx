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
                <img src={image} className="h-10 mb-2 mr-1 md:h-20 md:mb-4" />
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
                        education study program was founded in 1965, has a
                        conservation perspective and has an international
                        reputation. Capitalized by lecturers with a minimum
                        master's degree in both educational and non-educational
                        fields, this study program also has supporting
                        facilities, namely eight laboratories, namely the Lab.
                        Basic Chemistry, Lab. Bioorganics, Lab. Physical
                        Chemistry, Lab. Analytical Chemistry, Lab. Inorganic
                        Chemistry, Lab. Computing, Lab. Instrumentation and Lab.
                        Microteaching. The Microteaching Lab has been equipped
                        with various multimedia equipment as a means for
                        developing and fostering the professional educational
                        skills of prospective chemistry teachers. Modern
                        instruments in the Chemistry Laboratory as a means of
                        increasing the professional competence of prospective
                        teacher students include Gas Chromatography, Atomic
                        Absorption Spectrophotometer, UV-Visible
                        Spectrophotometer, Spectrofluorometer, High Performance
                        Liquid Chromatography, Inductively Coupled Plasma
                        Optical Emission Spectrometer, Surface Area Analyzer and
                        Particle Size Analyzer.
                    </p>
                    <p className="mb-4">
                        Chemistry Study Program: In line with the change of IKIP
                        Semarang to Semarang State University (UNNES) on January
                        27 2000, based on the Decree of the Minister of
                        Education and Culture No. 278/O/1999 concerning the
                        Organization and Work Procedures of Semarang State
                        University, the name FPMIPA was also changed to FMIPA
                        with departments of Mathematics, Physics, Chemistry and
                        Biology which not only manages educational study
                        programs but also non-educational study programs. From
                        then on, the Undergraduate Chemistry Study Program began
                        to be established. The Undergraduate Chemistry Study
                        Program is in the same location as other study programs,
                        namely in Building D FMIPA. The strategic location on
                        Jalan Raya Sekaran, Gunungpati, Semarang City, provides
                        various facilities for students including
                        transportation, shops, banking, polyclinics, culinary
                        centers, places of worship, parking lots, etc. As a
                        means of improving the quality and professionalism of
                        graduates, the lecture process is carried out in a
                        comfortable 3-story building equipped with an LCD
                        projector and a representative laboratory building. The
                        Chemistry Study Program has 6 laboratory rooms, namely
                        the Lab. Basic Chemistry, Lab. Bioorganics, Lab.
                        Physical Chemistry, Lab. Analytical Chemistry, Lab.
                        Inorganic Chemistry, Lab. Computing and Lab.
                        Instrumentation with various sophisticated equipment
                        available includes Gas Chromatography, Surface Area
                        Analyzer, Atomic Absorption Spectrophotometer, Visible
                        Spectrophotometer, UV-Vis Spectrophotometer, Rotary
                        Vacuum Evaporator, Polarimeter, COD reactor, etc.
                        Website link:{" "}
                        <a
                            href="https://unnes.ac.id/pendidikan-kimia-s1/"
                            className="hover:text-blue-500"
                        >
                            https://unnes.ac.id/pendidikan-kimia-s1/
                        </a>
                    </p>
                    <p className="mb-4">
                        The existence of clean and beautiful lecture and
                        laboratory buildings, as well as hotspots for all campus
                        areas, makes the Chemistry Study Program very
                        comfortable to use as a place for students to study.
                        Various other supporting facilities such as
                        teleconference rooms, meeting rooms, lecturer rooms,
                        gazebos, spacious waiting rooms, academic administration
                        service rooms with LAN systems and libraries with
                        complete book collections further support the
                        achievement of reliable graduates in the global era.
                        Website link:{" "}
                        <a
                            href="https://unnes.ac.id/kimia-s1/"
                            className="hover:text-blue-500"
                        >
                            {" "}
                            https://unnes.ac.id/kimia-s1/
                        </a>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Accordion;
