import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import Grid from "../assets/grid.png";
import Sort from "../assets/sort.png";

const ProductList = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  const [sortType, setSortType] = useState("popular");

  useEffect(() => {
    handleSort(sortType);
  }, [sortType]);

  const handleSort = (type) => {
    setSortType(type);
    let sortedProducts = [...filteredProducts];
    if (type === "price-asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (type === "price-desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (type === "rating") {
      sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
    }
    setFilteredProducts(sortedProducts);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <label htmlFor="sort" className="mr-2">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortType}
            onChange={(e) => handleSort(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="popular">Popular</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>
        <div className="flex space-x-2">
          <button onClick={() => setViewType("grid")}>
            <img src={Grid} alt="" className="h-8 w-8" />
          </button>
          <button onClick={() => setViewType("list")}>
            <img src={Sort} alt="" className="h-8 w-8" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center space-x-2 mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`p-2 border rounded ${
              currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-white"
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
