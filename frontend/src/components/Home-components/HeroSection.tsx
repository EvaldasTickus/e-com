import herobg from "../../assets/hero-section-img.webp";

const HeroSection = () => {
  return (
    <div
      className="w-full h-[65vh] md:h-[60vh] sm:h-[55vh] xl:h-[75vh] bg-cover bg-top relative bg-no-repeat flex flex-col justify-center items-center px-8 sm:px-4"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div className="mt-[260px] w-[200px] text-center">
        <p className="txt-shadow border-b-2 text-white font-bold pb-2 text-6xl">
          New
        </p>
        <p className="txt-shadow border-b-2 text-white ml-30 pb-2 text-4xl">
          Selection
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
