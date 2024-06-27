import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import HeaderComponent from "../../components/header/HeaderComponent";
import TitlePage from "../../components/utilities/TitlePage";
import ConfirmModalDelete from "../../components/utilities/ConfirmModalDelete";
import ListClubs from "../../components/clubs/ListClubs";
import CardClubs from "../../components/clubs/CardClubs";
import SearchField from "../../components/utilities/SearchField";
import AddClubModal from "../../components/clubs/AddClubModal";
import EditClubModal from "../../components/clubs/EditClubModal";
import DeleteClubModal from "../../components/clubs/DeleteClubModal";

export default function ClubPage() {
  // state pour stocker l id du club
  const [clubId, setClubId] = React.useState(null);

  // state pour stocker l id du zone
  const [zoneId, setZoneId] = React.useState(null);

  // state pour ouvrir le menu mobile
  const [openMenuMobile, setOpenMenuMobile] = React.useState(false);

  // state pour le filtrage de recherche
  const [searchTerm, setSearchTerm] = React.useState("");

  // state pour ouvrir ou fermer le modal delete
  const [openModalDelete, setOpenModalDelete] = React.useState(false);

  // state pour permettre d ouvrir ou de fermer le modal d ajout
  const [openAddModal, setOpenAddModal] = React.useState(false);

  // state pour permettre d ouvrir ou de fermer le modal d editer
  const [openEditModal, setOpenEditModal] = React.useState(false);

  // state pour stocker les clubs
  const [clubs, setClubs] = React.useState([]);

  // fonction pour recuperer l id du club a modifier
  const handleOpenEditModal = (id, idZone) => {
    setClubId(id);
    setZoneId(idZone);
    setOpenEditModal(true);
  };

  // fonction pour recuperer l id du club a supprimer
  const handleOpenDeleteModal = (id) => {
    setClubId(id);
    setOpenModalDelete(true);
  };

  return (
    <>
      <DeleteClubModal
        open={openModalDelete}
        handleClose={() => setOpenModalDelete(false)}
        id={clubId}
      />
      <EditClubModal
        open={openEditModal}
        handleClose={() => setOpenEditModal(false)}
        id={clubId}
        idZone={zoneId}
      />
      <AddClubModal
        open={openAddModal}
        handleClose={() => setOpenAddModal(false)}
      />

      <Sidebar
        openMenuMobile={openMenuMobile}
        closeMenuMobile={() => setOpenMenuMobile(false)}
      />
      <div className="w-full">
        <HeaderComponent handleOpenMenuMobile={() => setOpenMenuMobile(true)} />
        <div className="box-border lg:p-6 p-2 text-justify w-full">
          <div className="w-full">
            <TitlePage>Les Clubs</TitlePage>
          </div>
          <div>
            <div className="w-full flex flex-col-reverse space-y-3 md:space-y-0 md:flex-row md:justify-between md:items-center mb-4 md:space-x-5">
              <SearchField
                placeholder={"rechercher clubs..."}
                handleSearchTerm={setSearchTerm}
                searchTerm={searchTerm}
              />
              <button
                onClick={() => setOpenAddModal(true)}
                className="bg-blue-500 text-sm px-4 h-10 font-semibold rounded-sm text-white flex-shrink-0 box-border hover:bg-blue-700 transition-all duration-300"
              >
                Nouveau club
              </button>
            </div>
            <ListClubs
              handleOpenModalDelete={handleOpenDeleteModal}
              // data={regions}
              searchTerm={searchTerm}
              handleOpenModalEdit={handleOpenEditModal}
            />
          </div>
        </div>
      </div>
    </>
  );
}
