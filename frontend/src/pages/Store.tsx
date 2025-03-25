import ProductGrid from "../components/ProductGrid";
import bgImage from "../assets/str-bg.jpeg"


const Store = () => {

  return (
      <div className="w-full grid grid-cols-1 text-center lg:grid-cols-[auto,1fr] bg-no-repeat bg-fixed bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}>
        {/* Main content area */}
        <div className="lg:ml-8">
          <ProductGrid />
        </div>
      </div>
  );
};

export default Store;