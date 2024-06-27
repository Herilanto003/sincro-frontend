import React from "react";
import { FaEdit, FaTimes } from "react-icons/fa";
import { FaInfo, FaTrash } from "react-icons/fa6";

export default function ModalResponsive({ open, handleClose }) {
  return (
    <div
      className={`fixed ${
        open ? "top-0 opacity-100" : "-top-full opacity-0"
      } left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-[9999] transition-all`}
    >
      <div className="bg-white p-4 rounded-md">
        <div className="text-right">
          <button className="mb-4" onClick={handleClose}>
            <FaTimes className="text-2xl text-red-600" />
          </button>
          <div className="flex flex-col box-border space-y-4">
            <button className="flex justify-start items-center space-x-2 text-white bg-blue-500 p-2 rounded-sm">
              <FaInfo className="" /> <a href="#">Information</a>
            </button>
            <button className="flex justify-start items-center space-x-2 text-white bg-green-500 p-2 rounded-sm">
              <FaEdit /> <a href="#">Modifier</a>
            </button>
            <button className="flex justify-start items-center space-x-2 text-white bg-red-500 p-2 rounded-sm">
              <FaTrash /> <a href="#">Supprimer</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
