import { useState } from "react";

const Year1 = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const { activities } = props;
    console.log(activities);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const renderActivities = () => {
        return activities.map((activity) => (
            <tr key={activity.id}>
                <td className="p-4 font-[poppins] text-xs md:text-base font-medium border border-gray-300">
                    {activity.no}
                </td>
                <td className="p-4 font-[poppins] text-xs md:text-base font-medium border border-gray-300">
                    {activity.goals}
                </td>
                {renderActivityColumns(activity)}
            </tr>
        ));
    };

    const renderActivityColumns = (activity) => {
        if (activity.upi === activity.unnes && activity.unnes === activity.undiksha) {
            return (
                <td colSpan={3} className="p-4 font-[poppins] text-xs md:text-base font-medium border border-gray-300 ">
                    {activity.upi}
                </td>
            );
        } else {
            return (
                <>
                    <td className="p-4 font-[poppins] text-xs md:text-base font-medium border border-gray-300">
                        {activity.upi}
                    </td>
                    <td className="p-4 font-[poppins] text-xs md:text-base font-medium border border-gray-300">
                        {activity.unnes}
                    </td>
                    <td className="p-4 font-[poppins] text-xs md:text-base font-medium border border-gray-300">
                        {activity.undiksha}
                    </td>
                </>
            );
        }
    };

    const iconArrow = isOpen ? (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 1024 1024"
        >
            <path
                fill="#EA1833"
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
                fill="#EA1833"
                d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"
            />
        </svg>
    );
    return (
        <div className="flex-col items-center md:mb-10 mb-6 relative">
            <div className="flex w-full text-left justify-between items-center "
            onClick={toggleAccordion}>
                <div className="">
                    <h1 className="font-[poppins] font-semibold text-red-600 text-lg md:text-xl">
                        First Year
                    </h1>
                    <h1 className="font-[raleway] gap font-bold text-slate-900 text-2xl md:text-4xl">
                        Activities
                    </h1>
                </div>
                <span>{iconArrow}</span>
            </div>
            <div className=" mt-4 mb-5 h-1 w-full bg-red-600"></div>

            {isOpen && (
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                    <div className="overflow-x-auto">
                    <table class="min-w-full border-collapse border border-gray-300">
                                            <thead class="bg-red-300 mx-10 ">
                                                <th className=" p-4 text-center flex-col items-center">
                                                    <h className=" font-[poppins] text-xs md:text-base font-semibold">
                                                        NO
                                                    </h>
                                                </th>
                                                <th className="p-4 w-2/6 text-center flex-col items-center">
                                                    <h className=" font-[poppins] text-xs md:text-base font-semibold">
                                                        GOALS
                                                    </h>
                                                </th>
                                                <th className="p-4 text-center flex-col items-center">
                                                    <h className=" font-[poppins] text-xs md:text-base font-semibold">
                                                        UPI
                                                    </h>
                                                </th>
                                                <th className="p-4 text-center flex-col items-center">
                                                    <h className=" font-[poppins] text-xs md:text-base font-semibold">
                                                        UNNES
                                                    </h>
                                                </th>
                                                <th className="p-4 text-center flex-col items-center">
                                                    <h className=" font-[poppins] text-xs md:text-base font-semibold">
                                                        UNDIKSHA
                                                    </h>
                                                </th>
                                            </thead>
                                                <tbody class="divide-y divide-gray-200 bg-white">
                                                {renderActivities()}
                                                </tbody>
                                        </table>
            </div>
            </div>
            )}
        </div>
    );
};

export default Year1;
