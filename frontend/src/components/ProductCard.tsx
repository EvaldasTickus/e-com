import { Product } from "../hooks/useProducts";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CurrencyFormat } from "../utilities/CurrencyFormat";
import SizeDropdown from "./SizeDropdown";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null); 
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(product.id);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError("You must select the size");
      return;
    }

    setError(null);
    increaseCartQuantity(product);
  };

  return (
    <div className="bg-white rounded-lg h-auto p-4 flex flex-col items-center text-center hover:border border-gray-300 transition">
      <div className="w-48 h-48 mb-4 overflow-hidden">
        <img
          src={product.image_link}
          alt={product.content}
          className="w-full h-full object-cover transform transition-transform duration-200 ease-in-out hover:scale-110"
        />
      </div>

      <h2 className="text-xl mb-2 h-14 overflow-hidden line-clamp-2">
        {product.content}
      </h2>
      <div className="flex items-center justify-between w-full">
        <SizeDropdown productId={product.id} setSelectedSize={setSelectedSize} />
        <strong className="text-lg font-bold h-8">
          {CurrencyFormat(product.price)}
        </strong>
      </div>

      <div className="w-full flex justify-end gap-4">
      {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
        {quantity === 0 ? (
          <button
            onClick={handleAddToCart}
            className="border bg-black cursor-pointer text-white px-3 py-1 text-sm rounded-md hover:opacity-80 transition"
          >
            Add to <AiOutlineShoppingCart className="inline-block" />
          </button>
        ) : (
          <div className="flex justify-end items-end h-7.5 gap-4">
            <div className="inline">
              <button
                onClick={() => decreaseCartQuantity(product.id)}
                className="border border-gray-300 px-1 py-0.5 rounded-md cursor-pointer text-sm hover:bg-black hover:text-white transition"
              >
                -
              </button>
              <span className="text-lg font-medium px-2">{quantity}</span>
              <button
                onClick={() => increaseCartQuantity(product)}
                className="border border-gray-300 px-1 py-0.5 rounded-md cursor-pointer text-sm hover:bg-black hover:text-white transition"
              >
                +
              </button>
            </div>

            <button
              onClick={() => removeFromCart(product.id)}
              className="border border-red-500 text-red-500 px-3 py-1 text-sm cursor-pointer rounded-md mt-3 hover:bg-red-600 hover:text-white transition"
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
