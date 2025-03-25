import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import useProducts from "../../hooks/useProducts";
import { Product } from "../../hooks/useProducts";

const NowPopularSection = () => {
  const { products } = useProducts({page : 1});
  const [randomProducts, setRandomProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (products && products.length > 0) {
      const productsCopy = [...products];
      const selected: Product[] = [];

      const count = Math.min(5, productsCopy.length);

      for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * productsCopy.length);
        selected.push(productsCopy[randomIndex]);
        productsCopy.splice(randomIndex, 1);
      }

      setRandomProducts(selected);
    }
  }, [products]);

  return (
    <>
      <div className="text-center mt-5 text-3xl txt-shadow">Now Popular</div>
      <div className="mt-5 w-[90%] mx-auto mb-20 p-4 bg-gray-100 rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {randomProducts.length > 0
            ? randomProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-4 rounded-md shadow-sm h-full"
                >
                  <ProductCard product={product} />
                </div>
              ))
            : // Fallback when no products are available
              Array(5)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-md shadow-sm h-full flex justify-center items-center"
                  >
                    Loading...
                  </div>
                ))}
        </div>
      </div>
    </>
  );
};

export default NowPopularSection;
