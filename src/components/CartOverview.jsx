import React from "react";
import image1 from "../assets/greenSofa.jpg";
import delete1 from "../assets/delete.png";
import { Link } from "react-router-dom";

const CartOverview = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col lg:flex-row justify-between mb-6 gap-5">
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <h1 className="text-3xl font-bold mb-2">Cart Overview</h1>
          <p className="text-gray-600 mb-6">
            Items in your cart are not reserved - check out now to make them
            yours
          </p>

          <div className="mb-4 p-4 border-2 rounded-md flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={image1}
                alt="Scandinavian Sofa"
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
              <img src={delete1} alt="Delete" className="h-6 w-6" />
            </button>
          </div>

          <div className="mb-4 p-4 border-2 rounded-md flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={image1}
                alt="Sleeper Sofa"
                className="h-16 w-16 object-cover rounded-md mr-4"
              />
              <div>
                <p className="font-semibold">Sleeper Sofa</p>
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
              <img src={delete1} alt="Delete" className="h-6 w-6" />
            </button>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-end gap-4">
              <p className="text-xl font-semibold">Subtotal</p>
              <p className="text-xl font-semibold">$698.00</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-white p-6 rounded-md border-2">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-blue-500">
                <div className="h-8 w-8 rounded-full border-2 border-blue-500 flex items-center justify-center">
                  1
                </div>
                <p className="ml-2">Shipping</p>
              </div>
              <div className="w-12 border-t border-gray-300"></div>
              <div className="flex items-center text-gray-500">
                <div className="h-8 w-8 rounded-full border-2 border-gray-500 flex items-center justify-center">
                  2
                </div>
                <p className="ml-2">Payment</p>
              </div>
              <div className="w-12 border-t border-gray-300"></div>
              <div className="flex items-center text-gray-500">
                <div className="h-8 w-8 rounded-full border-2 border-gray-500 flex items-center justify-center">
                  3
                </div>
                <p className="ml-2">Confirmation</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-6">Shipping Information</h2>
          <form>
            <div className="grid grid-cols-1 gap-4 mb-6">
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="address"
                >
                  Address City
                </label>
                <input
                  type="text"
                  id="address"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Enter your shipping address"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="country"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="Nigeria"
                    value="Nigeria"
                    readOnly
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="postal"
                  >
                    Postal Code
                  </label>
                  <input
                    type="text"
                    id="postal"
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="Enter your postal code"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="phoneNumber"
                  >
                    Phone Number
                  </label>
                  <div className="flex">
                    <span className="flex items-center px-3 border bg-gray-200">
                      🇳🇬
                    </span>
                    <input
                      type="text"
                      id="phoneNumber"
                      className="w-full px-4 py-2 border rounded-md"
                      placeholder="0812 345 6789"
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="delivery"
                  >
                    Method of Delivery
                  </label>
                  <select
                    id="delivery"
                    className="w-full px-4 py-2 border rounded-md"
                  >
                    <option value="">Select a method of delivery</option>
                    <option value="door">Door Delivery</option>
                    <option value="pickup">Pick up at a location</option>
                  </select>
                </div>
              </div>
            </div>
            <Link to="/payment">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md"
              >
                CONTINUE TO PAYMENT
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CartOverview;
