const ProductSkeleton = () => {
  return (
    <div className="w-70 border-2 m-5 rounded-lg bg-white animate-pulse">

      <div className="h-40 bg-gray-300 rounded-t-lg"></div>

    
      <div className="p-3 space-y-2">
    
        <div className="h-5 bg-gray-300 rounded w-3/4">
        </div>

        <div className="h-3 bg-gray-200 rounded w-full"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
      </div>

    </div>
  );
};

export default ProductSkeleton;
