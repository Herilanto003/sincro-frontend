import React from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import useGetData from "../../my-hooks/useGetHook";

export default function ListPays({
  handleOpenModalDelete,
  searchTerm,
  handleOpenModalEdit,
}) {
  // fetching data a la montage du composant
  const { data, loading, error } = useGetData("/pays");

  const filteredPays = data?.filter(
    (pays) =>
      pays?.nom_pays.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pays?.pays_id?.toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="w-full box-border rounded-sm hidden lg:block">
        <table className="lg:w-full rounded-t-sm overflow-hidden border">
          <thead className="bg-indigo-200 text-black rounded-t-lg">
            <tr>
              <th className="p-2 text-md font-semibold">ID Pays</th>
              <th className="p-2 text-md font-semibold">Nom du Pays</th>
              <th className="p-2 text-md font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {filteredPays.map((pays) => (
              <tr key={pays.pays_id} className="odd:bg-white even:bg-indigo-50">
                <td className="p-2 text-sm">{pays.pays_id}</td>
                <td className="p-2 text-sm">{pays.nom_pays}</td>
                <td className="p-2 text-sm flex justify-start space-x-4 items-center">
                  <button
                    className="text-emerald-500 text-xl"
                    onClick={() => handleOpenModalEdit(pays.pays_id)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="text-xl text-red-500"
                    onClick={() => handleOpenModalDelete(pays.pays_id)}
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
                <h1 className="b whitespace-break-spaces">
                  Nom pays - {data.nom_pays}
                </h1>
              </div>

              <div className="h-0.5 bg-gray-300 w-full"></div>

              {/* bouton qui permet d ouvrir les boutons d actions */}
              <div className="flex h-full items-center justify-end space-x-4 mt-2 w-full">
                <button
                  className="p-2 bg-emerald-500 rounded-sm text-white font-semibold text-sm"
                  onClick={() => handleOpenModalEdit(data.pays_id)}
                >
                  <FaEdit />
                </button>
                <button
                  className="p-2 bg-red-500 rounded-sm text-white font-semibold text-sm"
                  onClick={() => handleOpenModalDelete(data.pays_id)}
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
