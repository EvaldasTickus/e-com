const CardSkeleton = () => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <div className="bg-gray-300 w-full h-[300px] animate-pulse"></div>
      <div className="p-4">
        <div className="h-4 bg-gray-300 w-3/4 mb-2 animate-pulse"></div>
        <div className="h-3 bg-gray-300 w-1/2 animate-pulse"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
