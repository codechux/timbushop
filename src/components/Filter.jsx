import React from "react";

const Filter = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  materials,
  selectedMaterial,
  setSelectedMaterial,
  brands,
  selectedBrand,
  setSelectedBrand,
  colors,
  selectedColor,
  setSelectedColor,
  applyFilters,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
      {/* Categories */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Categories</h3>
        <ul>
          {categories.map((category) => (
            <li
              key={category}
              className={`cursor-pointer ${
                selectedCategory === category ? "font-bold" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Filter By</h3>
        <div className="flex justify-between text-sm mt-2">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
        <input
          type="range"
          min="0"
          max="1500"
          value={priceRange[0]}
          onChange={(e) => setPriceRange([e.target.value, priceRange[1]])}
          className="w-full mt-2"
        />
        <input
          type="range"
          min="0"
          max="1500"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], e.target.value])}
          className="w-full mt-2"
        />
      </div>

      {/* Materials */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Materials</h3>
        <ul>
          {materials.map((material) => (
            <li
              key={material}
              className={`cursor-pointer ${
                selectedMaterial === material ? "font-bold" : ""
              }`}
              onClick={() => setSelectedMaterial(material)}
            >
              {material}
            </li>
          ))}
        </ul>
      </div>

      {/* Brands */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Brands</h3>
        <ul>
          {brands.map((brand) => (
            <li
              key={brand}
              className={`cursor-pointer ${
                selectedBrand === brand ? "font-bold" : ""
              }`}
              onClick={() => setSelectedBrand(brand)}
            >
              {brand}
            </li>
          ))}
        </ul>
      </div>

      {/* Colors */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Colors</h3>
        <div className="flex flex-wrap">
          {colors.map((color) => (
            <div
              key={color}
              className={`w-8 h-8 rounded-full cursor-pointer mr-2 mb-2 ${
                selectedColor === color ? "ring-2 ring-pink-500" : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            ></div>
          ))}
        </div>
      </div>

      <button
        onClick={applyFilters}
        className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Filter;
