import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import HeaderComponent from "../../components/header/HeaderComponent";
import TitlePage from "../../components/utilities/TitlePage";
import ConfirmModalDelete from "../../components/utilities/ConfirmModalDelete";
import ListZones from "../../components/zones/ListZones";
import CardZones from "../../components/zones/CardZones";
import SearchField from "../../components/utilities/SearchField";
import AddZoneModal from "../../components/zones/AddZoneModal";
import EditZoneModal from "../../components/zones/EditZoneModal";
import DeleteZoneModal from "../../components/zones/DeleteZoneModal";

export default function ZonePage() {
  // state pour stocker l id du zone
  const [zoneId, setZoneId] = React.useState(null);

  // state pour stocker l id du region
  const [regionId, setRegionId] = React.useState(null);

  // state pour stocker l id du pays
  const [paysId, setPaysId] = React.useState(null);

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

  // fonction pour recuperer l id du zone a modifier
  const handleOpenEditModal = (id, idRegion, idPays) => {
    setZoneId(id);
    setRegionId(idRegion);
    setPaysId(idPays);
    setOpenEditModal(true);
  };

  // fonction pour recuperer l id du zone a supprimer
  const handleOpenDeleteModal = (id, idRegion) => {
    setZoneId(id);
    setOpenModalDelete(true);
  };

  return (
    <>
      <EditZoneModal
        open={openEditModal}
        handleClose={() => setOpenEditModal(false)}
        id={zoneId}
        idPays={paysId}
        idRegion={regionId}
      />
      <AddZoneModal
        open={openAddModal}
        handleClose={() => setOpenAddModal(false)}
      />
      <DeleteZoneModal
        open={openModalDelete}
        handleClose={() => setOpenModalDelete(false)}
        id={zoneId}
      />
      <Sidebar
        openMenuMobile={openMenuMobile}
        closeMenuMobile={() => setOpenMenuMobile(false)}
      />
      <div className="w-full">
        <HeaderComponent handleOpenMenuMobile={() => setOpenMenuMobile(true)} />
        <div className="box-border lg:p-6 p-2 text-justify w-full">
          <div className="w-full">
            <TitlePage>Les Zones</TitlePage>
          </div>

          <div className="w-full flex flex-col-reverse space-y-3 md:space-y-0 md:flex-row md:justify-between md:items-center mb-4 md:space-x-5">
            <SearchField
              placeholder={"rechercher zone..."}
              handleSearchTerm={setSearchTerm}
              searchTerm={searchTerm}
            />
            <button
              onClick={() => setOpenAddModal(true)}
              className="bg-blue-500 text-sm px-4 h-10 font-semibold rounded-sm text-white flex-shrink-0 box-border hover:bg-blue-700 transition-all duration-300"
            >
              Nouveau zone
            </button>
          </div>
          <div>
            <ListZones
              handleOpenModalDelete={handleOpenDeleteModal}
              searchTerm={searchTerm}
              handleOpenModalEdit={handleOpenEditModal}
            />
          </div>
        </div>
      </div>
    </>
  );
}
