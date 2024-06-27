import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import useGetData from "../../my-hooks/useGetHook";
import { FaEye } from "react-icons/fa6";

export default function ListClubs({
  handleOpenModalDelete,
  searchTerm,
  handleOpenModalEdit,
}) {
  // fetching data a la montage du composant
  const { data, loading, error } = useGetData("/clubs");

  const filteredData = data.filter((club) => {
    return (
      club.club_id
        .toString()
        .toLowerCase()
        .includes(searchTerm.toString().toLowerCase()) ||
      club.nom_club
        .toString()
        .toLowerCase()
        .includes(searchTerm.toString().toLowerCase()) ||
      club.zone_id
        .toString()
        .toLowerCase()
        .includes(searchTerm.toString().toLowerCase())
    );
  });

  return (
    <div className="w-full box-border rounded-sm hidden lg:block">
      <table className="lg:w-full rounded-t-sm overflow-hidden border bg-white">
        <thead className="bg-indigo-200 text-black rounded-t-lg">
          <tr>
            <th className="p-2 text-md font-semibold">ID Club</th>
            <th className="p-2 text-md font-semibold">Nom Club</th>
            <th className="p-2 text-md font-semibold">ID Zone</th>
            <th className="p-2 text-md font-semibold">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {filteredData.map((club) => (
            <tr key={club.club_id}>
              <td className="p-2 text-sm">{club.club_id}</td>
              <td className="p-2 text-sm">{club.nom_club}</td>
              <td className="p-2 text-sm">Zone ID - {club.zone_id}</td>
              <td className="p-2 text-sm flex justify-start space-x-4 items-center">
                <button
                  className="text-emerald-500 text-xl"
                  onClick={() =>
                    handleOpenModalEdit(club.club_id, club.zone_id)
                  }
                >
                  <FaEdit />
                </button>
                <button
                  className="text-xl text-red-500"
                  onClick={() => handleOpenModalDelete(club.club_id)}
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
  );
}
