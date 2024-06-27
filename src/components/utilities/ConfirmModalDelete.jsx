import React from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

export default function ConfirmModalDelete({
  open,
  handleClose,
  link,
  queryKey,
}) {
  // creation de la query client
  const queryClient = useQueryClient();

  // creation de la mutation pour supprimer un district
  const { mutate } = useMutation({
    mutationFn: () => {
      axios
        .delete(link)
        .then((res) => {
          console.log(res);
          toast.success("Suppression reussi !");
          handleClose();
        })
        .catch((err) => {
          console.log(err);
          toast.error("Erreur de suppression !");
        });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKey });
    },
  });

  return (
    <div
      className={`fixed w-full h-full transition-all bg-black bg-opacity-70 z-[99] flex justify-center items-center group ${
        open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
    >
      <div className="bg-white box-border p-4 rounded-sm group-active:scale-110 transition-all">
        <h1 className="text-2xl font-semibold text-center my-2">Title</h1>
        <p className="text-sm text-justify">
          Etes-vous sur de vouloir supprimer ce district ?
        </p>
        <div className="flex justify-center items-center space-x-4 mb-2 mt-4">
          <button
            onClick={mutate}
            className="bg-blue-500 rounded-sm text-white px-4 py-1 transition-all hover:bg-blue-700"
          >
            Oui
          </button>
          <button
            onClick={handleClose}
            className="bg-red-500 rounded-sm text-white px-4 py-1 transition-all hover:bg-red-700"
          >
            Non
          </button>
        </div>
      </div>
    </div>
  );
}
