import React from "react";
import { FaTimes } from "react-icons/fa";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import usePostData from "../../my-hooks/usePostData";
import useGetData from "../../my-hooks/useGetHook";
import { RefreshDataContext } from "../../my-context/RefreshDataContext";
import { toast } from "react-toastify";

export default function AddRegionModal({ open, handleClose }) {
  // appel du hook pour poster les données dans la base de donnée
  const { postData } = usePostData("/regions");
  const { data } = useGetData("/districts");
  const { refreshData, setRefreshData } = React.useContext(RefreshDataContext);
  const [isPending, setIsPending] = React.useState(false);

  // schema de donnees pour le region
  const regionSchema = yup.object().shape({
    region_id: yup.string().required("Le Numéro du region est obligatoire !"),
    nom_region: yup.string().required("Le nom du region est obligatoire !"),
    district_id: yup.string().required("Le district est obligatoire !"),
  });

  // initialisation de hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(regionSchema),
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
        <h1 className="text-center text-xl font-semibold">Nouveau region</h1>
        <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full flex flex-col space-y-4 ">
            <div className="flex flex-col items-start justify-center space-y-2">
              <label htmlFor="region_id" className="text-md">
                ID du region:
              </label>
              <input
                type="text"
                name="region_id"
                id="region_id"
                className="w-full outline-none rounded-sm px-4 py-2 border border-gray-400"
                placeholder="Numero du region"
                {...register("region_id")}
              />
              {errors.region_id?.message && (
                <span className="text-sm -mt-2 text-red-500">
                  {errors.region_id?.message}
                </span>
              )}
            </div>
            <div className="flex flex-col items-start justify-center space-y-2">
              <label htmlFor="nom_region" className="text-md">
                Nom region:
              </label>
              <input
                type="text"
                name="nom_region"
                id="nom_region"
                className="w-full outline-none rounded-sm px-4 py-2 border border-gray-400"
                placeholder="Nom region"
                {...register("nom_region")}
              />
              {errors.nom_region?.message && (
                <span className="text-sm -mt-2 text-red-500">
                  {errors.nom_region?.message}
                </span>
              )}
            </div>
            <div className="flex flex-col items-start justify-center space-y-2">
              <label htmlFor="district_id" className="text-md">
                District:
              </label>
              <select
                name="district_id"
                id="district_id"
                className="w-full outline-none rounded-sm px-4 py-2 border border-gray-400"
                {...register("district_id")}
              >
                {data.map((district) => (
                  <option
                    key={district.district_id}
                    value={district.district_id}
                  >
                    District - {district.district_id}
                  </option>
                ))}
              </select>
              {errors.district_id?.message && (
                <span className="text-sm -mt-2 text-red-500">
                  {errors.district_id?.message}
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
