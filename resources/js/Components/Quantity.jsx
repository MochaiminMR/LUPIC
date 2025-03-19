
export default function FloatingCart({cartItem, setCart, type}) {
    
    const handleIncreaseQuantity = (item) => {
        const cartCopy = JSON.parse(localStorage.getItem("cart")) || [];
        const itemIndex = cartCopy.findIndex(
            (i) => i.id === item.id && i.type === type
        );
        if (itemIndex > -1) {
            cartCopy[itemIndex].quantity += 1;
            localStorage.setItem("cart", JSON.stringify(cartCopy));
            setCart(cartCopy);
        }
    };

    const handleDecreaseQuantity = (item) => {
        const cartCopy = JSON.parse(localStorage.getItem("cart")) || [];
        const itemIndex = cartCopy.findIndex(
            (i) => i.id === item.id && i.type === type
        );
        if (itemIndex > -1 && cartCopy[itemIndex].quantity > 1) {
            cartCopy[itemIndex].quantity -= 1;
            localStorage.setItem("cart", JSON.stringify(cartCopy));
            setCart(cartCopy);
        }
    };
    return (
        <div className="flex w-full justify-center items-center space-x-2 p-2  md:mb-4">
            <button
                onClick={() => handleDecreaseQuantity(cartItem)}
                className="bg-[#EA1833] text-white w-8 md:w-12 h-8 md:h-10 border rounded-md text-xl"
            >
                -
            </button>
            <span className="w-24 h-8 md:h-10 flex text-lg md:text-xl items-center justify-center border border-gray-300 rounded-md">
                {cartItem.quantity}
            </span>
            <button
                onClick={() => handleIncreaseQuantity(cartItem)}
                className="bg-[#EA1833] text-white w-8 h-8 md:w-12 md:h-10 border rounded-md text-xl"
            >
                +
            </button>
        </div>
    );
}
