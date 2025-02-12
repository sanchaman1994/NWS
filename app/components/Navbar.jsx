import { assets } from "@/assets/assets";
import React, { use, useEffect, useState } from "react";
import Image from "next/image";

export const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image
          src={assets.header_bg_color}
          alt="header background"
          className="w-full"
        />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] 
      py-4 flex items-center justify-between ${
        isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm " : ""
      }`}
      >
        <a href="#top">
          <Image
            src={assets.logo}
            className="w-28 cursor-pointer mr-14"
            alt="logo"
          />
        </a>
        <ul
          className={` hidden md:flex item-center gap-4 lg:gap-8 rounded-full px-12 py-3 font-Ovo ${
            isScroll ? " " : "bg-white shadow-sm bg-opacity-50"
          }`}
        >
          <li>
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt="menu icon" className="w-6" />
          </button>
          <a
            className="hidden lg:flex item-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
            href="#contact"
          >
            Contact
            <Image
              src={assets.arrow_icon}
              className="w-3 self-center"
              alt="arrow icon"
            />
          </a>
          <button className="block md:hidden ml-3">
            <Image src={assets.menu_black} alt="menu icon" className="w-6" />
          </button>
        </div>
        {/* mobile menu */}
        <ul className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500">
          <div className="absolute right-6 top-6">
            <Image
              src={assets.close_black}
              alt="close icon"
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
