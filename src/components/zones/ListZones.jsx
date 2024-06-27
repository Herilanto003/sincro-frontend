import React from "react";
import { FaEdit, FaEye, FaSearch, FaTrash } from "react-icons/fa";
import useGetData from "../../my-hooks/useGetHook";

export default function ListZones({
  handleOpenModalDelete,
  searchTerm,
  handleOpenModalEdit,
}) {
  // fetching data a la montage du composant
  const { data, loading, error } = useGetData("/zones");

  const filteredData = data.filter((zone) => {
    return (
      `Zone numero - ${zone.zone_id}`
        .toLowerCase()
        .includes(searchTerm.toString().toLowerCase()) ||
      zone.nom_zone
        .toString()
        .toLowerCase()
        .includes(searchTerm.toString().toLowerCase()) ||
      `Region ID - ${zone.region_id}`
        .toLowerCase()
        .includes(searchTerm.toString().toLowerCase()) ||
      `Pays ID - ${zone.pays_id}`
        .toLowerCase()
        .includes(searchTerm.toString().toLowerCase())
    );
  });

  return (
    <>
      <div className="w-full box-border rounded-sm hidden lg:block">
        <table className="lg:w-full rounded-t-sm overflow-hidden border bg-white">
          <thead className="bg-indigo-200 text-black rounded-t-lg">
            <tr>
              <th className="p-2 text-md font-semibold">ID Zone</th>
              <th className="p-2 text-md font-semibold">Nom Zone</th>
              <th className="p-2 text-md font-semibold">ID Pays</th>
              <th className="p-2 text-md font-semibold">ID Region</th>
              <th className="p-2 text-md font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filteredData.map((zone) => (
              <tr key={zone.zone_id}>
                <td className="p-2 text-sm">{zone.zone_id}</td>
                <td className="p-2 text-sm">{zone.nom_zone}</td>
                <td className="p-2 text-sm">Pays ID - {zone.pays_id}</td>
                <td className="p-2 text-sm">Region ID - {zone.region_id}</td>
                <td className="p-2 text-sm flex justify-start space-x-4 items-center">
                  <button
                    className="text-emerald-500 text-xl"
                    onClick={() =>
                      handleOpenModalEdit(
                        zone.zone_id,
                        zone.region_id,
                        zone.pays_id
                      )
                    }
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="text-xl text-red-500"
                    onClick={() => handleOpenModalDelete(zone.zone_id)}
                  >
                    <FaTrash />
                  </button>
                  <button className="text-xl text-sky-500">
                    <FaEye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={4}></td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="w-full box-border rounded-sm block lg:hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredData.map((zone, index) => (
            <div
              key={index}
              className="flex box-border flex-col justify-between items-start p-2 rounded-sm border border-gray-300 shadow-sm bg-white"
            >
              {/* description */}
              <div>
                <h1 className="b">ID Zone - {zone.zone_id} </h1>
                <h4 className="sm:text-sm text-xs">
                  Nom Zone: {zone.nom_zone}{" "}
                </h4>
                <h4 className="sm:text-sm text-xs">
                  {" "}
                  Pays ID - {zone.pays_id}{" "}
                </h4>
                <h4 className="sm:text-sm text-xs">
                  {" "}
                  Region ID - {zone.region_id}{" "}
                </h4>
              </div>

              <div className="h-0.5 bg-gray-300 w-full"></div>

              {/* bouton qui permet d ouvrir les boutons d actions */}
              <div className="flex h-full items-center justify-end space-x-4 mt-2 w-full">
                <button
                  className="p-2 bg-emerald-500 rounded-sm text-white font-semibold text-sm"
                  onClick={() =>
                    handleOpenModalEdit(
                      zone?.zone_id,
                      zone.region_id,
                      zone.pays_id
                    )
                  }
                >
                  <FaEdit />
                </button>
                <button
                  className="p-2 bg-red-500 rounded-sm text-white font-semibold text-sm"
                  onClick={() => handleOpenModalDelete(zone?.zone_id)}
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
