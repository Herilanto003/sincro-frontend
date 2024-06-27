import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaEye, FaTrash } from "react-icons/fa6";
import SearchField from "../utilities/SearchField";

export default function CardUtilisateurs({ handleOpenModalDelete }) {
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
    <div className="w-full box-border rounded-sm block lg:hidden">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredUsers.map((data, index) => (
          <div
            key={index}
            className="flex justify-between items-center space-x-4 p-2 rounded-sm border border-gray-300 shadow-sm bg-white"
          >
            {/* description */}
            <div>
              <h1 className="b">ID Utilisateur - {data.id} </h1>
              <h4 className="sm:text-sm text-xs"> {data.nom} </h4>
              <span className="text-xs bg-emerald-500 p-1 font-semibold text-white rounded-sm">
                {" "}
                {data.role}{" "}
              </span>
            </div>

            <div className="flex justify-between items-center space-x-2">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
