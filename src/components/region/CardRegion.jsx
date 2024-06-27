import React from "react";
import SearchField from "../utilities/SearchField";
import ModalResponsive from "../utilities/ModalResponsive";

export default function CardRegion({ handleOpenModalDelete }) {
  // state permettre l ouverture du modal des boutons d action
  const [openActions, setOpenActions] = React.useState(false);

  const [searchTerm, setSearchTerm] = React.useState("");

  const regions = [
    { id: "001", region: "region dafafa", district: "district 105" },
    { id: "002", region: "region buubu", district: "district 205" },
    { id: "003", region: "region kiki", district: "district 305" },
    { id: "004", region: "region lala", district: "district 405" },
  ];

  const filteredRegions = regions.filter(
    (region) =>
      region.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
      region.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
      region.id.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <ModalResponsive
        open={openActions}
        handleClose={() => setOpenActions(false)}
      />
      <div className="w-full box-border rounded-sm block lg:hidden">
        <div className="w-full flex flex-col-reverse space-y-3 md:flex-row md:justify-between md:items-center mb-4">
          <SearchField
            placeholder={"rechercher district..."}
            handleSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
          />
          <button className="bg-blue-500 text-sm px-4 h-10 font-semibold rounded-sm text-white flex-shrink-0 box-border hover:bg-blue-700 transition-all duration-300">
            Nouvelle région
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredRegions.map((data, index) => (
            <div
              key={index}
              className="flex justify-between items-center space-x-4 p-2 rounded-sm border border-gray-300 shadow-sm bg-white"
            >
              {/* description */}
              <div>
                <h1 className="b">ID District - {data.id} </h1>
                <h4 className="sm:text-sm text-xs"> {data.region} </h4>
                <h4 className="sm:text-sm text-xs"> {data.district} </h4>
              </div>

              {/* bouton qui permet d ouvrir les boutons d actions */}
              <div className="flex h-full items-center justify-center mr-2">
                <button
                  className="p-2 bg-slate-500 rounded-sm text-white font-semibold text-sm"
                  onClick={() => setOpenActions(true)}
                >
                  Action
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
