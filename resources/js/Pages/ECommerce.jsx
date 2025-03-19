import React, { useEffect, useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";
import Construction from "../Asset/Construction.png";
import Quantity from "../Components/Quantity";
import Swal from "sweetalert2";

export default function ECommerce(props) {
    const [searchValue, setSearchValue] = useState("");
    const [product, setProduct] = useState(props.props);
    const [cart, setCart] = useState(
        () => JSON.parse(localStorage.getItem("cart")) || []
    );

    const type = "product";

    useEffect(() => {
        const search = props.props.filter((item) => {
            return item.name.toLowerCase().includes(searchValue.toLowerCase());
        });
        setProduct(search);
        if (searchValue === "") {
            setProduct(props.props);
        }
    }, [searchValue, props.props]);

    useEffect(() => {
        window.addEventListener("storage", () => {
            setCart(JSON.parse(localStorage.getItem("cart")) || []);
        });
        return () =>
            window.removeEventListener("storage", () => {
                setCart(JSON.parse(localStorage.getItem("cart")) || []);
            });
    }, []);

    const handleCart = (item) => {
        const cartCopy = JSON.parse(localStorage.getItem("cart")) || [];
        const itemWithQuantity = { ...item, quantity: 1, type };

        const existingItem = cartCopy.find(
            (cartItem) => cartItem.id === item.id && cartItem.type === type
        );

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartCopy.push(itemWithQuantity);
        }

        localStorage.setItem("cart", JSON.stringify(cartCopy));
        window.dispatchEvent(new Event("storage"));
        setCart(cartCopy);
        Swal.fire({
            icon: "success",
            title: `${item.name} added to cart`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "IDR",
        }).format(price);
    };

    const searchInCart = (id) => {
        const cartCopy = JSON.parse(localStorage.getItem("cart")) || [];
        return cartCopy.find(
            (cartItem) => cartItem.id === id && cartItem.type === type
        );
    };

    const handleSearch = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <>
            <div className="mt-10 md:w-auto flex content-center justify-center">
                <div className="flex flex-grow justify-center items-center">
                    <div className="flex justify-center w-full md:w-3/5 items-center my-auto">
                        <input
                            type="text"
                            onChange={handleSearch}
                            placeholder="Insert Product Name"
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
            {product.length === 0 && (
                <div className="flex-col flex gap-5 justify-center items-center my-10">
                    <img
                        src={Construction}
                        className="h-48 md:h-72"
                        alt="Construction"
                    />
                    <div className="text-center">
                        <h1 className="font-[raleway] font-bold text-lg md:text-2xl">
                            Product Not Found
                        </h1>
                        <p className="font-[poppins] text-[#828390] text-sm  md:text-base">
                            We are sorry, the product you are looking for is not
                            found
                        </p>
                    </div>
                </div>
            )}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 my-10">
                {product.map((item) => {
                    const cartItem = searchInCart(item.id);
                    return (
                        <div
                            key={item.id}
                            className="shadow-[-8px_0px_18px_-10px_rgba(0,0,0,0.3)] rounded-lg cursor-pointer hover:shadow-white transition duration-300 ease-in-out"
                        >
                            <Link
                                href={`/product&service/eCommerce/${item.id}`}
                            >
                                <div className="">
                                    <div className="md:h-52 h-36 rounded-xl overflow-hidden p-2">
                                        {JSON.parse(item.image).map(
                                            (img, index) =>
                                                index === 0 && (
                                                    <img
                                                        key={index}
                                                        className="h-full w-full object-cover object-center rounded-xl"
                                                        src={`/storage/${img}`}
                                                    />
                                                )
                                        )}
                                    </div>
                                    <h2 className="px-2 md:px-4 text-base md:text-xl font-[raleway] font-semibold md:my-2 truncate">
                                        {item.name}
                                    </h2>
                                    <h2 className="px-2 md:px-4 text-base md:text-xl font-[raleway] font-semibold md:my-2">
                                        {formatPrice(item.price)}
                                    </h2>
                                    <p className="px-2 md:px-4 text-xs md:text-base font-[poppins] font-light my-3 md:mb-4 line-clamp-3">
                                        {item.description}
                                    </p>
                                </div>
                            </Link>
                            {cartItem ? (
                                <Quantity cartItem={cartItem} setCart={setCart} type={type} />
                            ) : (
                                <button
                                    onClick={() => handleCart(item)}
                                    className="w-full"
                                >
                                    <div className="flex justify-between items-center p-2 mx-2 mb-2 md:p-4 md:mx-4 md:mb-4 bg-[#EA1833] text-white rounded-md hover:bg-red-700 transition duration-300 ease-in-out">
                                        <div className="text-xs md:text-base font-[poppins] font-light line-clamp-4">
                                            Add to Cart
                                        </div>
                                        <ShoppingCartIcon className="w-4 h-4 md:w-6 md:h-6" />
                                    </div>
                                </button>
                            )}
                        </div>
                    );
                })}
            </div>
        </>
    );
}
