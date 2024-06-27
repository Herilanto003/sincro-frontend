import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchField({
  handleSearchTerm,
  placeholder,
  searchTerm,
}) {
  return (
    <form className="flex flex-grow justify-start items-center border border-gray-400 rounded-sm px-4 mt-2 md:mt-0">
      <FaSearch className="text-2xl text-gray-600" />
      <input
        type="search"
        placeholder={placeholder}
        className="outline-none flex-grow px-4 py-2 flex-shrink-0 lg:w-[350px] bg-transparent rounded-sm text-sm"
        value={searchTerm}
        onChange={(e) => handleSearchTerm(e.target.value)}
      />
    </form>
  );
}
