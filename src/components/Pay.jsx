import React from "react";
import { Link } from "react-router-dom";
import Sofa from "../assets/greenSofa.jpg";
import Delete from "../assets/delete.png";

const Pay = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col lg:flex-row justify-between mb-6 gap-5">
        {/* Hidden on small devices */}
        <div className="hidden lg:block w-full lg:w-1/2 mb-6 lg:mb-0">
          <h1 className="text-3xl font-bold mb-2">Cart Overview</h1>
          <p className="text-gray-600 mb-6">
            Items in your cart are not reserved - check out now to make them
            yours
          </p>

          <div className="mb-4 p-4 border-2 rounded-md flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={Sofa}
                alt="Sofa"
                className="h-16 w-16 object-cover rounded-md mr-4"
              />
              <div>
                <p className="font-semibold">Scandinavian Sofa</p>
                <p className="text-gray-600">Aqua Globes</p>
              </div>
            </div>
            <div className="flex items-center">
              <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md">
                -
              </button>
              <span className="px-4">1</span>
              <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md">
                +
              </button>
            </div>
            <div>
              <p className="font-semibold">$349.00</p>
            </div>
            <button className="ml-4">
              <img src={Delete} alt="Delete" className="h-6 w-6" />
            </button>
          </div>

          {/* Additional cart items can go here */}

          <div className="border-t pt-4">
            <div className="flex justify-end gap-4">
              <p className="text-xl font-semibold">Subtotal</p>
              <p className="text-xl font-semibold">$698.00</p>
            </div>
          </div>
        </div>

        {/* Payment details form */}
        <div className="w-full lg:w-1/2 bg-white p-6 rounded-md border-2">
          <div className="flex flex-wrap items-center justify-between mb-6 space-y-4 lg:space-y-0">
            <div className="flex items-center text-blue-500 space-x-2">
              <div className="h-6 w-6 lg:h-8 lg:w-8 rounded-full border-2 border-blue-500 flex items-center justify-center">
                1
              </div>
              <p className="text-xs lg:text-base">Shipping</p>
            </div>
            <div className="flex-1 border-t border-gray-300 mx-2"></div>
            <div className="flex items-center text-blue-500 space-x-2">
              <div className="h-6 w-6 lg:h-8 lg:w-8 rounded-full border-2 border-blue-500 flex items-center justify-center">
                2
              </div>
              <p className="text-xs lg:text-base">Payment</p>
            </div>
            <div className="flex-1 border-t border-gray-300 mx-2"></div>
            <div className="flex items-center text-gray-500 space-x-2">
              <div className="h-6 w-6 lg:h-8 lg:w-8 rounded-full border-2 border-gray-500 flex items-center justify-center">
                3
              </div>
              <p className="text-xs lg:text-base">Confirmation</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-6">Payment Details</h2>
          <form>
            <div className="grid grid-cols-1 gap-4 mb-6">
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="cardNumber"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="xxxx xxxx xxxx xxxx"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="cardHolder"
                >
                  Card Holder Name
                </label>
                <input
                  type="text"
                  id="cardHolder"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Full Name"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="expirationDate"
                  >
                    Expiration Date
                  </label>
                  <input
                    type="text"
                    id="expirationDate"
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="cvv"
                  >
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="123"
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="billingAddress"
                >
                  Billing Address
                </label>
                <input
                  type="text"
                  id="billingAddress"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Enter your billing address"
                />
              </div>
            </div>
            <Link to="/confirmation">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md"
              >
                CONTINUE TO CONFIRMATION
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Pay;
