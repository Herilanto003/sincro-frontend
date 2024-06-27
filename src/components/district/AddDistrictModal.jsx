import React from "react";
import { FaTimes } from "react-icons/fa";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import usePostData from "../../my-hooks/usePostData";
import { RefreshDataContext } from "../../my-context/RefreshDataContext";
import { toast } from "react-toastify";

export default function AddDistrictModal({ open, handleClose }) {
  // appel du hook pour poster les données dans la base de donnée
  const { postData } = usePostData("/districts");
  const { refreshData, setRefreshData } = React.useContext(RefreshDataContext);
  const [isPending, setIsPending] = React.useState(false);

  // schema de donnees pour le district
  const districtSchema = yup.object().shape({
    district_id: yup
      .string()
      .required("Le Numéro du district est obligatoire !"),
  });

  // initialisation de hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(districtSchema),
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
      <div className="box-border bg-white p-4 rounded-sm min-w-[250px]">
        <div className="text-right">
          <button onClick={handleCloseModal}>
            <FaTimes className="text-xl text-red-600" />
          </button>
        </div>
        <h1 className="text-center text-xl font-semibold">Nouveau district</h1>
        <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col items-start justify-center space-y-2">
            <label htmlFor="district_id" className="text-md">
              Numéro du district:
            </label>
            <input
              type="text"
              name="district_id"
              id="district_id"
              className="w-full outline-none rounded-sm px-4 py-2 border border-gray-400"
              placeholder="Numero du district"
              {...register("district_id")}
            />
            {errors.district_id?.message && (
              <span className="text-sm -mt-2 text-red-500">
                {errors.district_id?.message}
              </span>
            )}
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
