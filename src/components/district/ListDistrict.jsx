import React from "react";
import { FaEdit, FaEye, FaSearch, FaTrash } from "react-icons/fa";
import useGetData from "../../my-hooks/useGetHook";

export default function ListDistrict({
  handleOpenModalDelete,
  searchTerm,
  handleOpenModalEdit,
}) {
  // fetching data a la montage du composant
  const { data, loading, error } = useGetData("/districts");

  const filteredData = data?.filter((district) =>
    district.district_id
      .toString()
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="w-full box-border rounded-sm hidden lg:block">
        <table className="lg:w-full rounded-t-sm overflow-hidden border">
          <thead className="bg-indigo-200 text-black rounded-t-lg">
            <tr>
              <th className="p-2 text-md font-semibold">ID District</th>
              <th className="p-2 text-md font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {filteredData.map((district) => (
              <tr
                key={district.district_id}
                className="odd:bg-white even:bg-indigo-50"
              >
                <td className="p-2 text-sm">
                  District - {district.district_id}
                </td>
                <td className="p-2 text-sm flex justify-start space-x-4 items-center">
                  <button
                    className="text-emerald-500 text-xl"
                    onClick={() => handleOpenModalEdit(district.district_id)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="text-xl text-red-500"
                    onClick={() => handleOpenModalDelete(district.district_id)}
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
          {filteredData.map((data, index) => (
            <div
              key={index}
              className="flex box-border flex-col justify-between items-start p-2 rounded-sm border border-gray-300 shadow-sm bg-white"
            >
              {/* description */}
              <div className="w-full">
                <h1 className="b whitespace-break-spaces">
                  ID District - {data.district_id}
                </h1>
              </div>

              <div className="h-0.5 bg-gray-300 w-full"></div>

              {/* bouton qui permet d ouvrir les boutons d actions */}
              <div className="flex h-full items-center justify-end space-x-4 mt-2 w-full">
                <button
                  className="p-2 bg-emerald-500 rounded-sm text-white font-semibold text-sm"
                  onClick={() => handleOpenModalEdit(data.district_id)}
                >
                  <FaEdit />
                </button>
                <button
                  className="p-2 bg-red-500 rounded-sm text-white font-semibold text-sm"
                  onClick={() => handleOpenModalDelete(data.district_id)}
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
