"use client"
import { useState } from "react";
import { Cross, MenuIcon } from "lucide-react";

const AllProductSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to toggle sidebar

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        className={`md:hidden fixed ${isSidebarOpen ? "top-32 left-56 " : "top-32 left-5"}  bg-gray-800 text-white p-2 rounded z-50`}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <MenuIcon size={24} /> : <Cross size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`scrollbar-thin overflow-y-auto fixed top-28 left-0 h-screen bg-white shadow-lg p-4 transition-transform duration-300 z-40
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:pl-10 md:block`}
      >
        <h2 className="text-xl font-bold mb-4">Filters</h2>
        <PriceRenge />
        <Category />
        <Ratings />
      </div>
    </>
  );
};

export default AllProductSidebar;

const PriceRenge = () => (
  <div className="price-range p-3 w-[250px] rounded border border-gray-200 my-10">
    <h2 className="border-l-2 p-3 text-2xl">Price Range</h2>
    <ul className="p-2 space-y-2">
      <li>
        <input type="checkbox" id="price1" /> <label className="px-2" htmlFor="price1">$20.00 - $50.00</label>
      </li>
      <li>
        <input type="checkbox" id="price2" /> <label className="px-2" htmlFor="price2">$50.00 - $100.00</label>
      </li>
      <li>
        <input type="checkbox" id="price3" /> <label className="px-2" htmlFor="price3">$100.00 - $200.00</label>
      </li>
    </ul>
  </div>
);

const Category = () => (
  <div className="category p-3 w-[250px] rounded border border-gray-200 my-10">
    <h2 className="border-l-2 p-3 text-2xl">Category / Brands</h2>
    <ul className="p-2 space-y-2">
      <li>
        <input type="checkbox" id="category1" /> <label className="px-2" htmlFor="category1">Category 1</label>
      </li>
      <li>
        <input type="checkbox" id="category2" /> <label className="px-2" htmlFor="category2">Category 2</label>
      </li>
    </ul>
  </div>
);

const Ratings = () => (
  <div className="ratings p-3 w-[250px] rounded border border-gray-200 my-10">
    <h2 className="border-l-2 p-3 text-2xl">Ratings</h2>
    <ul className="p-2 space-y-2">
      <li>
        <input type="checkbox" id="rating1" /> <label className="px-2" htmlFor="rating1">1 Star</label>
      </li>
      <li>
        <input type="checkbox" id="rating2" /> <label className="px-2" htmlFor="rating2">2 Star</label>
      </li>
    </ul>
  </div>
);
