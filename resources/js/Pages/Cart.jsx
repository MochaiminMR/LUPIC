import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "react-tabs/style/react-tabs.css";
import { Head, Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import {
    ShoppingCartIcon,
    QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

export default function Example() {
    const [quantities, setQuantities] = useState({});
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const [shipping, setShipping] = useState(0);

    const handleQuantityChange = (productId, delta, productType) => {
        setQuantities((prevQuantities) => {
            const key = `${productId}-${productType}`;
            const newQuantity = (prevQuantities[key] || 1) + delta;
            const adjustedQuantity =
                newQuantity < 1 ? 1 : newQuantity;

            const updatedCart = cart.map((product) =>
                product.id === productId && product.type === productType
                    ? { ...product, quantity: adjustedQuantity }
                    : product
            );

            localStorage.setItem("cart", JSON.stringify(updatedCart));

            return {
                ...prevQuantities,
                [key]: adjustedQuantity,
            };
        });
    };

    const handleRemove = (productId, productType) => {
        const key = `${productId}-${productType}`;
        const newQuantities = { ...quantities };
        delete newQuantities[key];
        setQuantities(newQuantities);

        const newCart = cart.filter(
            (product) =>
                product.id !== productId || product.type !== productType
        );

        localStorage.setItem("cart", JSON.stringify(newCart));
    };

    useEffect(() => {
        cart.forEach((product) => {
            const key = `${product.id}-${product.type}`;
            setQuantities((prev) => ({
                ...prev,
                [key]: product.quantity,
            }));
        });
    }, []);

    const formatPrice = (price) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "IDR",
        }).format(price);
    };

    const subTotal = cart.reduce(
        (acc, product) =>
            acc +
            product.price * (quantities[`${product.id}-${product.type}`] || 0),
        0
    );

    const orderTotal = subTotal + shipping;

    const handleCheckout = () => {
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("subTotal", JSON.stringify(subTotal));
        localStorage.setItem("orderTotal", JSON.stringify(orderTotal));
        localStorage.setItem("shipping", JSON.stringify(shipping));
    };

    return (
        <>
            <Head title="Cart" />
            <Navbar />
            <div className="w-full justify-center flex">
                <main className="w-11/12 md:w-5/6">
                    <div className="mx-auto px-1 sm:px-6 lg:px-8">
                        <div className="mx-auto">
                            <div className="mt-12">
                                <section aria-labelledby="cart-heading">
                                    <h2 id="cart-heading" className="sr-only">
                                        Items in your shopping cart
                                    </h2>
                                    {cart.length === 0 && (
                                        <div className="flex-col flex items-center justify-center my-16">
                                            <div className="relative">
                                                <ShoppingCartIcon
                                                    className="block h-24 w-24 text-[#EA1833]"
                                                    aria-hidden="true"
                                                />
                                                <QuestionMarkCircleIcon
                                                    className="absolute top-7 right-8 h-6 w-6 text-[#EA1833]"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <p className="text-center text-lg font-semibold">
                                                Your cart is empty
                                            </p>
                                        </div>
                                    )}
                                    <ul
                                        role="list"
                                        className="divide-y divide-gray-200 border-t border-b border-gray-200"
                                    >
                                        {cart.map((product, productIdx) => (
                                            <li
                                                key={`${product.id}-${product.type}`}
                                                className="flex py-2 sm:py-6 items-center"
                                            >
                                                <div className="flex-shrink-0">
                                                    {JSON.parse(
                                                        product.image
                                                    ).map(
                                                        (img, index) =>
                                                            index === 0 && (
                                                                <img
                                                                    src={`/storage/${img}`}
                                                                    alt="product image"
                                                                    className="h-16 w-16 rounded-lg object-cover object-center sm:h-16 sm:w-16"
                                                                />
                                                            )
                                                    )}
                                                </div>

                                                <div className="relative max-w-full ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                                    <div>
                                                        <div className="flex justify-between sm:grid sm:grid-cols-2">
                                                            <div className="pr-6">
                                                                <h3 className="text-sm">
                                                                    <a
                                                                        href={`product&service/eCommerce/${product.id}`}
                                                                        className="font-medium text-gray-700 hover:text-gray-800"
                                                                    >
                                                                        {
                                                                            product.name
                                                                        }
                                                                    </a>
                                                                </h3>
                                                                <p className="text-sm text-gray-500">
                                                                    {formatPrice(
                                                                        product.price
                                                                    )}
                                                                </p>
                                                            </div>
                                                            {quantities[
                                                                `${product.id}-${product.type}`
                                                            ] && (
                                                                <p className="text-right text-sm font-medium text-gray-900 self-start">
                                                                    {formatPrice(
                                                                        product.price *
                                                                            quantities[
                                                                                `${product.id}-${product.type}`
                                                                            ]
                                                                    )}
                                                                </p>
                                                            )}
                                                        </div>

                                                        <div className="mt-2 flex flex-row md:flex-col justify-between items-center sm:absolute sm:top-0 sm:left-1/2 sm:mt-0">
                                                            <label
                                                                htmlFor={`quantity-${productIdx}`}
                                                                className="sr-only"
                                                            >
                                                                Quantity,{" "}
                                                                {product.name}
                                                            </label>
                                                            {quantities[
                                                                `${product.id}-${product.type}`
                                                            ] && (
                                                                <div className="flex items-center space-x-2">
                                                                    <button
                                                                        onClick={() =>
                                                                            handleQuantityChange(
                                                                                product.id,
                                                                                -1,
                                                                                product.type
                                                                            )
                                                                        }
                                                                        className="bg-[#EA1833] text-white w-8 h-8 border rounded-md"
                                                                    >
                                                                        -
                                                                    </button>
                                                                    <span className="w-12 h-8 flex items-center justify-center border border-gray-300 rounded-md">
                                                                        {
                                                                            quantities[
                                                                                `${product.id}-${product.type}`
                                                                            ]
                                                                        }
                                                                    </span>
                                                                    <button
                                                                        onClick={() =>
                                                                            handleQuantityChange(
                                                                                product.id,
                                                                                1,
                                                                                product.type
                                                                            )
                                                                        }
                                                                        className="bg-[#EA1833] text-white w-8 h-8 border rounded-md"
                                                                    >
                                                                        +
                                                                    </button>
                                                                </div>
                                                            )}
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    handleRemove(
                                                                        product.id,
                                                                        product.type
                                                                    )
                                                                }
                                                                className="ml-4 text-sm font-medium text-[#EA1833] hover:text-red-700 sm:ml-0 sm:mt-3"
                                                            >
                                                                <span>
                                                                    Remove
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                {/* Order summary */}
                                <section
                                    aria-labelledby="summary-heading"
                                    className="my-10"
                                >
                                    <div className="rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:p-8">
                                        <h2
                                            id="summary-heading"
                                            className="sr-only"
                                        >
                                            Order summary
                                        </h2>

                                        <div className="flow-root">
                                            <dl className="-my-4 divide-y divide-gray-200 text-sm">
                                                <div className="flex items-center justify-between py-4">
                                                    <dt className="text-gray-600">
                                                        Subtotal
                                                    </dt>
                                                    <dd className="font-medium text-[#EA1833]">
                                                        {formatPrice(subTotal)}
                                                    </dd>
                                                </div>
                                                <div className="flex items-center justify-between py-4">
                                                    <dt className="text-gray-600">
                                                        Shipping
                                                    </dt>
                                                    {shipping === 0 ? (
                                                        <dd className="font-medium text-[#EA1833]">
                                                            Free
                                                        </dd>
                                                    ) : (
                                                        <dd className="font-medium text-[#EA1833]">
                                                            {formatPrice(
                                                                shipping
                                                            )}
                                                        </dd>
                                                    )}
                                                </div>
                                                <div className="flex items-center justify-between py-4">
                                                    <dt className="text-base font-medium text-gray-900">
                                                        Order total
                                                    </dt>
                                                    <dd className="text-base font-medium text-[#EA1833]">
                                                        {formatPrice(
                                                            orderTotal
                                                        )}
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>
                                    </div>
                                    <Link href="/cart/checkout">
                                        <div className="mt-10">
                                            <button
                                                type="submit"
                                                onClick={handleCheckout}
                                                className="w-full rounded-md border border-transparent bg-[#EA1833] py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-red-700"
                                            >
                                                Checkout
                                            </button>
                                        </div>
                                    </Link>
                                </section>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            <Footer />
        </>
    );
}
