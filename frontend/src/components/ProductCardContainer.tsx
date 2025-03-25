import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ProductCardContainer = ({ children }: Props) => {
  return <div className="w-70 rounded-xl overflow-hidden">{children}</div>;
};

export default ProductCardContainer;
