import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import HeaderComponent from "../../components/header/HeaderComponent";
import TitlePage from "../../components/utilities/TitlePage";
import ListUtilisateurs from "../../components/utilisateurs/ListUtilisateurs";
import CardUtilisateurs from "../../components/utilisateurs/CardUtilisateurs";
import ConfirmModalDelete from "../../components/utilities/ConfirmModalDelete";

export default function UtilisateurPage() {
  const [openMenuMobile, setOpenMenuMobile] = React.useState(false);
  const [openModalDelete, setOpenModalDelete] = React.useState(false);
  return (
    <>
      <ConfirmModalDelete
        open={openModalDelete}
        handleClose={() => setOpenModalDelete(false)}
      />
      <Sidebar
        openMenuMobile={openMenuMobile}
        closeMenuMobile={() => setOpenMenuMobile(false)}
      />
      <div className="w-full">
        <HeaderComponent handleOpenMenuMobile={() => setOpenMenuMobile(true)} />
        <div className="box-border lg:p-6 p-2 text-justify w-full">
          <div className="w-full">
            <TitlePage>Les utilisateurs</TitlePage>
          </div>
          <div>
            <ListUtilisateurs
              handleOpenModalDelete={() => setOpenModalDelete(true)}
            />
          </div>
          <div>
            <CardUtilisateurs
              handleOpenModalDelete={() => setOpenModalDelete(true)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
