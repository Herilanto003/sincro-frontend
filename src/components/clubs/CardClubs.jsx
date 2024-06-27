import React from "react";
import SearchField from "../utilities/SearchField";
import ModalResponsive from "../utilities/ModalResponsive";

export default function CardClubs() {
  // state permettre l ouverture du modal des boutons d action
  const [openActions, setOpenActions] = React.useState(false);

  const [searchTerm, setSearchTerm] = React.useState("");

  const clubs = [
    { id: "001", club: "club dafafa", zone: "zone 105" },
    { id: "002", club: "club buubu", zone: "zone 205" },
    { id: "003", club: "club kiki", zone: "zone 305" },
    { id: "004", club: "club lala", zone: "zone 405" },
  ];

  const filteredClubs = clubs.filter(
    (club) =>
      club.club.toLowerCase().includes(searchTerm.toLowerCase()) ||
      club.zone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      club.id.toLowerCase().includes(searchTerm.toLowerCase())
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
            placeholder={"rechercher club..."}
            handleSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
          />
          <button className="bg-blue-500 text-sm px-4 h-10 font-semibold rounded-sm text-white flex-shrink-0 box-border hover:bg-blue-700 transition-all duration-300">
            Nouveau club
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredClubs.map((data, index) => (
            <div
              key={index}
              className="flex justify-between items-center space-x-4 p-2 rounded-sm border border-gray-300 shadow-sm bg-white"
            >
              {/* description */}
              <div>
                <h1 className="b">ID Club - {data.id} </h1>
                <h4 className="sm:text-sm text-xs"> {data.club} </h4>
                <h4 className="sm:text-sm text-xs"> {data.zone} </h4>
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
