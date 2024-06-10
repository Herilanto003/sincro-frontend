import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import HeaderComponent from "../../components/header/HeaderComponent";
import TitlePage from "../../components/utilities/TitlePage";
import ListRegion from "../../components/region/ListRegion";
import { FaPlus } from "react-icons/fa6";

export default function RegionPage() {
  const [openMenuMobile, setOpenMenuMobile] = React.useState(false);
  return (
    <>
      <Sidebar
        openMenuMobile={openMenuMobile}
        closeMenuMobile={() => setOpenMenuMobile(false)}
      />
      <div className="w-full">
        <HeaderComponent handleOpenMenuMobile={() => setOpenMenuMobile(true)} />
        <div className="box-border p-6 text-justify w-full">
          <div className="w-full">
            <TitlePage>Les regions</TitlePage>
            {/* <button className="bg-primary-300 rounded-sm text-gray-800 font-semibold text-md flex justify-between px-4 py-1 items-center space-x-2 transition-all hover:bg-primary-200">
              <FaPlus />
              <span>Nouveau region</span>
            </button> */}
          </div>
          <ListRegion />
        </div>
      </div>
    </>
  );
}
