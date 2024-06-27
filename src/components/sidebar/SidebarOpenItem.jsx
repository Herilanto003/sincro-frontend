import React from "react";
import { NavLink } from "react-router-dom";

export default function SidebarOpenItem({ icon, textMenu, link }) {
  return (
    <>
      <li>
        <NavLink
          to={link}
          className="p-2 text-md hover:bg-indigo-300 hover:-translate-y-0.5 hover:text-black transition-all flex space-x-2 justify-start items-center rounded-sm text-black"
        >
          {icon}
          <span>{textMenu}</span>
        </NavLink>
      </li>
    </>
  );
}
