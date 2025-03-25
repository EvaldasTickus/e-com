import aboutUsImg from "../../assets/about-us-section.avif";

const AboutUsSection = () => {
  return (
    <>
      <div
        id="about"
        className="w-full h-[70vh] bg-cover bg-center bg-no-repeat relative mb-20 flex flex-col justify-center items-start px-8 md:px-16"
        style={{ backgroundImage: `url(${aboutUsImg})` }}
      >
        <p className="txt-shadow text-white text-5xl md:text-7xl font-bold mb-4">
          About us
        </p>
        <p className="txt-shadow text-white text-lg md:text-2xl max-w-2xl">
          As a leading European online platform for fashion and lifestyle, we
          deliver to customers in 25 countries. In our fashion store, they can
          find a wide assortment from more than 6,000 brands.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-16 pb-20">
        <div className="space-y-4 text-center md:text-left">
          <p className="text-2xl md:text-3xl font-bold">Who We Are</p>
          <p className="text-gray-700 text-lg max-w-md mx-auto md:mx-0">
            We have grown from a pioneer in e-commerce to building the leading
            pan-European ecosystem for fashion and lifestyle e-commerce.
          </p>
        </div>

        <div className="space-y-4 text-center md:text-left">
          <p className="text-2xl md:text-3xl font-bold">What We Do</p>
          <p className="text-gray-700 text-lg max-w-md mx-auto md:mx-0">
            As an online platform for fashion and lifestyle, we connect
            customers, brands, and partners.
          </p>
        </div>

        <div className="space-y-4 text-center md:text-left">
          <p className="text-2xl md:text-3xl font-bold">Brands & Retailers</p>
          <p className="text-gray-700 text-lg max-w-md mx-auto md:mx-0">
            At e-commerce, we are passionate about connecting top-quality brands
            and retailers with customers who appreciate excellence. We offer a
            seamless platform where brands can showcase their products to a
            broad audience, and retailers can source high-quality items with
            confidence.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUsSection;
