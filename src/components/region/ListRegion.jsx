import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function ListRegion() {
  const [searchTerm, setSearchTerm] = useState("");

  const regions = [
    { id: "001", region: "region dafafa", district: "district 105" },
    { id: "002", region: "region buubu", district: "district 205" },
    { id: "003", region: "region kiki", district: "district 305" },
    { id: "004", region: "region lala", district: "district 405" },
  ];

  const filteredRegions = regions.filter(
    (region) =>
      region.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
      region.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
      region.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full box-border rounded-sm">
      <div className="w-full flex justify-between items-center mb-4">
        <form className="flex justify-start items-center border-2 rounded-lg px-4">
          <FaSearch className="text-2xl text-gray-600" />
          <input
            type="search"
            placeholder="Rechercher région..."
            className="outline-none px-4 py-2 flex-shrink-0 w-[350px] bg-transparent rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
        <button className="bg-indigo-700 px-4 py-2 text-white font-semibold rounded-lg text-sm">
          Nouvelle région
        </button>
      </div>
      <table className="w-full rounded-t-lg overflow-hidden border">
        <thead className="bg-indigo-700 text-white rounded-t-lg">
          <tr>
            <th className="p-2 text-md font-semibold">ID Région</th>
            <th className="p-2 text-md font-semibold">Nom Région</th>
            <th className="p-2 text-md font-semibold">Nom District</th>
            <th className="p-2 text-md font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredRegions.map((region) => (
            <tr key={region.id} className="odd:bg-indigo-100">
              <td className="p-2 text-sm">{region.id}</td>
              <td className="p-2 text-sm">{region.region}</td>
              <td className="p-2 text-sm">{region.district}</td>
              <td className="p-2 text-sm">
                <button>Action</button>
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
