"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = ["Home", "Services", "Portfolio", "About", "Contact"];

  const getPath = (item) => {
    if (item === "Home") return "/";
    if (item === "Services") return "/services";
    if (item === "Portfolio") return "/portfolio";
    
    if (item === "About") return "/about";
    if (item === "Contact") return "/contact";
    return `/${item.toLowerCase()}`;
  };

  const isActive = (item) => {
    const path = getPath(item);
    return pathname === path;
  };

  return (
    <header className="bg-orange-50 dark:bg-black shadow-md sticky top-0 z-50 h-auto">
      <div className="container mx-auto flex justify-between items-center p-6 lg:px-20 px-10">

        {/* Logo with Next.js Image */}
        <Link href="/" className="flex items-center">
          <div className="relative sm:w-40 w-32 h-10">
            {/* Light logo - visible in light mode */}
            <Image 
              src="/darklogo.svg" 
              alt="Cewexa" 
              width={160}
              height={40}
              className="absolute inset-0 sm:w-40 w-32 dark:hidden"
              priority
            />
            {/* Dark logo - visible in dark mode */}
            <Image 
              src="/logo.svg" 
              alt="Cewexa" 
              width={160}
              height={40}
              className="absolute inset-0 sm:w-40 w-32 hidden dark:block"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-10">
          {navItems.map((item) => (
            <Link
              key={item}
              href={getPath(item)}
              className={`2xl:text-[16px] font-poppins transition-colors duration-200 ${
                isActive(item)
                  ? "text-orange-600 font-semibold"
                  : "text-gray-700 dark:text-gray-300 hover:text-orange-500"
              }`}
            >
              {item}
            </Link>
          ))}
        </nav>
        
        <a href="/contact" className="hidden sm:block">
          <button className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-200 font-semibold cursor-pointer tracking-widest">
           Get A Quote
          </button>
        </a>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center group"
        >
          <span
            className={`block w-6 h-[3px] bg-gray-700 dark:bg-gray-200 rounded transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-[7px]" : "-translate-y-[6px]"
            }`}
          ></span>
          <span
            className={`block w-6 h-[3px] bg-gray-700 dark:bg-gray-200 rounded transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-6 h-[3px] bg-gray-700 dark:bg-gray-200 rounded transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[7px]" : "translate-y-[6px]"
            }`}
          ></span>
        </button>

      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-orange-100 px-4 py-4 space-y-3 dark:bg-gray-950 dark:text-gray-50 origin-top animate-slideDown">
          {navItems.map((item) => (
            <Link
              key={item}
              href={getPath(item)}
              onClick={() => setIsOpen(false)}
              className={`block ${
                isActive(item)
                  ? "text-orange-600 font-semibold"
                  : "text-gray-700 dark:text-gray-300 hover:text-orange-600"
              }`}
            >
              {item}
            </Link>
          ))}
        </div>
      )}

    </header>
  );
}