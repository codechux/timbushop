// src/pages/ProductDetailPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";
import Header from "../components/Header";

const ProductDetailPage = () => {
  const { id } = useParams();
  return (
    <div>
      <Header />
      <ProductDetail productId={id} />
    </div>
  );
};

export default ProductDetailPage;
