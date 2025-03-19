import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";

export default function Checkout(props) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const orderTotal = JSON.parse(localStorage.getItem("orderTotal"));
    const subTotal = JSON.parse(localStorage.getItem("subTotal"));
    const shipping = JSON.parse(localStorage.getItem("shipping"));
    const whatsappNumber = props.WhatsappNumber;
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        address: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "IDR",
        }).format(price);
    };

    const message = `Hi, I would like to order the following items:
\n${cart
        .map((item) => {
            return `- ${item.name} ${formatPrice(item.price)} x ${
                item.quantity
            } pcs`;
        })
        .join("\n")}
\nwith total price ${formatPrice(orderTotal)}.
\nPlease send the order to the following details:
Name: ${formData.name}
Email: ${formData.email}
Phone Number: ${formData.phoneNumber}
Address: ${formData.address}`;

    const whatsappLink = `https://wa.me/${whatsappNumber}/?text=${encodeURIComponent(
        message
    )}`;

    const handleCheckout = () => {
        window.open(whatsappLink, "_blank");
    };

    return (
        <>
            <Head title="Check Out" />
            <Navbar />
            <div className="w-full justify-center flex flex-col-reverse md:grid md:grid-cols-2 p-6 gap-12 md:p-12 md:mb-12">
                <form className="w-full" onSubmit={handleCheckout} >
                    <div className="font-[raleway] font-bold text-lg relative md:text-2xl text-start">
                        Payment Details
                    </div>
                    <div className="font-[poppins]">
                        <div>
                            <label className="block mt-4 text-sm font-semibold text-slate-900 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-white rounded-md mt-1 py-3 border text-sm"
                            />
                        </div>
                        <div>
                            <label className="block mt-4 text-sm font-semibold text-slate-900 mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-white rounded-md mt-1 py-3 border text-sm"
                            />
                        </div>
                        <div>
                            <label className="block mt-4 text-sm font-semibold text-slate-900 mb-2">
                                Phone Number
                            </label>
                            <input
                                type="number"
                                name="phoneNumber"
                                placeholder="Your Phone Number"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                                className="w-full bg-white rounded-md mt-1 py-3 border text-sm"
                            />
                        </div>
                        <div>
                            <label className="block mt-4 text-sm font-semibold text-slate-900 mb-2">
                                Address
                            </label>
                            <input
                                type="text"
                                name="address"
                                placeholder="Your Address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                                className="w-full bg-white rounded-md mt-1 py-3 border text-sm"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-[#EA1833] hover:bg-red-700 text-white font-semibold text-sm py-3 rounded-md mt-8 mb-4 w-full flex justify-center"
                        >
                            Order by Whatsapp
                        </button>
                        <Link href="/cart">
                            <button className="bg-[#CACACA] hover:bg-gray-400 text-[#555555] font-semibold text-sm py-3 rounded-md w-full flex justify-center">
                                Cancel Checkout
                            </button>
                        </Link>
                    </div>
                </form>
                <div className="md:px-16">
                    <div className="center">
                        <div className="font-bold text-lg mb-4">Your Order</div>
                        <div className="max-h-96 overflow-auto">
                            {cart.map((item) => (
                                <div className="border p-4 flex flex-row items-center w-full mb-2 rounded-lg">
                                    {JSON.parse(item.image).map(
                                        (img, index) =>
                                            index === 0 && (
                                                <img
                                                    key={index}
                                                    src={`/storage/${img}`}
                                                    alt={item.name}
                                                    className="w-12 h-12 object-cover rounded-lg"
                                                />
                                            )
                                    )}
                                    <div className="w-full px-4">
                                        <div>{item.name}</div>
                                        <div className="flex flex-row justify-between w-full">
                                            <div>
                                                {formatPrice(
                                                    item.price * item.quantity
                                                )}
                                            </div>
                                            <div>{item.quantity}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <hr className="my-4" />
                        <div className="flex flex-row justify-between w-full">
                            <div>Subtotal</div>
                            <div>{formatPrice(subTotal)}</div>
                        </div>
                        {shipping > 0 ? (
                            <div className="flex flex-row justify-between w-full">
                                <div>Shipping</div>
                                <div>{formatPrice(shipping)}</div>
                            </div>
                        ) : (
                            <div className="flex flex-row justify-between w-full">
                                <div>Shipping</div>
                                <div>FREE</div>
                            </div>
                        )}
                        <hr className="my-4" />
                        <div className="flex flex-row justify-between w-full">
                            <div>Total</div>
                            <div>{formatPrice(orderTotal)}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
