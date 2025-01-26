"use client"

import { useState } from "react";
import Image from "next/image";
import logo from "@/assests/nextCommerceLogo.png";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex justify-between items-center sticky top-0 z-50 bg-white shadow-sm px-5 py-3">
      {/* Logo Section */}
      <Link href={'/'} className="flex-shrink-0">
        <Image src={logo} width={100} height={100} alt="logo" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <ul className="flex gap-4 px-2">
          <li className="hover:text-blue-500 cursor-pointer">Categories</li>
          <Link href={'/Product'} className="hover:text-blue-500 cursor-pointer">Products</Link>
          <li className="hover:text-blue-500 cursor-pointer">Flash Sale</li>
          <li className="hover:text-blue-500 cursor-pointer">About Us</li>
          <li className="hover:text-blue-500 cursor-pointer">Contact Us</li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex md:hidden">
        <button
          onClick={toggleMenu}
          className="focus:outline-none focus:ring-2 focus:ring-slate-400 p-2 rounded-md"
        >
          <span className="text-xl">☰</span>
        </button>
      </div>

      {/* Login Button */}
      <div className="hidden md:block">
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 hover:bg-slate-900 px-5 py-1 font-medium text-white backdrop-blur-3xl">
            Login
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col gap-4 px-5 py-3">
            <li className="hover:text-blue-500 cursor-pointer">Categories</li>
            <Link href={"/Product"} className="hover:text-blue-500 cursor-pointer">Products</Link>
            <li className="hover:text-blue-500 cursor-pointer">Flash Sale</li>
            <li className="hover:text-blue-500 cursor-pointer">About Us</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact Us</li>
          </ul>
          <div className="flex justify-center p-3">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 hover:bg-slate-900 px-5 py-1 font-medium text-white backdrop-blur-3xl">
                Login
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
