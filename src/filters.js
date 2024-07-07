import { useState } from "react";

const useFilters = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1500]);
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const applyFilters = () => {};

  return {
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
  };
};

export default useFilters;
