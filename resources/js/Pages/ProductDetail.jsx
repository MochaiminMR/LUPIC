import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "react-tabs/style/react-tabs.css";
import { Head } from "@inertiajs/react";
import { Tab } from "@headlessui/react";
import { TruckIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
import FloatingCart from "@/Components/FloatingCart";
import { useState, useEffect } from "react";
import Quantity from "@/Components/Quantity";
import Swal from "sweetalert2";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function ProductDetail(props) {
    const [cart, setCart] = useState(
        () => JSON.parse(localStorage.getItem("cart")) || []
    );
    const [quantity, setQuantity] = useState(1);
    const product = props.product;
    const type = "product";

    useEffect(() => {
        const handleStorageChange = () => {
            setCart(JSON.parse(localStorage.getItem("cart")) || []);
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    const handleCart = (item) => {
        const cartCopy = JSON.parse(localStorage.getItem("cart")) || [];
        const itemWithQuantity = { ...item, quantity, type };

        const existingItem = cartCopy.find(
            (cartItem) => cartItem.id === item.id && cartItem.type === type
        );

        if (existingItem) {
            existingItem.quantity += quantity;
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
        return cart.find(
            (cartItem) => cartItem.id === id && cartItem.type === type
        );
    };

    const cartItem = searchInCart(product.id);

    return (
        <>
            <Head title="Product Detail" />
            <Navbar />
            <FloatingCart />
            <div className="bg-white">
                <main className="mx-auto w-10/12 sm:py-16">
                    <div className="mx-auto max-w-2xl lg:max-w-none">
                        {/* Product */}
                        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                            {/* Image gallery */}
                            <Tab.Group
                                as="div"
                                className="flex-col-reverse flex md:grid md:grid-cols-5 gap-2"
                            >
                                {/* Image selector */}
                                <div className="mx-auto w-full max-w-2xl sm:block lg:max-w-none col-span-1">
                                    <Tab.List className="grid grid-cols-4 md:grid-cols-1 md:grid-rows-4 md:gap-6 gap-0 mx-4">
                                        {JSON.parse(product.image).map(
                                            (image, index) => (
                                                <Tab
                                                    key={index}
                                                    className="relative flex h-16 w-16 md:h-24 md:w-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                                                >
                                                    {({ selected }) => (
                                                        <>
                                                            <span className="absolute inset-0 overflow-hidden rounded-md">
                                                                <img
                                                                    src={`/storage/${image}`}
                                                                    alt=""
                                                                    className="h-full w-full object-cover object-center"
                                                                />
                                                            </span>
                                                            <span
                                                                className={classNames(
                                                                    selected
                                                                        ? "ring-[#EA1833]"
                                                                        : "ring-transparent",
                                                                    "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
                                                                )}
                                                                aria-hidden="true"
                                                            />
                                                        </>
                                                    )}
                                                </Tab>
                                            )
                                        )}
                                    </Tab.List>
                                </div>

                                <Tab.Panels className="w-full bg-[#F5F5F5] content-center rounded-lg col-span-4">
                                    {JSON.parse(product.image).map(
                                        (image, index) => (
                                            <Tab.Panel key={index}>
                                                <img
                                                    src={`/storage/${image}`}
                                                    alt="product image"
                                                    className="h-full w-full object-cover object-center sm:rounded-lg"
                                                />
                                            </Tab.Panel>
                                        )
                                    )}
                                </Tab.Panels>
                            </Tab.Group>

                            {/* Product info */}
                            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                                <h1 className="text-xl md:text-3xl font-bold tracking-tight text-gray-900">
                                    {product.name}
                                </h1>

                                <div className="md:mt-3">
                                    <h2 className="sr-only">
                                        Product information
                                    </h2>
                                    <p className="text-xl md:text-3xl tracking-tight text-gray-900">
                                        {formatPrice(product.price)}
                                    </p>
                                </div>

                                <div className="md:mt-6 mt-4">
                                    <h3 className="sr-only">Description</h3>

                                    <div
                                        className="space-y-6 text-base text-gray-700"
                                        dangerouslySetInnerHTML={{
                                            __html: product.description,
                                        }}
                                    />
                                </div>
                                <hr className="my-2 md:my-6 border-t-2 border-gray-200" />

                                {cartItem ? (
                                    <Quantity cartItem={cartItem} setCart={setCart} type={type} />
                                ) : (
                                    <button
                                        onClick={() => handleCart(product)}
                                        className="my-4 md:my-10 flex w-full flex-1 items-center justify-center rounded-md border border-transparent bg-[#EA1833] py-3 px-8 text-base font-medium text-white hover:bg-red-700 sm:w-full"
                                    >
                                        Buy Product
                                    </button>
                                )}

                                <div className="border border-black rounded-md mb-12">
                                    <div className="flex flex-row items-center px-6 py-3 gap-6">
                                        <TruckIcon className="h-8 w-8" />
                                        <div>
                                            <div className="text-lg">
                                                Free Delivery
                                            </div>
                                            <div className="text-sm underline">
                                                Enter your postal code for
                                                Delivery Availability
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center border-t border-black px-6 py-3 gap-6">
                                        <ArrowPathIcon className="h-8 w-8" />
                                        <div>
                                            <div className="text-lg">
                                                Return Delivery
                                            </div>
                                            <div className="text-sm">
                                                Free 30 Days Delivery Returns.
                                                <span className="mx-2 underline">
                                                    Details
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
}
