import React from "react";
import checkIcon from "../assets/check.png";

const OrderSuccess = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col justify-center items-center mb-6 gap-5">
        <div className="w-full bg-white p-6 rounded-md border-2">
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
            <div className="flex items-center text-blue-500 space-x-2">
              <div className="h-6 w-6 lg:h-8 lg:w-8 rounded-full border-2 border-blue-500 flex items-center justify-center">
                3
              </div>
              <p className="text-xs lg:text-base">Confirmation</p>
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
