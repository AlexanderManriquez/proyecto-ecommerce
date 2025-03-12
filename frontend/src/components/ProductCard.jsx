import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-2 rounded-lg shadow-md">
      <img src={product.image} alt={product.name} className="w-full" />
      <div className="p-2">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-sm text-gray-500">{product.description}</p>
        <p className="text-lg font-semibold">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;