import React from "react";

const Sidebar = () => {
  return (
    <div className="w-1/4 p-4">
      <h2 className="text-lg font-bold mb-4">Categories</h2>
      <ul className="mb-4">
        <li className="mb-2">Chairs</li>
        <li className="mb-2">Sofas</li>
        <li className="mb-2">Beds</li>
        <li className="mb-2">Boards</li>
        <li className="mb-2">Lamps</li>
        <li className="mb-2">Textile</li>
        <li className="mb-2">Decor</li>
      </ul>

      <h2 className="text-lg font-bold mb-4">Filter By</h2>
      <div className="mb-4">
        <h3 className="mb-2">Price</h3>
        <input type="range" min="150" max="1500" className="w-full" />
        <div className="flex justify-between text-sm">
          <span>$150</span>
          <span>$1500</span>
        </div>
      </div>

      <h2 className="text-lg font-bold mb-4">Materials</h2>
      <ul className="mb-4">
        <li className="mb-2">Wood</li>
        <li className="mb-2">Metal</li>
        <li className="mb-2">Leather</li>
        <li className="mb-2">Plastic</li>
        <li className="mb-2">Fabric</li>
      </ul>

      <h2 className="text-lg font-bold mb-4">Brands</h2>
      <ul className="mb-4">
        <li className="mb-2">Cosmo</li>
        <li className="mb-2">Seletti</li>
        <li className="mb-2">Laforma</li>
      </ul>

      <h2 className="text-lg font-bold mb-4">Colors</h2>
      <div className="flex flex-wrap gap-2">
        <span className="h-6 w-6 bg-yellow-500 rounded-full"></span>
        <span className="h-6 w-6 bg-red-500 rounded-full"></span>
        <span className="h-6 w-6 bg-green-500 rounded-full"></span>
        <span className="h-6 w-6 bg-blue-500 rounded-full"></span>
        <span className="h-6 w-6 bg-purple-500 rounded-full"></span>
        <span className="h-6 w-6 bg-pink-500 rounded-full"></span>
        <span className="h-6 w-6 bg-teal-500 rounded-full"></span>
        <span className="h-6 w-6 bg-black rounded-full"></span>
        <span className="h-6 w-6 bg-white border rounded-full"></span>
      </div>
    </div>
  );
};

export default Sidebar;
