import React from "react";
import { FaTimes } from "react-icons/fa";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useGetData from "../../my-hooks/useGetHook";
import usePostData from "../../my-hooks/usePostData";
import { RefreshDataContext } from "../../my-context/RefreshDataContext";
import { toast } from "react-toastify";

export default function AddZoneModal({ open, handleClose }) {
  // appel du hook pour poster les données dans la base de donnée
  const { postData } = usePostData("/zones");
  const regions = useGetData("/regions");
  const pays = useGetData("/pays");
  const { refreshData, setRefreshData } = React.useContext(RefreshDataContext);
  const [isPending, setIsPending] = React.useState(false);

  // schema de donnees pour le zone
  const zoneSchema = yup.object().shape({
    nom_zone: yup.string().required("Le nom du zone est obligatoire !"),
    region_id: yup.string().required("Le region est obligatoire !"),
    pays_id: yup.string().required("Le pays est obligatoire !"),
  });

  // initialisation de hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(zoneSchema),
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
        <h1 className="text-center text-xl font-semibold">Nouveau zone</h1>
        <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full flex flex-col space-y-4 ">
            <div className="flex flex-col items-start justify-center space-y-2">
              <label htmlFor="nom_zone" className="text-md">
                Nom zone:
              </label>
              <input
                type="text"
                name="nom_zone"
                id="nom_zone"
                className="w-full outline-none rounded-sm px-4 py-2 border border-gray-400"
                placeholder="Numero du region"
                {...register("nom_zone")}
              />
              {errors.nom_zone?.message && (
                <span className="text-sm -mt-2 text-red-500">
                  {errors.nom_zone?.message}
                </span>
              )}
            </div>

            <div className="flex flex-col items-start justify-center space-y-2">
              <label htmlFor="region_id" className="text-md">
                Region:
              </label>
              <select
                name="region_id"
                id="region_id"
                className="w-full outline-none rounded-sm px-4 py-2 border border-gray-400"
                {...register("region_id")}
              >
                {regions.data.map((region) => (
                  <option key={region.region_id} value={region.region_id}>
                    {region.nom_region}
                  </option>
                ))}
              </select>
              {errors.region_id?.message && (
                <span className="text-sm -mt-2 text-red-500">
                  {errors.region_id?.message}
                </span>
              )}
            </div>

            <div className="flex flex-col items-start justify-center space-y-2">
              <label htmlFor="pays_id" className="text-md">
                Pays:
              </label>
              <select
                name="pays_id"
                id="pays_id"
                className="w-full outline-none rounded-sm px-4 py-2 border border-gray-400"
                {...register("pays_id")}
              >
                {pays.data.map((pays) => (
                  <option key={pays.pays_id} value={pays.pays_id}>
                    {pays.nom_pays}
                  </option>
                ))}
              </select>
              {errors.region_id?.message && (
                <span className="text-sm -mt-2 text-red-500">
                  {errors.region_id?.message}
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
