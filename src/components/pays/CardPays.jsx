import React from "react";
import ModalResponsive from "../utilities/ModalResponsive";
import { FaEdit, FaInfo } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";

export default function CardPays({
  handleOpenModalDelete,
  data,
  searchTerm,
  handleOpenModalEdit,
}) {
  console.log(data);
  const filteredPays = data?.filter(
    (pays) =>
      pays?.nom_pays.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pays?.pays_id?.toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="w-full box-border rounded-sm block lg:hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredPays.map((data, index) => (
            <div
              key={index}
              className="flex box-border flex-col justify-between items-start p-2 rounded-sm border border-gray-300 shadow-sm bg-white"
            >
              {/* description */}
              <div className="w-full">
                <h1 className="b whitespace-break-spaces">
                  ID Pays - {data.pays_id}
                </h1>
                <h4 className="sm:text-sm text-xs"> {data.nom_pays} </h4>
              </div>

              <div className="h-0.5 bg-gray-300 w-full"></div>

              {/* bouton qui permet d ouvrir les boutons d actions */}
              <div className="flex h-full items-center justify-end space-x-4 mt-2 w-full">
                <button
                  className="p-2 bg-emerald-500 rounded-sm text-white font-semibold text-sm"
                  onClick={() => handleOpenModalEdit(data?.district_id)}
                >
                  <FaEdit />
                </button>
                <button
                  className="p-2 bg-red-500 rounded-sm text-white font-semibold text-sm"
                  onClick={() => handleOpenModalDelete(data?.district_id)}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
