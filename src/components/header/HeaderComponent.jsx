import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaBell, FaMessage } from "react-icons/fa6";

export default function HeaderComponent() {
  return (
    <div className="w-full bg-white border-b shadow-sm h-12 flex justify-end items-center box-border px-6">
      <div className="flex items-center justify-between space-x-6">
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
          <span className="flex items-center justify-between space-x-2">
            <span>
              <p className="text-sm">Nom utilisateur</p>
              <p className="text-xs">utilisateur@mail.mail</p>
            </span>
            <FaUserCircle className="text-4xl" />
          </span>
        </a>
      </div>
    </div>
  );
}
