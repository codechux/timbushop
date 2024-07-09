import React, { useState } from "react";
import CartItem from "../components/CartItem";
import Greensofa from "../assets/greenSofa.jpg";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const initialCartItems = [
  {
    id: 1,
    name: "Scandinavian Sofa",
    brand: "Aqua Globes",
    price: 349.0,
    quantity: 1,
    image: Greensofa,
  },
  {
    id: 2,
    name: "Sleeper Sofa",
    brand: "Aqua Globes",
    price: 349.0,
    quantity: 1,
    image: Greensofa,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [coupon, setCoupon] = useState("");

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, amount) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const handleCouponChange = (e) => {
    setCoupon(e.target.value);
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header />
      <div className="p-8">
        <h1 className="text-3xl font-semibold mb-4">Shopping Cart</h1>
        <div className="mb-4">
          <Link to="/">
            <button className="text-blue-500">← Continue shopping</button>
          </Link>
        </div>
        <div className="flex justify-between mb-4">
          <span className="text-lg font-semibold">Products</span>
          <span className="text-lg font-semibold">Qty</span>
          <span className="text-lg font-semibold">Price</span>
        </div>
        <hr />
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={handleRemove}
            onQuantityChange={handleQuantityChange}
          />
        ))}
        <div className="mt-8">
          <h2 className="text-xl mb-4">Do you have a coupon?</h2>
          <input
            type="text"
            value={coupon}
            onChange={handleCouponChange}
            className="border p-2 mr-4"
            placeholder="Enter your coupon code"
          />
          <button className="bg-blue-500 text-white px-4 py-2">
            Apply Coupon
          </button>
        </div>
        <div className="flex justify-end mt-8">
          <div className="text-right">
            <p className="text-lg">Subtotal</p>
            <p className="text-2xl font-semibold">${subtotal.toFixed(2)}</p>
            <Link to="/checkout">
              <button className="bg-blue-500 text-white px-4 py-2 mt-4">
                PROCEED TO CHECKOUT
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
