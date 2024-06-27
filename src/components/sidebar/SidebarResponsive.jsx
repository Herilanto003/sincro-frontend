import React from "react";
import { NavLink } from "react-router-dom";

export default function SidebarResponsive({
  icon,
  textMenu,
  link,
  closeMenuMobile,
}) {
  return (
    <li>
      <NavLink
        onClick={closeMenuMobile}
        to={link}
        className="p-2 text-sm hover:bg-indigo-300 hover:-translate-y-0.5 hover:text-black transition-all flex space-x-2 justify-start items-center rounded-sm text-black"
      >
        {icon}
        <span>{textMenu}</span>
      </NavLink>
    </li>
  );
}
