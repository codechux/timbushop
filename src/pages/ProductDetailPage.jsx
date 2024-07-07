// src/pages/ProductDetailPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";
import Header from "../components/Header";
import Hero from "../components/Hero";

const ProductDetailPage = () => {
  const { id } = useParams();
  return (
    <div>
      <Header />
      <Hero />
      <ProductDetail productId={id} />
    </div>
  );
};

export default ProductDetailPage;
