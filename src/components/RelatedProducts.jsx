import React from "react";
import { Link } from "react-router-dom";

const RelatedProducts = ({ relatedProducts }) => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Related Products</h2>
      <div className="flex justify-between">
        {relatedProducts.map((product) => (
          <div key={product.id} className="w-1/4 p-2">
            <Link to={`/product/${product.id}`}>
              <div className="border p-4 rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto"
                />
                <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                <div className="flex items-center mt-1">
                  <div className="flex text-yellow-500">
                    {Array(5)
                      .fill()
                      .map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          fill={i < product.rating ? "currentColor" : "none"}
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                          />
                        </svg>
                      ))}
                  </div>
                </div>
                <p className="text-lg font-bold mt-2">${product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button className="p-2 bg-gray-200 mx-1">{"<<"}</button>
        <button className="p-2 bg-gray-200 mx-1">1</button>
        <button className="p-2 bg-gray-200 mx-1">2</button>
        <button className="p-2 bg-gray-200 mx-1">{"..."}</button>
        <button className="p-2 bg-gray-200 mx-1">10</button>
        <button className="p-2 bg-gray-200 mx-1">{">>"}</button>
      </div>
    </div>
  );
};

export default RelatedProducts;
