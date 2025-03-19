import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function FloatingCart() {
    const [itemCount, setItemCount] = useState(0);

    const updateItemCount = () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        setItemCount(cart.length);
    };

    useEffect(() => {
        updateItemCount();

        const handleStorageChange = () => {
            updateItemCount();
        };

        window.addEventListener("storage", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);
    return (
        <div className="fixed mb-4 md:mr-16 mr-2 top-3 right-1 md:top-24 md:bottom-4 md:right-4 flex items-start justify-end ">
            <div className="md:flex md:items-center md:space-x-4 whitespace-nowrap bg-[#EA1833] p-2 rounded-full">
                <Link href="/cart">
                    <div className="relative">
                        <ShoppingCartIcon
                            className="block md:h-12 md:w-12 h-6 w-6 text-white"
                            aria-hidden="true"
                        />
                        {itemCount > 0 && (
                            <span className="absolute top-[-3px] right-[-6px] flex md:h-4 md:w-4 h-3 w-3 items-center justify-center rounded-full bg-[#001932] text-white text-[10px] md:text-[12px]">
                                {itemCount}
                            </span>
                        )}
                    </div>
                </Link>
            </div>
        </div>
    );
}
