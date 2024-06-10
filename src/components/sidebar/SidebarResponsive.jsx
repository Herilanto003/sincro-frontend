import React from "react";

export default function SidebarResponsive({ icon, textMenu }) {
  return (
    <li>
      <a
        href="#"
        className="p-2 text-sm hover:bg-indigo-300 hover:-translate-y-0.5 hover:text-black transition-all flex space-x-2 justify-start items-center rounded-sm text-black"
      >
        {icon}
        <span>{textMenu}</span>
      </a>
    </li>
  );
}
