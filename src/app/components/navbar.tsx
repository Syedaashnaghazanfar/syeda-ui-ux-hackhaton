"use client";
import Image from "next/image";
import Link from "next/link"; 
import user from "@/images/Vector (12).png";
import search from "@/images/icn settings icn-xs (6).png";
import cart from "@/images/icn settings icn-xs (7).png";
import mail from "@/images/icn settings icn-xs (8).png";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="w-full bg-white shadow-md">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-between items-center px-6 lg:px-16 h-16">
        {/* Logo */}
        <h3 className="font-Montserrat font-semibold text-xl">Bandage</h3>

        {/* Menu Links */}
        <ul className="flex space-x-6 font-Montserrat text-sm text-gray-600">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/pages">Pages</Link></li>
        </ul>

        {/* Icons Section */}
        <div className="flex space-x-4 items-center">
          <Image src={user} alt="user" width={16} height={16} />
          <Image src={search} alt="search" width={16} height={16} />
          <Image src={cart} alt="cart" width={16} height={16} />
          <Image src={mail} alt="mail" width={16} height={16} />
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <h3 className="font-Montserrat font-semibold text-xl">Bandage</h3>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-[#252B42]">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="bg-[#bebebe] text-white flex flex-col items-center py-4 space-y-3">
          <ul className="space-y-2 font-Montserrat text-base text-black">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/pages">Pages</Link></li>
          </ul>
          <button onClick={toggleMenu} className="text-sm text-black font-Montserrat">
           - Close Menu -
          </button>
        </div>
      )}
    </nav>
  );
}
