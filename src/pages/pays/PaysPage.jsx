import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import HeaderComponent from "../../components/header/HeaderComponent";
import TitlePage from "../../components/utilities/TitlePage";
import ConfirmModalDelete from "../../components/utilities/ConfirmModalDelete";
import ListPays from "../../components/pays/ListPays";
import CardPays from "../../components/pays/CardPays";
import SearchField from "../../components/utilities/SearchField";
import { useQuery } from "@tanstack/react-query";
import { BACKEND_PROXY } from "../../../proxy";
import axios from "axios";
import AddPaysModal from "../../components/pays/AddPaysModal";
import EditPaysModal from "../../components/pays/EditPaysModal";
import ConfirmDeletePays from "../../components/pays/ConfirmDeletePays";

export default function PaysPage() {
  // state pour stocker l id du pays
  const [paysId, setPaysId] = React.useState(null);

  // state pour ouvrir le menu mobile
  const [openMenuMobile, setOpenMenuMobile] = React.useState(false);

  // state pour le filtrage de recherche
  const [searchTerm, setSearchTerm] = React.useState("");

  // state pour ouvrir ou fermer le modal delete
  const [openModalDelete, setOpenModalDelete] = React.useState(false);

  // state pour permettre d ouvrir ou de fermer le modal d ajout
  const [openAddPays, setOpenAddPays] = React.useState(false);

  // state pour permettre d ouvrir ou de fermer le modal d editer
  const [openEditPays, setOpenEditPays] = React.useState(false);

  // utilisation pour fetching les donnees
  const { data, error, isLoading } = useQuery({
    queryKey: ["pays"],
    queryFn: () =>
      axios
        .get("/pays/")
        .then((res) => {
          return res.data;
        })
        .catch((err) => console.log(err.response.status)),
  });

  if (isLoading) {
    console.log("loading data for country...");
  }
  if (error) {
    console.log(error);
  }
  if (data) {
    console.log(data);
  }

  // fonction pour recuperer l id et d ouvrir le modal d editer a la fois
  const handleEditPays = (id) => {
    setPaysId(id);
    setOpenEditPays(true);
  };

  // fonction pour recuperer l id et d ouvrir le modal de suppression a la fois
  const handleDeletePays = (id) => {
    setPaysId(id);
    setOpenModalDelete(true);
  };

  return (
    <>
      <EditPaysModal
        link={BACKEND_PROXY + "pays/" + paysId}
        open={openEditPays}
        handleClose={() => setOpenEditPays(false)}
        id={paysId}
      />
      <AddPaysModal
        open={openAddPays}
        handleClose={() => setOpenAddPays(false)}
      />
      <ConfirmDeletePays
        open={openModalDelete}
        handleClose={() => setOpenModalDelete(false)}
        id={paysId}
      />
      <Sidebar
        openMenuMobile={openMenuMobile}
        closeMenuMobile={() => setOpenMenuMobile(false)}
      />
      <div className="w-full">
        <HeaderComponent handleOpenMenuMobile={() => setOpenMenuMobile(true)} />
        <div className="box-border lg:p-6 p-2 text-justify w-full">
          <div className="w-full">
            <TitlePage>Les pays</TitlePage>
          </div>

          <div className="w-full flex flex-col-reverse space-y-3 md:space-y-0 md:flex-row md:justify-between md:items-center mb-4 md:space-x-5">
            <SearchField
              placeholder={"rechercher pays..."}
              handleSearchTerm={setSearchTerm}
              searchTerm={searchTerm}
            />
            <button
              onClick={() => setOpenAddPays(true)}
              className="bg-blue-500 text-sm px-4 h-10 font-semibold rounded-sm text-white flex-shrink-0 box-border hover:bg-blue-700 transition-all duration-300"
            >
              Nouveau pays
            </button>
          </div>
          <div>
            <ListPays
              handleOpenModalDelete={handleDeletePays}
              searchTerm={searchTerm}
              handleOpenModalEdit={handleEditPays}
            />
          </div>
        </div>
      </div>
    </>
  );
}
