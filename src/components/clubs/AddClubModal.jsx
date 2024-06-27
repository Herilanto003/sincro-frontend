import React from "react";
import { FaTimes } from "react-icons/fa";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import usePostData from "../../my-hooks/usePostData";
import useGetData from "../../my-hooks/useGetHook";
import { RefreshDataContext } from "../../my-context/RefreshDataContext";
import { toast } from "react-toastify";

export default function AddClubModal({ open, handleClose }) {
  // appel du hook pour poster les données dans la base de donnée
  const { postData } = usePostData("/clubs");
  const { data } = useGetData("/zones");
  const { refreshData, setRefreshData } = React.useContext(RefreshDataContext);
  const [isPending, setIsPending] = React.useState(false);

  // schema de donnees pour le club
  const clubSchema = yup.object().shape({
    club_id: yup.string().required("Le Numéro du club est obligatoire !"),
    nom_club: yup.string().required("Le nom du club est obligatoire !"),
    zone_id: yup.string().required("Le zone est obligatoire !"),
  });

  // initialisation de hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(clubSchema),
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
    await postData(data)
      .then((res) => {
        console.log(res.data.message);
        setRefreshData(!refreshData);
        toast.success("Enregistrement avec succes");
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
      <div className="box-border bg-white p-4 rounded-sm min-w-[280px]">
        <div className="text-right">
          <button onClick={handleCloseModal}>
            <FaTimes className="text-xl text-red-600" />
          </button>
        </div>
        <h1 className="text-center text-xl font-semibold">Nouveau club</h1>
        <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full flex flex-col space-y-4 ">
            <div className="flex flex-col items-start justify-center space-y-2">
              <label htmlFor="club_id" className="text-md">
                ID du club:
              </label>
              <input
                type="text"
                name="club_id"
                id="club_id"
                className="w-full outline-none rounded-sm px-4 py-2 border border-gray-400"
                placeholder="Numero du club"
                {...register("club_id")}
              />
              {errors.club_id?.message && (
                <span className="text-sm -mt-2 text-red-500">
                  {errors.club_id?.message}
                </span>
              )}
            </div>
            <div className="flex flex-col items-start justify-center space-y-2">
              <label htmlFor="nom_club" className="text-md">
                Nom club:
              </label>
              <input
                type="text"
                name="nom_club"
                id="nom_club"
                className="w-full outline-none rounded-sm px-4 py-2 border border-gray-400"
                placeholder="Nom club"
                {...register("nom_club")}
              />
              {errors.nom_club?.message && (
                <span className="text-sm -mt-2 text-red-500">
                  {errors.nom_club?.message}
                </span>
              )}
            </div>
            <div className="flex flex-col items-start justify-center space-y-2">
              <label htmlFor="zone_id" className="text-md">
                Zone:
              </label>
              <select
                name="zone_id"
                id="zone_id"
                className="w-full outline-none rounded-sm px-4 py-2 border border-gray-400"
                {...register("zone_id")}
              >
                {data.map((zone) => (
                  <option key={zone.zone_id} value={zone.zone_id}>
                    Zone - {zone.zone_id}
                  </option>
                ))}
              </select>
              {errors.zone_id?.message && (
                <span className="text-sm -mt-2 text-red-500">
                  {errors.zone_id?.message}
                </span>
              )}
            </div>
          </div>
          {isPending ? (
            <button
              disabled={true}
              className="mt-4 w-full bg-gray-500 text-white py-2 rounded-sm"
            >
              Enregistrement en cours...
            </button>
          ) : (
            <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-sm">
              {"Enregistrer"}
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
