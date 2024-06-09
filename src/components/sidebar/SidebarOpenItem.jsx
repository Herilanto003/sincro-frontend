import React from "react";
import { FaChartBar } from "react-icons/fa6";

export default function SidebarOpenItem({ icon, textMenu }) {
  return (
    <>
      <li>
        <a
          href=""
          className="p-2 text-md font-semibold hover:bg-primary-100 hover:-translate-y-0.5 hover:text-black transition-all flex space-x-2 justify-start items-center rounded-sm"
        >
          {icon}
          <span>{textMenu}</span>
        </a>
      </li>
    </>
  );
}
