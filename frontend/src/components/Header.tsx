import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import ShoppingCart from "./ShoppingCart";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const { cartQuantity } = useShoppingCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      // If the screen width is larger than `lg`, close the menu
      if (window.innerWidth >= 1280) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  return (
    <>
      <header className="h-20 sticky top-0 z-50 flex justify-between items-center text-xl text-white py-6 px-8 md:px-32 bg-black drop-shadow-md">
        <Link to="/">
          <p>e-Commerce</p>
        </Link>

        <nav className="hidden xl:flex items-center gap-12 text-2xl pr-22">
          <Link
            to="/"
            className="hover:border-b-2 border-transparent hover:border-white"
          >
            <p className="p-3 rounded-md transition-all cursor-pointer">Home</p>
          </Link>
          <Link
            to="/store"
            className="hover:border-b-2 border-transparent hover:border-white"
          >
            <p className="p-3 rounded-md transition-all cursor-pointer">
              Store
            </p>
          </Link>
          <HashLink
            to="/#about"
            className="hover:border-b-2 border-transparent hover:border-white"
          >
            <p className="p-3 rounded-md transition-all cursor-pointer">
              About
            </p>
          </HashLink>
        </nav>
        <div className="flex items-center justify-center text-3xl gap-10">
          {cartQuantity > 0 && (
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative border-2 pr-2.5 border-white p-2 rounded-md"
            >
              <AiOutlineShoppingCart />
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-white text-black text-sm font-semibold flex items-center justify-center rounded-full">
                {cartQuantity}
              </div>
            </button>
          )}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden text-3xl cursor-pointer"
          >
            <FaBars />
          </button>
        </div>
      </header>

      <ShoppingCart
        isOpen={isCartOpen}
        closeCart={() => setIsCartOpen(false)}
      />

      <div
        className={`fixed top-18 border-b-2 border-black left-0 w-full bg-black text-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-all duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-y-0 block" : "translate-y-full hidden"
        }`}
      >
        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="w-full text-center p-4 hover:bg-white hover:text-black transition-all cursor-pointer block"
        >
          Home
        </Link>

        <Link
          to="/store"
          onClick={() => setIsMenuOpen(false)}
          className="w-full text-center p-4 hover:bg-white hover:text-black transition-all cursor-pointer block"
        >
          Store
        </Link>

        <HashLink
          to="/#about"
          onClick={() => setIsMenuOpen(false)}
          className="w-full text-center p-4 hover:bg-white hover:text-black transition-all cursor-pointer block"
        >
          About
        </HashLink>
      </div>
    </>
  );
};

export default Header;
