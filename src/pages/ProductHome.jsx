import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Filter from "../components/Filter";
import useFilters from "../filters";
import { categories, materials, brands, colors } from "../constant";
import ProductList from "../components/ProductList";
import products from "../products";

const productHome = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
    selectedMaterial,
    setSelectedMaterial,
    selectedBrand,
    setSelectedBrand,
    selectedColor,
    setSelectedColor,
    applyFilters,
  } = useFilters();
  return (
    <div>
      <Header />
      <Hero />
      <div className="flex">
        <div className="w-1/4 p-4">
          <Filter
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            materials={materials}
            selectedMaterial={selectedMaterial}
            setSelectedMaterial={setSelectedMaterial}
            brands={brands}
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
            colors={colors}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            applyFilters={applyFilters}
          />
        </div>
        <div className="w-3/4 p-4">
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
};

export default productHome;
