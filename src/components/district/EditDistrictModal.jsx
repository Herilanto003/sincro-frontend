import React from "react";
import { FaTimes } from "react-icons/fa";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useUpdateData from "../../my-hooks/useUpdateData";
import useGeteOneData from "../../my-hooks/useGetOneData";
import { RefreshDataContext } from "../../my-context/RefreshDataContext";
import { toast } from "react-toastify";

export default function EditDistrictModal({ open, handleClose, link, id }) {
  // recuperer le district a modifier
  const districtSelected = useGeteOneData("/districts/" + id);
  const { refreshData, setRefreshData } = React.useContext(RefreshDataContext);
  const [isPending, setIsPending] = React.useState(false);

  // utilisation du hook pour la modification
  const { putData } = useUpdateData("/districts/" + id);

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
    watch,
    setValue,
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
        <h1 className="text-center text-xl font-semibold">
          Modification district
        </h1>
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
              defaultValue={districtSelected?.data.district_id || ""}
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
