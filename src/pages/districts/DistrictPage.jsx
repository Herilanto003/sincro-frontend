import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import HeaderComponent from "../../components/header/HeaderComponent";
import TitlePage from "../../components/utilities/TitlePage";
import ListDistrict from "../../components/district/ListDistrict";
import ConfirmModalDelete from "../../components/utilities/ConfirmModalDelete";
import AddDistrictModal from "../../components/district/AddDistrictModal";
import SearchField from "../../components/utilities/SearchField";
import EditDistrictModal from "../../components/district/EditDistrictModal";
import DeleteDistrictModal from "../../components/district/DeleteDistrictModal";

export default function DistrictPage() {
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

  // fonction pour recuperer l id et d ouvrir le modal de suppression a la fois
  const handleDeleteDistrict = (id) => {
    setDistrictId(id);
    setOpenModalDelete(true);
  };

  // fonction pour recuperer l id et d ouvrir le modal d editer a la fois
  const handleEditDistrict = (id) => {
    setDistrictId(id);
    setOpenEditModal(true);
  };

  return (
    <>
      <AddDistrictModal
        open={openAddModal}
        handleClose={() => setOpenAddModal(false)}
      />
      <EditDistrictModal
        open={openEditModal}
        handleClose={() => setOpenEditModal(false)}
        id={districtId}
      />
      <DeleteDistrictModal
        open={openModalDelete}
        handleClose={() => setOpenModalDelete(false)}
        id={districtId}
      />
      <Sidebar
        openMenuMobile={openMenuMobile}
        closeMenuMobile={() => setOpenMenuMobile(false)}
      />
      <div className="w-full">
        <HeaderComponent handleOpenMenuMobile={() => setOpenMenuMobile(true)} />
        <div className="box-border lg:p-6 p-2 text-justify w-full">
          <div className="w-full">
            <TitlePage>Les Districts</TitlePage>
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
                Nouveau district
              </button>
            </div>
            <ListDistrict
              handleOpenModalDelete={handleDeleteDistrict}
              searchTerm={searchTerm}
              handleOpenModalEdit={handleEditDistrict}
            />
          </div>
        </div>
      </div>
    </>
  );
}
