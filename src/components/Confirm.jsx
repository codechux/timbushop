import React from "react";
import image1 from "../assets/greenSofa.jpg";
import image2 from "../assets/greenSofa.jpg";
import delete1 from "../assets/delete.png";
import { Link } from "react-router-dom";

const Confirm = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col lg:flex-row justify-between mb-6 gap-5">
        <div className="hidden md:block w-full lg:w-1/2 mb-6 lg:mb-0">
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
                src={image2}
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
            <div className="flex justify-end gap-4">
              <p className="text-xl font-semibold">Shipping Cost</p>
              <p className="text-xl font-semibold">$100.50</p>
            </div>
            <div className="flex justify-end gap-4">
              <p className="text-xl font-semibold">VAT</p>
              <p className="text-xl font-semibold">$0.50</p>
            </div>
            <div className="flex justify-end gap-4">
              <p className="text-xl font-semibold">Total</p>
              <p className="text-xl font-semibold">$800.00</p>
            </div>
          </div>
        </div>

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

          <h2 className="text-2xl font-semibold mb-6">Confirmation Details</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Payment</h3>
            <div className="p-4 border rounded-md flex justify-between items-center">
              <span>50 ************8901</span>
              <span>01/24</span>
              <a href="#" className="text-blue-500">
                Edit
              </a>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Shipping Address</h3>
            <div className="p-4 border rounded-md">
              <p className="mb-1">
                <strong>Name:</strong> Jones Walker
              </p>
              <p className="mb-1">
                <strong>Street:</strong> University of Nigeria, Nsukka
              </p>
              <p className="mb-1">
                <strong>City:</strong> Enugu
              </p>
              <a href="#" className="text-blue-500">
                Edit
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
            <div className="p-4 border rounded-md">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>$698.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping Cost</span>
                <span>$100.50</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>VAT</span>
                <span>$0.50</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>$800.00</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <Link to="/">
              <button className="bg-gray-500 text-white py-2 px-4 rounded-md">
                CANCEL
              </button>
            </Link>
            <Link to="/order-successful">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
                PLACE ORDER
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
