import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaEye, FaPlus, FaTrash } from "react-icons/fa6";
import SearchField from "../utilities/SearchField";
import ModalResponsive from "../utilities/ModalResponsive";

export default function CardMember({ handleOpenModalDelete }) {
  // state permettre l ouverture du modal des boutons d action
  const [openActions, setOpenActions] = React.useState(false);

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
    <>
      <ModalResponsive
        open={openActions}
        handleClose={() => setOpenActions(false)}
      />
      <div className="w-full box-border rounded-sm block lg:hidden">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredMembers.map((data, index) => (
            <div
              key={index}
              className="flex justify-between items-center space-x-4 p-2 rounded-sm border border-gray-300 shadow-sm bg-white"
            >
              {/* description */}
              <div>
                <h1 className="b">
                  ID Utilisateur -{" "}
                  <span className="bg-green-500 text-white px-3 rounded-lg">
                    {data.id}
                  </span>{" "}
                </h1>
                <h4 className="sm:text-sm text-xs"> {data.fullname} </h4>
                <h4 className="sm:text-sm text-xs"> {data.cmj} </h4>
                <h4 className="sm:text-sm text-xs"> {data.email} </h4>
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
