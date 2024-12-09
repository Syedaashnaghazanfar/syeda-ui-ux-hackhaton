// components/Navbar.js
"use client";
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-[91px] px-[54px]">
      <nav className="w-full h-full flex justify-between items-center">
        {/* Brand Section */}
        <div className="text-[#252B42] font-bold text-[24px] leading-[32px]">
          Bandage
        </div>

        {/* Navbar Links for Desktop */}
        <div className="hidden md:flex space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link legacyBehavior href="/">
                <a className="font-semibold text-sm text-[#737373]">Home</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/about">
                <a className="font-semibold text-sm text-[#737373]">About</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/">
                <a className="font-semibold text-sm text-[#737373]">Services</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/contact">
                <a className="font-semibold text-sm text-[#737373]">Contact</a>
              </Link>
            </li>
          </ul>
        </div>

        {/* Button Section for Desktop */}
        <div className="hidden md:flex items-center justify-end space-x-8 mt-4">
          {/* Login Link */}
          <Link legacyBehavior href="/login">
            <a className="font-semibold text-sm text-[#23A6F0]">Login</a>
          </Link>

          {/* Become a Member Button */}
          <Link legacyBehavior href="/learn-more">
            <a className="font-semibold text-sm text-white flex items-center gap-2 px-6 py-3 bg-[#23A6F0] rounded-[5px]">
              Become a Member
              <svg className="w-[12px] h-[10px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 10" fill="none" stroke="#FFFFFF">
                <path d="M2 5h8M5 2l3 3-3 3" />
              </svg>
            </a>
          </Link>
        </div>

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
      </nav>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-[91px] left-0 right-0 p-4">
          <ul className="space-y-4">
            <li>
              <Link legacyBehavior href="/">
                <a className="font-semibold text-sm text-[#737373]">Home</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/about">
                <a className="font-semibold text-sm text-[#737373]">About</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/">
                <a className="font-semibold text-sm text-[#737373]">Services</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/contact">
                <a className="font-semibold text-sm text-[#737373]">Contact</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/login">
                <a className="font-semibold text-sm text-[#23A6F0]">Login</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/learn-more">
                <a className="font-semibold text-sm text-white flex items-center gap-2 px-6 py-3 bg-[#23A6F0] rounded-[5px]">
                  Become a Member
                  <svg className="w-[12px] h-[10px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 10" fill="none" stroke="#FFFFFF">
                    <path d="M2 5h8M5 2l3 3-3 3" />
                  </svg>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
