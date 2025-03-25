import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface ProductSizesResponse {
  sizes: string[];
}

const useProductSizes = (productId: number) => {
  const [sizes, setSizes] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<ProductSizesResponse>(`/products/${productId}/sizes/`)
      .then((res) => {
        setSizes(res.data.sizes);  // Update with the sizes
        setIsLoading(false);
      })
      .catch((err) => {
        setError('Error fetching sizes', );
        setIsLoading(false);
      });
  }, [productId]); // Fetch whenever the productId changes

  return { sizes, error, isLoading };
};

export default useProductSizes;