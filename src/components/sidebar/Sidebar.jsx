import React from "react";
import {
  FaAngleRight,
  FaChartBar,
  FaHouse,
  FaUser,
  FaEarthAfrica,
  FaFlag,
} from "react-icons/fa6";
import SidebarOpenItem from "./SidebarOpenItem";
import SidebarCloseItem from "./SidebarCloseItem";

export default function Sidebar() {
  const [open, setOpen] = React.useState(true);
  const handleOpenMenu = () => setOpen(!open);
  const [menus, setMenus] = React.useState([
    { icon: <FaHouse />, textMenu: "Accueil" },
    { icon: <FaChartBar />, textMenu: "Tableau de bord" },
    { icon: <FaEarthAfrica />, textMenu: "Districs" },
    { icon: <FaFlag />, textMenu: "Regions" },
    { icon: <FaUser />, textMenu: "Utilisateurs" },
  ]);

  return (
    <aside
      className={`h-screen flex-shrink-0 sticky top-0 ${
        open ? "w-[250px]" : "w-[70px]"
      } transition-all`}
    >
      <nav className="h-full border-r shadow-md p-2">
        {/* ******* --- LOGO ET LE BOUTON DE FERMETURE --- ******** */}
        <div
          className={`flex items-center py-2 ${
            open ? "justify-between" : "justify-center"
          } transition-all`}
        >
          <h1 className={`text-4xl font-semibold ${open ? "block" : "hidden"}`}>
            Sincro
          </h1>
          <button
            onClick={handleOpenMenu}
            className="p-1 rounded-full bg-primary-600 h-auto transition-all hover:-translate-y-0.5"
          >
            <FaAngleRight
              className={`text-white text-xl transition-all ${
                open ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        </div>

        {/* ****** --- LES MENUS DE SIDEBAR --- ******* */}
        <div>
          <ul className="flex flex-col space-y-2 mt-2">
            {open
              ? menus.map((data, index) => (
                  <SidebarOpenItem
                    key={index}
                    icon={data.icon}
                    textMenu={data.textMenu}
                  />
                ))
              : menus.map((data, index) => (
                  <SidebarCloseItem
                    key={index}
                    icon={data.icon}
                    textMenu={data.textMenu}
                  />
                ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
}
