import React from "react";

const Product = ({ image, title, description , loading ,priority  , isLCP }) => {
  return (
    <div className="w-70 border-2 m-5 rounded-lg  bg-white">

      {/* IMAGE */}
      <div className="h-40 overflow-hidden">
        <img
          src={image}
          alt={title}
            loading={loading} 
              fetchpriority={priority}
              decoding="async"
               width={isLCP ? 375 : 280}
          height={isLCP ? 210 : 160}
          className="w-full h-full object-cover 
                     transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* TEXT */}
      <div className="p-3">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>

    </div>
  );
};

export default Product;
