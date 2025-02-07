"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const toggleSearch = () => setIsSearchOpen((prev) => !prev);

  return (
    <nav className="relative w-full bg-white py-6 md:w-full mt-6 overflow-x-hidden">
      {/* Top Navbar Section: Avion Text, Search Bar, and User Icon */}
      <div className="flex justify-between items-center border-b border-lightGray pb-4 px-4 md:px-0">
        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-lg"
          aria-label="Toggle Navigation Menu"
        >
          {/* Add a hamburger icon or use text "Menu" */}
          ☰
        </button>

        {/* Search Bar (Left) */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSearch}
            aria-label="Search"
            className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200"
          >
            <CiSearch className="text-lg" />
          </button>
          {isSearchOpen && (
            <input
              type="text"
              placeholder="Search"
              className="w-48 md:w-64 border placeholder:text-white bg-black/40 text-white border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black font-trolley"
            />
          )}
        </div>

        {/* Logo: Avion (Center) */}
        <h1 className="text-2xl font-normal font-clash leading-[29.52px] text-darkBlue mx-auto">
          Avion
        </h1>

        {/* User Icon (Right) */}
        <div className="flex items-center space-x-4">
          <Link href="/" aria-label="User Profile">
            <div className="flex items-center justify-center w-8 h-8 rounded-full border border-transparent hover:bg-darkPrimary">
              <Image
                src="/images/user.png"
                alt="User Profile Icon"
                width={24}
                height={24}
              />
            </div>
          </Link>

          <Link href="/usercart" aria-label="Cart">
            <div className="flex items-center justify-center w-8 h-8 rounded-full border border-transparent hover:bg-darkPrimary">
              <Image
                src="/images/cart.png"
                alt="Cart Icon"
                width={24}
                height={24}
              />
            </div>
          </Link>
        </div>
      </div>

      {/* Navigation Links Section (Below Avion) */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex flex-row justify-center mt-4 space-x-8 md:ml-16 px-4 md:px-0`}
      >
        <Link href="/" className="block text-center border-b border-transparent py-1 hover:border-darkPrimary">
          Home
        </Link>
        <Link href="/" className="block text-center border-b border-transparent py-1 hover:border-darkPrimary">
          Plant Pots
        </Link>
        <Link href="/" className="block text-center border-b border-transparent py-1 hover:border-darkPrimary">
          Ceramics
        </Link>
        <Link href="/" className="block text-center border-b border-transparent py-1 hover:border-darkPrimary">
          Tables
        </Link>
        <Link href="/" className="block text-center border-b border-transparent py-1 hover:border-darkPrimary">
          Chairs
        </Link>
        <Link href="/" className="block text-center border-b border-transparent py-1 hover:border-darkPrimary">
          Crockery
        </Link>
        <Link href="/" className="block text-center border-b border-transparent py-1 hover:border-darkPrimary">
          Tableware
        </Link>
        <Link href="/" className="block text-center border-b border-transparent py-1 hover:border-darkPrimary">
          Cutlery
        </Link>
        <Link href="/products" className="block text-center border-b border-transparent py-1 hover:border-darkPrimary">
          All Products
        </Link>
        <Link href="/about" className="block text-center border-b border-transparent py-1 hover:border-darkPrimary">
          About
        </Link>
      </div>

      {/* Search Box */}
      {isSearchOpen && (
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full border placeholder:text-white bg-black/40 text-white border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
      )}
    </nav>
  );
};

export default Header;