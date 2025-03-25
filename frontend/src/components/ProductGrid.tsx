import { useState, useMemo } from "react";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";
import CardSkeleton from "./CardSkeleton";
import ProductCardContainer from "./ProductCardContainer";
import CategoryList from "./CategoryList";

const ProductGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<number | undefined>(undefined);
  
  const { products, error, isLoading, totalPages } = useProducts({ page: currentPage });

  // Client-side filtering
  const filteredProducts = useMemo(() => {
    return selectedCategory 
      ? products.filter(product => product.category.id === selectedCategory)
      : products;
  }, [products, selectedCategory]);

  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <h1 className="pt-7 text-6xl text-white pb-3 font-serif border-b-2">
        Store
      </h1>
      
      <div className="mt-10 mb-6 text-white text-lg flex">
        <CategoryList
          onSelectCategory={(categoryId) => {
            setSelectedCategory(categoryId);
            setCurrentPage(1);
          }}
          selectedCategoryId={selectedCategory}
        />
      </div>

      <div className="mx-auto border-2 border-white mt-10 p-15 shadow-lg rounded-lg grid w-fit items-center justify-items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {isLoading &&
          skeletons.map((skeleton) => (
            <ProductCardContainer key={skeleton}>
              <CardSkeleton />
            </ProductCardContainer>
          ))}

        {filteredProducts.map((product) => (
          <ProductCardContainer key={product.id}>
            <ProductCard product={product} />
          </ProductCardContainer>
        ))}
      </div>

      <div className="pb-10 flex justify-center items-center gap-4 mt-6">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 border-2 border-white text-2xl text-white rounded-md transition ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-white hover:cursor-pointer hover:text-black"
          }`}
        >
          Previous
        </button>

        <p className="text-2xl text-white font-medium">
          Page {currentPage} of {totalPages}
        </p>

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={`px-4 py-2 border-2 border-white text-2xl text-white rounded-md transition ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-white hover:cursor-pointer hover:text-black"
          }`}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ProductGrid;