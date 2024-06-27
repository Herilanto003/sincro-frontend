import React from "react";
import { FaTimes } from "react-icons/fa";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useUpdateData from "../../my-hooks/useUpdateData";
import useGeteOneData from "../../my-hooks/useGetOneData";
import { RefreshDataContext } from "../../my-context/RefreshDataContext";
import { toast } from "react-toastify";

export default function EditPaysModal({ open, handleClose, link, id }) {
  // recuperer le district a modifier
  const paysSelected = useGeteOneData("/pays/" + id);
  const { refreshData, setRefreshData } = React.useContext(RefreshDataContext);
  const [isPending, setIsPending] = React.useState(false);

  // utilisation du hook pour la modification
  const { putData } = useUpdateData("/pays/" + id);

  // schema de donnees pour le pays
  const paysSchema = yup.object().shape({
    nom_pays: yup.string().required("Le nom du pays est obligatoire !"),
  });

  // initialisation de hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    resolver: yupResolver(paysSchema),
  });

  // fonction pour la fermeture de ce modal
  const handleCloseModal = () => {
    reset();
    handleClose();
  };

  const onSubmit = async (data) => {
    console.log("========== ********* ============");
    setIsPending(true);
    // postData(data);
    await putData(data)
      .then((res) => {
        console.log(res.data.message);
        setRefreshData(!refreshData);
        toast.success("Modification avec succes");
        setIsPending(false);
        handleCloseModal();
      })
      .catch((err) => {
        console.log("echec");
        toast.error("Veuillez verifier bien les données");
        setIsPending(false);
      });
    console.log("========== ********* ============");
  };

  return (
    <div
      className={`fixed ${
        open ? "top-0 opacity-100" : "-top-full opacity-0"
      } left-0 z-[99] bg-opacity-50 bg-black w-full h-full flex justify-center items-center transition-all`}
    >
      <div className="box-border bg-white p-4 rounded-sm min-w-[250px]">
        <div className="text-right">
          <button onClick={handleCloseModal}>
            <FaTimes className="text-xl text-red-600" />
          </button>
        </div>
        <h1 className="text-center text-xl font-semibold">Modifier pays</h1>
        <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col items-start justify-center space-y-2">
            <label htmlFor="nom_pays" className="text-md">
              Nom du pays:
            </label>
            <input
              type="text"
              name="nom_pays"
              id="nom_pays"
              className="w-full outline-none rounded-sm px-4 py-2 border border-gray-400"
              placeholder="Nom du pays"
              defaultValue={paysSelected?.data.nom_pays || ""}
              {...register("nom_pays")}
            />
            {errors.nom_pays?.message && (
              <span className="text-sm -mt-2 text-red-500">
                {errors.nom_pays?.message}
              </span>
            )}
          </div>
          {isPending ? (
            <button
              disabled={true}
              className="mt-4 w-full bg-gray-500 text-white py-2 rounded-sm"
            >
              Modification en cours...
            </button>
          ) : (
            <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-sm">
              {"Modifier"}
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
