import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-cover mb-4"
      />
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-gray-700 mt-2">${product.price}</p>
      <div className="text-yellow-500 mt-2">
        {Array(5)
          .fill()
          .map((_, i) => (
            <span key={i}>{i < product.rating.rate ? "★" : "☆"}</span>
          ))}
      </div>
      <p className="text-sm text-gray-500 mt-2">{product.category}</p>
    </div>
  );
};

export default ProductCard;
