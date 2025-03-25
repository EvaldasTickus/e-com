import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

export interface Product {
  id: number;
  title: string;
  category: { id: number; name: string };
  size: number;
  price: number;
  content: string;
  image_link: string;
}

interface ProductResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Product[];
}

interface UseProductsParams {
  page: number;
}

const useProducts = ({ page }: UseProductsParams) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<ProductResponse>(`/products/?page=${page}`)
      .then((res) => {
        setProducts(res.data.results);
        setTotalPages(Math.ceil(res.data.count / 20));
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [page]);

  return { products, error, isLoading, totalPages };
};

export default useProducts;