import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../products";
import RelatedProducts from "../components/RelatedProducts";
import { Link } from "react-router-dom";
import Favorite from "../assets/favorite.png";
import Share from "../assets/share.png";
import Carticon from "../assets/carticon.png";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  useEffect(() => {
    console.log("Product:", product);
    console.log("Related Products:", relatedProducts);
  }, [product, relatedProducts]);

  return (
    <div className="flex flex-col p-4 md:p-8">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-2 md:p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto"
          />
          <div className="flex justify-between mt-4">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-1/4 h-auto cursor-pointer"
              />
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 p-2 md:p-4">
          <p className="text-gray-500">Designed {product.year}</p>
          <h1 className="text-2xl md:text-3xl font-bold">{product.title}</h1>
          <p className="text-xl md:text-2xl text-yellow-500">
            ${product.price}
          </p>
          <p className="mt-4">COLOR</p>
          <div className="flex mt-2">
            {product.colors.map((color, index) => (
              <div
                key={index}
                className={`w-6 h-6 rounded-full mr-2 cursor-pointer ${
                  selectedColor === color ? "ring-2 ring-black" : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorChange(color)}
              ></div>
            ))}
          </div>
          <p className="mt-4">{product.description}</p>
          <ul className="list-disc ml-5 mt-2">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div className="flex items-center mt-6">
            <p className="mr-4">QTY</p>
            <button
              className="bg-gray-200 p-2"
              onClick={() => handleQuantityChange(-1)}
            >
              -
            </button>
            <p className="mx-4">{quantity}</p>
            <button
              className="bg-gray-200 p-2"
              onClick={() => handleQuantityChange(1)}
            >
              +
            </button>
          </div>
          <div className="flex items-center gap-4 mt-6">
            <button className="border-2 p-2">
              <img src={Favorite} alt="Favorite" />
            </button>
            <button className="border-2 p-2">
              <img src={Share} alt="Share" />
            </button>
            <Link to="/cart">
              <button className="bg-blue-500 text-white p-3 flex gap-2 rounded">
                <img src={Carticon} alt="Cart" /> ADD TO CART
              </button>
            </Link>
          </div>
        </div>
      </div>
      <RelatedProducts relatedProducts={relatedProducts} />
    </div>
  );
};

export default ProductDetail;
