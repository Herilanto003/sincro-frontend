import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import useGetData from "../../my-hooks/useGetHook";

export default function ListRegion({
  handleOpenModalDelete,
  searchTerm,
  handleOpenModalEdit,
}) {
  // fetching data a la montage du composant
  const { data, loading, error } = useGetData("/regions");

  const filteredData = data.filter((region) => {
    return (
      region.region_id
        .toString()
        .toLowerCase()
        .includes(searchTerm.toString().toLowerCase()) ||
      region.nom_region
        .toString()
        .toLowerCase()
        .includes(searchTerm.toString().toLowerCase()) ||
      region.district_id
        .toString()
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
              <th className="p-2 text-md font-semibold">ID Région</th>
              <th className="p-2 text-md font-semibold">Nom Région</th>
              <th className="p-2 text-md font-semibold">ID District</th>
              <th className="p-2 text-md font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {loading ? (
              <tr>
                <td colSpan={4}>En attente des données...</td>
              </tr>
            ) : (
              error && (
                <tr>
                  <td colSpan={4}>Serveur ne répond pas</td>
                </tr>
              )
            )}
            {filteredData.map((region) => (
              <tr key={region.region_id}>
                <td className="p-2 text-sm">Region Num - {region.region_id}</td>
                <td className="p-2 text-sm">{region.nom_region}</td>
                <td className="p-2 text-sm">District - {region.district_id}</td>
                <td className="p-2 text-sm flex justify-start space-x-4 items-center">
                  <button
                    className="text-emerald-500 text-xl"
                    onClick={() =>
                      handleOpenModalEdit(region.region_id, region.district_id)
                    }
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="text-xl text-red-500"
                    onClick={() => handleOpenModalDelete(region.region_id)}
                  >
                    <FaTrash />
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
          {filteredData.map((data, index) => (
            <div
              key={index}
              className="flex box-border flex-col justify-between items-start p-2 rounded-sm border border-gray-300 shadow-sm bg-white"
            >
              {/* description */}
              <div className="w-full">
                <h1 className="b whitespace-break-spaces">
                  ID Region - {data.region_id}
                </h1>
                <h4 className="sm:text-sm text-xs"> {data.nom_region} </h4>
                <h4 className="sm:text-sm text-xs">
                  {" "}
                  District - {data.district_id}{" "}
                </h4>
              </div>

              <div className="h-0.5 bg-gray-300 w-full"></div>

              {/* bouton qui permet d ouvrir les boutons d actions */}
              <div className="flex h-full items-center justify-end space-x-4 mt-2 w-full">
                <button
                  className="p-2 bg-emerald-500 rounded-sm text-white font-semibold text-sm"
                  onClick={() =>
                    handleOpenModalEdit(data.region_id, data.district_id)
                  }
                >
                  <FaEdit />
                </button>
                <button
                  className="p-2 bg-red-500 rounded-sm text-white font-semibold text-sm"
                  onClick={() => handleOpenModalDelete(data.region_id)}
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
