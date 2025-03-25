import React, { useMemo } from 'react';
import useProducts from '../hooks/useProducts';
import { IoMdArrowDropdown } from 'react-icons/io';

interface CategoryListProps {
  onSelectCategory: (categoryId: number | undefined) => void;
  selectedCategoryId?: number;
}

const CategoryList: React.FC<CategoryListProps> = ({ 
  onSelectCategory, 
  selectedCategoryId 
}) => {
  const { products, isLoading } = useProducts({ page: 1 });

  // Extract unique categories
  const categories = useMemo(() => {
    const uniqueCategories = new Map<number, { id: number; name: string }>();
    products.forEach(product => {
      if (!uniqueCategories.has(product.category.id)) {
        uniqueCategories.set(product.category.id, product.category);
      }
    });
    return Array.from(uniqueCategories.values());
  }, [products]);

  if (isLoading) return <div>Loading categories...</div>;

  return (
    <div className="relative inline-block w-64">
      <select 
        className="appearance-none w-full ml-8 bg-black text-white border-1 border-white rounded-md p-4 text-lg pr-10"
        value={selectedCategoryId || ''}
        onChange={(e) => {
          const value = e.target.value 
            ? parseInt(e.target.value) 
            : undefined;
          onSelectCategory(value);
        }}
      >
        <option value="" className="bg-black">All Categories</option>
        {categories.map(category => (
          <option 
            className="bg-black"
            key={category.id} 
            value={category.id}
          >
            {category.name}
          </option>
        ))}
      </select>
      <div className="pointer-events-none right-0 absolute inset-y-0 flex items-center px-2 text-white">
        <IoMdArrowDropdown size={24} />
      </div>
    </div>
  );
};

export default CategoryList;