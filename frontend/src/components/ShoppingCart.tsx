import { useShoppingCart } from "../context/ShoppingCartContext";
import { FaTimes, FaArrowRight } from "react-icons/fa";
import { CurrencyFormat } from "../utilities/CurrencyFormat";

interface ShoppingCartProps {
  isOpen: boolean;
  closeCart: () => void;
}

const ShoppingCart = ({ isOpen, closeCart }: ShoppingCartProps) => {
  const { cartItems, removeFromCart } = useShoppingCart(); // Get cart items and remove function

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  return (
    <div
      className={`fixed top-20 right-0 h-full w-80 bg-white z-60 shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-semibold">Shopping Cart</h2>
        <button onClick={closeCart} className="text-gray-600 hover:text-black">
          <FaTimes size={20} />
        </button>
      </div>

      <div className="p-4">
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-4 border-b pb-2 mb-2"
              >
                <img
                  src={item.image_link}
                  alt={item.content}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <div className="flex gap-2 justify-between align-middle">
                    <p className="font-semibold">{item.content}</p>
                    <p>{}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="cursor-pointer border-2 border-black w-6 h-6 flex items-center justify-center rounded-sm pb-0.5 bg-white hover:bg-black hover:text-white transition duration-150 ease-in-out"
                    >
                      x
                    </button>
                  </div>
                  <p className="text-sm text-gray-500">
                    {item.quantity} × {CurrencyFormat(item.price)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 justify-end flex text-lg font-semibold">
          <p>Total:</p>
          <p>{CurrencyFormat(totalPrice)}</p>
        </div>
        <div>
          <button className="w-full bg-emerald-500 mt-3 cursor-pointer hover:bg-emerald-600 text-white font-medium py-3 px-6 rounded-lg shadow-sm transition-all duration-200 flex items-center justify-center space-x-2">
            <span>Proceed to Checkout</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
