import React from "react";
import useProductSizes from "../hooks/useProductSizes";

interface SizeDropdownProps {
  productId: number;
  setSelectedSize: React.Dispatch<React.SetStateAction<string | null>>; // Function to update selected size
}

const SizeDropdown: React.FC<SizeDropdownProps> = ({
  productId,
  setSelectedSize,
}) => {
  const { sizes, error, isLoading } = useProductSizes(productId);

  if (isLoading) return <div>Loading sizes...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <select
        id="size"
        onChange={(e) => setSelectedSize(e.target.value)} // Update selected size
        className="p-1 border border-gray-300 rounded-2xl"
      >
        <option value="">Select Size</option>
        {sizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SizeDropdown;
