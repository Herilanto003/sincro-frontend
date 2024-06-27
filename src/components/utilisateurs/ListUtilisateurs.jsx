import React from "react";
import { FaEdit, FaEye, FaSearch, FaTrash } from "react-icons/fa";
import SearchField from "../utilities/SearchField";

export default function ListUtilisateurs({ handleOpenModalDelete }) {
  const [searchTerm, setSearchTerm] = React.useState("");

  const users = [
    { id: "001", nom: "Andrianasolo Herilanto Louis Denis", role: "Admin" },
    { id: "002", nom: "Robert Downey JR", role: "Directeur" },
    { id: "003", nom: "Tom Cruise", role: "Secretaire Generale" },
    { id: "004", nom: "Jennifer Lopez", role: "Secretaire" },
  ];

  const filteredUsers = users.filter(
    (user) =>
      user.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full box-border rounded-sm hidden lg:block ">
      <div className="w-full flex flex-col-reverse space-y-3 md:flex-row md:justify-between md:items-center mb-4">
        <SearchField
          placeholder={"rechercher district..."}
          handleSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
        />
        <button className="bg-blue-500 text-sm px-4 h-10 font-semibold rounded-sm text-white flex-shrink-0 box-border hover:bg-blue-700 transition-all duration-300">
          Nouveau utilisateur
        </button>
      </div>
      <table className="lg:w-full rounded-t-sm overflow-hidden border bg-white">
        <thead className="bg-indigo-200 text-black rounded-t-lg">
          <tr>
            <th className="p-2 text-md font-semibold">ID Utilisateur</th>
            <th className="p-2 text-md font-semibold">Nom complet</th>
            <th className="p-2 text-md font-semibold">Role</th>
            <th className="p-2 text-md font-semibold">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td className="p-2 text-sm">{user.id}</td>
              <td className="p-2 text-sm">{user.nom}</td>
              <td className="p-2 text-sm">{user.role}</td>
              <td className="p-2 text-sm flex justify-start space-x-4 items-center">
                <button className="text-emerald-500 text-xl">
                  <FaEdit />
                </button>
                <button
                  className="text-xl text-red-500"
                  onClick={handleOpenModalDelete}
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
  );
}
