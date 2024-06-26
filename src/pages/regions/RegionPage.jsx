import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import HeaderComponent from "../../components/header/HeaderComponent";
import TitlePage from "../../components/utilities/TitlePage";
import ListRegion from "../../components/region/ListRegion";
import SearchField from "../../components/utilities/SearchField";
import AddRegionModal from "../../components/region/AddRegionModal";
import EditRegionModal from "../../components/region/EditRegionModal";
import ConfirmModal from "../../components/region/ConfirmModal";

export default function RegionPage() {
  // state pour stocker l id du region
  const [regionId, setRegionId] = React.useState(null);

  // state pour stocker l id du district
  const [districtId, setDistrictId] = React.useState(null);

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

  // state pour stocker les regions
  const [regions, setRegions] = React.useState([]);

  // fonction pour recuperer l id du region a modifier
  const handleOpenEditModal = (id, idDistrict) => {
    setRegionId(id);
    setDistrictId(idDistrict);
    setOpenEditModal(true);
  };

  // fonction pour recuperer l id du region a supprimer
  const handleOpenDeleteModal = (id, idDistrict) => {
    setRegionId(id);
    setDistrictId(idDistrict);
    setOpenModalDelete(true);
  };

  return (
    <>
      <EditRegionModal
        open={openEditModal}
        handleClose={() => setOpenEditModal(false)}
        id={regionId}
        idDistrict={districtId}
      />
      <AddRegionModal
        open={openAddModal}
        handleClose={() => setOpenAddModal(false)}
      />
      <ConfirmModal
        open={openModalDelete}
        handleClose={setOpenModalDelete}
        id={regionId}
      />
      <Sidebar
        openMenuMobile={openMenuMobile}
        closeMenuMobile={() => setOpenMenuMobile(false)}
      />
      <div className="w-full">
        <HeaderComponent handleOpenMenuMobile={() => setOpenMenuMobile(true)} />
        <div className="box-border lg:p-6 p-2 text-justify w-full">
          <div className="w-full">
            <TitlePage>Les regions</TitlePage>
            {/* <button className="bg-primary-300 rounded-sm text-gray-800 font-semibold text-md flex justify-between px-4 py-1 items-center space-x-2 transition-all hover:bg-primary-200">
              <FaPlus />
              <span>Nouveau region</span>
            </button> */}
          </div>
          <div>
            <div className="w-full flex flex-col-reverse space-y-3 md:space-y-0 md:flex-row md:justify-between md:items-center mb-4 md:space-x-5">
              <SearchField
                placeholder={"rechercher district..."}
                handleSearchTerm={setSearchTerm}
                searchTerm={searchTerm}
              />
              <button
                onClick={() => setOpenAddModal(true)}
                className="bg-blue-500 text-sm px-4 h-10 font-semibold rounded-sm text-white flex-shrink-0 box-border hover:bg-blue-700 transition-all duration-300"
              >
                Nouveau region
              </button>
            </div>
            <ListRegion
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
