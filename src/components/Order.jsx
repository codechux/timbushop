import React from "react";
import checkIcon from "../assets/check.png";

const OrderSuccess = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col justify-center items-center mb-6 gap-5">
        <div className="w-full bg-white p-6 rounded-md border-2">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-white">
                <div className="h-8 w-8 rounded-full border-2 border-blue-500 bg-blue-500 flex items-center justify-center">
                  ✓
                </div>
                <p className="ml-2 text-blue-500">Shipping</p>
              </div>
              <div className="w-12 border-t border-gray-300"></div>
              <div className="flex items-center text-white">
                <div className="h-8 w-8 rounded-full border-2 border-blue-500 bg-blue-500 flex items-center justify-center">
                  ✓
                </div>
                <p className="ml-2 text-blue-500">Payment</p>
              </div>
              <div className="w-12 border-t border-gray-300"></div>
              <div className="flex items-center text-white">
                <div className="h-8 w-8 rounded-full border-2 border-blue-500 bg-blue-500 flex items-center justify-center">
                  ✓
                </div>
                <p className="ml-2 text-blue-500">Confirm Order</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white p-6 rounded-md border-2 flex flex-col items-center">
              <div className="mb-4 bg-green-600 rounded-full h-14 w-14">
                <img
                  src={checkIcon}
                  alt="Order Successful"
                  className="h-full w-full"
                />
              </div>
              <h2 className="text-2xl font-semibold mb-2">
                Your items have been successfully ordered
              </h2>
              <p className="text-xl mb-2">Order ID: 234 455 KJ</p>
              <p>
                To track your order,{" "}
                <a href="#" className="text-blue-500 underline">
                  click here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
