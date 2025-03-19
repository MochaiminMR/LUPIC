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
                <img src={image} className="h-10 md:h-20 rounded-full" />
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
                        {" "}
                        The forerunner of the Department of Chemistry Education
                        at FPMIPA IKIP Bandung was the Department of Natural
                        Sciences at the Teacher Education College (PTPG) which
                        was born in 1954. In connection with the change of
                        PTPG's status to the Faculty of Teacher Training and
                        Education (FKIP) at Padjadjaran University (UNPAD), for
                        six years since In 1957, this department became part of
                        UNPAD.{" "}
                    </p>
                    <p className="mb-4">
                        In 1963 FKIP UNPAD changed its status to IKIP Bandung in
                        accordance with Presidential Decree No. 1 of 1963. Since
                        then the chemistry education department has become one
                        of the departments within the Faculty of Teacher
                        Training and Exact Sciences (FKIE) IKIP Bandung, at that
                        time it was called the Department of Chemistry.
                    </p>
                    <p className="mb-4">
                        In 1983 the Ministry of Education and Culture held a
                        reorganization of state universities, since then the
                        name FKIE changed to FPMIPA and the name Chemistry
                        Education Department began to be used. Before 1983, the
                        educational programs organized by the Department of
                        Chemistry Education included the baccalaureate level
                        with a program duration of 6 semesters and the
                        undergraduate level with a program duration of 4
                        semesters as a continuation of the baccalaureate level.
                        From 1979 to 1992 the Department of Chemistry Education
                        held two types of educational programs, namely the
                        undergraduate program (S1) with a program duration of 8
                        semesters and the Diploma III Program with a program
                        duration of 6 semesters.
                    </p>
                    <p className="mb-4">
                        Starting in 1993, the Department of Chemistry Education
                        only provided undergraduate programs. However, the
                        Department of Chemistry Education still holds lectures
                        and practicums for several chemistry courses offered to
                        D3 Science Middle School students and S1 Programs for
                        PGSD Science lecturers. Starting in 1994, the Department
                        of Chemistry Education, in addition to organizing
                        regular undergraduate programs, also held lectures and
                        practicums for several chemistry courses in S1 Science
                        PGSD and D3 PGSMF (a collaboration between the Ministry
                        of Health and IKIP Bandung). The existence of the FPMIPA
                        IKIP Bandung Chemistry Education Department was
                        strengthened by the Decree of the Director General of
                        Higher Education Number 243/DIKTI/Kep/1996 dated 11 July
                        1996.
                    </p>
                    <p className="mb-4">
                        In 1999 IKIP Bandung changed its name to the Indonesian
                        Education University (UPI) and became UPI a State-Owned
                        Legal Entity (BHMN) in 2004. Evaluation and verification
                        of the National Accreditation Board (BAN) for Higher
                        Education, Ministry of Education and Culture in 1998
                        (Number 001/BAN-PT /Ak-1/VIII/1998) states that the
                        Department of Chemistry Education is accredited A. In
                        line with the expansion of its mandate (wider mandate),
                        in the 1998 academic year the Department of Chemistry
                        Education opened a Chemistry Study Program with the
                        Decree of the Director General of DIKTI No. 910 of 1998.
                        Existence of the Study Program Chemistry Education and
                        the Chemistry Study Program in the Department of
                        Chemistry Education are developed with the principle of
                        cross fertilization, which will mutually strengthen each
                        other.
                    </p>
                    <p className="mb-4">
                        The Department of Chemistry Education has 45 lecturers
                        and each year accepts an average of 80 students from the
                        Chemistry Education Study Program and 40 students from
                        the Chemistry Study Program who are recruited through
                        SNMPTN (invitation and writing), as well as UM-UPI.
                        During its journey, the Department of Chemistry
                        Education was led by Ir. Lie Tiong Djien (deceased) was
                        the first, followed by Dr. Ir. Lim Tik Liem (late), Dr.
                        Rahmat Wiradinata, M.Sc., Prof. Dr. Ratna Wilis Dahar,
                        M.Sc., Drs. Didi Kuswadi, Dra. Djuariah AS, Drs. Soeroso
                        Martodimedjo, Dra. Nuraini Syarifuddin, Drs. Iyon
                        Kertawidjaya, M.Pd., Drs. Harry Firman, M.Pd, Drs. Momo
                        Rosbiono, M.Pd., M.Sc., Dr. Sumar Hendayana, M.Sc., Drs.
                        Rahmat Setiadi, M.Sc., Prof. Dr. Anna Permanasari,
                        M.Si., Dr. Ijang Rohman, M.Si., Dr. Ahmad Mudzakir,
                        M.Sc., and now led by Dr. Hendrawan, M.Sc.
                    </p>
                    <p className="mb-4">
                        Currently, since August 2023, the name of Department was
                        deleted and changed to study program. So, there are two
                        study program: Chemistry Education Study Program, lead
                        by Dr. Wiji, M.Si, and Chemistry Study Program, lead by
                        Prof. Dr. Fitri Khoerunnisa, M.Si. Website link:
                        <a
                            href="https://kimia.upi.edu/"
                            className="hover:text-blue-500"
                        >
                            https://kimia.upi.edu/
                        </a>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Accordion;
