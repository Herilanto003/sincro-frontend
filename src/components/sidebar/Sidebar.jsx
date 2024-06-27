import React from "react";
import {
  FaAngleRight,
  FaChartBar,
  FaHouse,
  FaUser,
  FaEarthAfrica,
  FaFlag,
  FaXmark,
  FaUserGroup,
  FaRegFlag,
  FaLandmark,
  FaTags,
} from "react-icons/fa6";
import SidebarOpenItem from "./SidebarOpenItem";
import SidebarCloseItem from "./SidebarCloseItem";
import SidebarResponsive from "./SidebarResponsive";

export default function Sidebar({ openMenuMobile, closeMenuMobile }) {
  const [open, setOpen] = React.useState(true);
  const handleOpenMenu = () => setOpen(!open);
  const [menus, setMenus] = React.useState([
    { icon: <FaHouse />, textMenu: "Accueil", link: "#" },
    { icon: <FaChartBar />, textMenu: "Tableau de bord", link: "#" },
    {
      icon: <FaEarthAfrica />,
      textMenu: "Districs",
      link: "/compte/districts",
    },
    { icon: <FaFlag />, textMenu: "Regions", link: "/compte/regions" },
    {
      icon: <FaRegFlag />,
      textMenu: "Pays",
      link: "/compte/pays",
    },
    {
      icon: <FaLandmark />,
      textMenu: "Zones",
      link: "/compte/zones",
    },
    {
      icon: <FaTags />,
      textMenu: "Clubs",
      link: "/compte/clubs",
    },
    {
      icon: <FaUserGroup />,
      textMenu: "Membres",
      link: "/compte/membres",
    },
    {
      icon: <FaUser />,
      textMenu: "Utilisateurs",
      link: "/compte/utilisateurs",
    },
  ]);

  return (
    <>
      <aside
        className={`h-screen flex-shrink-0 sticky top-0 ${
          open ? "w-[250px]" : "w-[70px]"
        } transition-all bg-white border-r shadow-md hidden lg:block`}
      >
        {/*  sur les ecrans d ordinateur */}
        <nav className="h-full p-2">
          {/* ******* --- LOGO ET LE BOUTON DE FERMETURE --- ******** */}
          <div
            className={`flex items-center py-2 ${
              open ? "justify-between" : "justify-center"
            } transition-all`}
          >
            <h1
              className={`text-4xl font-semibold ${
                open ? "block" : "hidden"
              } text-orange-500`}
            >
              Sincro
            </h1>
            <button
              onClick={handleOpenMenu}
              className="p-1 rounded-full bg-indigo-500 h-auto transition-all hover:-translate-y-0.5"
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
            {open && (
              <span className="text-xs text-justify text-gray-500">menu</span>
            )}
            <ul className="flex flex-col space-y-2 mt-2">
              {open
                ? menus.map((data, index) => (
                    <SidebarOpenItem
                      key={index}
                      icon={data.icon}
                      textMenu={data.textMenu}
                      link={data.link}
                    />
                  ))
                : menus.map((data, index) => (
                    <SidebarCloseItem
                      key={index}
                      icon={data.icon}
                      textMenu={data.textMenu}
                      link={data.link}
                    />
                  ))}
            </ul>
          </div>
        </nav>

        {/* sur les tablettes */}
      </aside>
      <aside
        className={`fixed w-full h-full bg-black bg-opacity-50 z-50 block lg:hidden transition-all duration-500 ${
          openMenuMobile
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-full"
        }`}
        // className="fixed w-full h-full bg-black bg-opacity-50 z-50 opacity-0 block lg:hidden transition-all duration-500"
      >
        <div className="absolute top-0 left-0 bg-white sm:w-[300px] w-full h-full box-border">
          <button
            className="text-red-500 text-2xl absolute top-4 right-4"
            onClick={closeMenuMobile}
          >
            <FaXmark />
          </button>
          <h1 className={`text-4xl font-semibold text-orange-500 px-3 py-1`}>
            Sincro
          </h1>
          <div className="p-4">
            <span className="text-xs text-justify text-gray-500">menu</span>
            <ul className="flex flex-col space-y-2">
              {menus.map((data, index) => (
                <SidebarResponsive
                  key={index}
                  icon={data.icon}
                  textMenu={data.textMenu}
                  link={data.link}
                  closeMenuMobile={closeMenuMobile}
                />
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}
