import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-2 rounded-lg shadow-md h-4/5">
      <img src={product.image} alt={product.title} className="w-4/5 h-2/3 mx-auto" />
      <div className="p-2 h-1/3">
        <h2 className="text-lg font-semibold">{product.title}</h2>
        {/* <p className="text-sm text-gray-500">{product.description}</p> */}
        <p className="text-lg font-bold text-red-500">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;