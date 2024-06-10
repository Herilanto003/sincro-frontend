import React from "react";
import { FaChartBar } from "react-icons/fa6";

export default function SidebarCloseItem({ icon, textMenu }) {
  return (
    <>
      <li>
        <a
          href=""
          className="relative w-full p-2 text-md hover:bg-indigo-300 hover:-translate-y-0.5 hover:text-black transition-all flex space-x-2 justify-center items-center rounded-sm group text-black"
        >
          {icon}
          <span className="absolute -right-52 text-black bg-indigo-300 font-normal p-1 rounded-sm hidden group-hover:block transition-opacity duration-300 w-[200px]">
            {textMenu}
          </span>
        </a>
      </li>
    </>
  );
}
