"use client";

import React, {useEffect, useState} from "react";
import {Mail, Menu, XCircle} from "lucide-react";

const menuItems = [
  {text: "Products", url: "#"},
  {text: "Profile", url: "#"},
];

const iconComponents = [{Icon: Mail, url: "#"}];

const IconList = () => (
  <div className="absolute inset-x-0 bottom-5 flex items-center justify-evenly space-x-2 px-6 py-4">
    {iconComponents.map(({Icon, url}) => (
      <a key={url} href={url}>
        <Icon className="text-2xl" />
      </a>
    ))}
  </div>
);

const MobileMenu = ({onClose}: {onClose: () => void}) => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!(event.target as Element).closest(".main-nav-menu-mobile")) {
        onClose();
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [onClose]);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [onClose]);

  return (
    <div className="absolute inset-0 z-50 w-[270px] border-r border-dashed border-slate-400/30 bg-gray-200/50 shadow-sm backdrop-blur-3xl md:w-[300px] lg:flex lg:w-[300px] lg:flex-col lg:shadow-none">
      <div className="flex items-center space-x-2 p-5">
        <h2 className="text-2xl font-bold text-black">Learn</h2>
      </div>
      <ul className="flex-col space-y-5 px-8 py-5 pb-8 font-bold text-black lg:hidden">
        {menuItems.map(({text, url}, index) => (
          <li
            key={index}
            className="transition-all duration-100 ease-linear hover:w-fit hover:underline hover:underline-offset-4"
          >
            <a href={url}>{text}</a>
          </li>
        ))}
      </ul>
      <div className="space-y-2 px-6 lg:flex lg:items-center">
        <a
          href="#"
          className="flex items-center justify-center rounded-md border bg-[#1EBFC1] px-6 py-2.5 font-semibold text-white transition duration-200 hover:shadow-lg hover:drop-shadow"
        >
          Login
        </a>
      </div>
      <IconList />
    </div>
  );
};

const AppNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  return (
    <div className="top-0 z-50 w-full bg-transparent py-2.5 lg:relative lg:py-5">
      <nav className="sticky inset-x-0 top-0 z-10 mx-auto max-w-4xl px-5 py-2.5 lg:border-none lg:py-4 xl:max-w-5xl">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-black">Company LOGO</h2>
          <ul className="hidden space-x-10 text-base font-bold text-black/60 lg:flex">
            {menuItems.map(({text, url}, index) => (
              <li
                key={index}
                className="transition-all duration-100 ease-linear hover:w-fit hover:underline hover:underline-offset-4"
              >
                <a href={url}>{text}</a>
              </li>
            ))}
          </ul>
          <div className="hidden items-center gap-x-2 lg:flex">
            <button className="flex items-center justify-center px-6 py-2.5 font-semibold text-black">
              Sign up
            </button>
            <button className="flex items-center justify-center rounded-md bg-[#6738EE] px-6 py-2.5 font-semibold text-white transition duration-200 hover:shadow-lg hover:drop-shadow">
              Login
            </button>
          </div>
          <button
            className={`focus:outline-none lg:hidden ${
              isMobileMenuOpen
                ? "rounded-full bg-slate-200 text-slate-800"
                : "text-slate-200"
            }`}
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <XCircle className="text-2xl focus:outline-none active:scale-110 active:text-slate-200" />
            ) : (
              <Menu className="text-2xl text-slate-800 focus:outline-none active:scale-110 active:text-red-500" />
            )}
          </button>
        </div>
      </nav>
      {isMobileMenuOpen && <MobileMenu onClose={toggleMobileMenu} />}
    </div>
  );
};

export default AppNavbar;
