import React from "react";
import { FaEdit, FaEye, FaSearch, FaTrash } from "react-icons/fa";
import SearchField from "../utilities/SearchField";

export default function ListMember({ handleOpenModalDelete }) {
  const [searchTerm, setSearchTerm] = React.useState("");

  const members = [
    {
      id: "001",
      fullname: "Andrianasolo Herilanto Louis Denis",
      cmj: "cmj-001",
      sexe: "M",
      email: "mail@g.c",
      phone: "032222",
    },
    {
      id: "002",
      fullname: "Elsa Pataky",
      cmj: "cmj-002",
      sexe: "F",
      email: "elsa@g.c",
      phone: "03278822",
    },
    {
      id: "003",
      fullname: "Jeffrey Dean Morgan",
      cmj: "cmj-003",
      sexe: "M",
      email: "jeffrey@g.c",
      phone: "02548",
    },
    {
      id: "004",
      fullname: "Kate Binckasale",
      cmj: "cmj-004",
      sexe: "F",
      email: "Kate@g.c",
      phone: "0264485",
    },
    {
      id: "005",
      fullname: "Jean Badiste",
      cmj: "cmj-005",
      sexe: "M",
      email: "jean@g.c",
      phone: "318428",
    },
    {
      id: "006",
      fullname: "Chris Hemsworth",
      cmj: "cmj-006",
      sexe: "M",
      email: "Chris@g.c",
      phone: "544684",
    },
    {
      id: "007",
      fullname: "Chris Evans",
      cmj: "cmj-007",
      sexe: "M",
      email: "evans@g.c",
      phone: "3575",
    },
  ];

  const filteredMembers = members.filter(
    (member) =>
      member.fullname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.cmj.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.sexe.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.phone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full box-border rounded-sm hidden lg:block ">
      <div className="w-full flex flex-col-reverse space-y-3 md:flex-row md:justify-between md:items-center mb-4">
        <SearchField
          placeholder={"rechercher membre..."}
          handleSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
        />
        <button className="bg-blue-500 text-sm px-4 h-10 font-semibold rounded-sm text-white flex-shrink-0 box-border hover:bg-blue-700 transition-all duration-300">
          Nouveau membre
        </button>
      </div>
      <table className="lg:w-full rounded-t-sm overflow-hidden border bg-white">
        <thead className="bg-indigo-200 text-black rounded-t-lg">
          <tr>
            <th className="p-2 text-md font-semibold">ID Membre</th>
            <th className="p-2 text-md font-semibold">Nom complet</th>
            <th className="p-2 text-md font-semibold">Sexe</th>
            <th className="p-2 text-md font-semibold">CMJ</th>
            <th className="p-2 text-md font-semibold">Email</th>
            <th className="p-2 text-md font-semibold">Téléphone</th>
            <th className="p-2 text-md font-semibold">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {filteredMembers.map((membre) => (
            <tr key={membre.id}>
              <td className="p-2 text-sm">{membre.id}</td>
              <td className="p-2 text-sm">{membre.fullname}</td>
              <td className="p-2 text-sm">{membre.sexe}</td>
              <td className="p-2 text-sm">{membre.cmj}</td>
              <td className="p-2 text-sm">{membre.email}</td>
              <td className="p-2 text-sm">{membre.phone}</td>
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
