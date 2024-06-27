import React from "react";
import useDeleteData from "../../my-hooks/useDeleteData";
import { RefreshDataContext } from "../../my-context/RefreshDataContext";
import { toast } from "react-toastify";

export default function ConfirmDeletePays({ open, handleClose, id }) {
  const { deleteData } = useDeleteData("/pays/" + id);
  const { refreshData, setRefreshData } = React.useContext(RefreshDataContext);
  const [pending, setPending] = React.useState(false);

  const handleDeleteData = async () => {
    setPending(true);
    await deleteData()
      .then((res) => {
        console.log(res.data.message);
        toast.success("Suppression avec succes");
        setRefreshData(!refreshData);
        setPending(false);
        handleClose();
      })
      .catch((err) => {
        console.log("echec");
        setPending(false);
        toast.error("Erreur de suppression");
      });
  };

  return (
    <div
      className={`fixed w-full h-full transition-all bg-black bg-opacity-70 z-[99] flex justify-center items-center group ${
        open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
    >
      <div className="bg-white box-border p-4 rounded-sm group-active:scale-110 transition-all">
        {pending ? (
          <h1>Suppression</h1>
        ) : (
          <>
            <h1 className="text-2xl font-semibold text-center my-2">
              Suppression
            </h1>
            <p className="text-sm text-justify">
              Etes-vous sur de vouloir supprimer ce pays ?
            </p>
            <div className="flex justify-center items-center space-x-4 mb-2 mt-4">
              <button
                onClick={handleDeleteData}
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
          </>
        )}
      </div>
    </div>
  );
}
