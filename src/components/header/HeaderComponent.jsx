import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaBars, FaBell, FaMessage } from "react-icons/fa6";

export default function HeaderComponent({ handleOpenMenuMobile }) {
  return (
    <div className="w-full sticky top-0 bg-white border-b shadow-sm h-12 flex justify-between lg:justify-end items-center box-border px-6">
      <button
        className="text-xl block lg:hidden"
        onClick={handleOpenMenuMobile}
      >
        <FaBars />
      </button>

      <div className="flex items-center justify-between md:space-x-6 space-x-4">
        <div className="relative">
          <FaMessage className="text-xl" />
          <span className="absolute -top-2 -right-2 bg-primary-400 font-bold text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
            3
          </span>
        </div>
        <div className="relative">
          <FaBell className="text-xl" />
          <span className="absolute -top-2 -right-2 bg-primary-400 font-bold text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
            5
          </span>
        </div>
        <a href="#">
          <span className="flex items-center justify-between md:space-x-2">
            <span className="hidden md:block">
              <p className="text-sm">Nom utilisateur</p>
              <p className="text-xs">utilisateur@mail.mail</p>
            </span>
            <FaUserCircle className="text-2xl" />
          </span>
        </a>
      </div>
    </div>
  );
}
