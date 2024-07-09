import React from "react";

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center">
        <img src={item.image} alt={item.name} className="w-20 h-20 mr-4" />
        <div>
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-500">{item.brand}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button
          className="bg-gray-200 px-2 py-1"
          onClick={() => onQuantityChange(item.id, -1)}
        >
          -
        </button>
        <span className="px-4">{item.quantity}</span>
        <button
          className="bg-gray-200 text-white px-2 py-1"
          onClick={() => onQuantityChange(item.id, 1)}
        >
          +
        </button>
      </div>
      <p className="text-lg font-semibold">${item.price}</p>
      <button onClick={() => onRemove(item.id)} className="text-red-500">
        🗑️
      </button>
    </div>
  );
};

export default CartItem;
