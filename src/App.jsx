import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import RegionPage from "./pages/regions/RegionPage";
import DistrictPage from "./pages/districts/DistrictPage";
import UtilisateurPage from "./pages/utilisateurs/UtilisateurPage";
import MemberPage from "./pages/members/MemberPage";
import PaysPage from "./pages/pays/PaysPage";
import ZonePage from "./pages/zones/ZonePage";
import ClubPage from "./pages/clubs/ClubPage";

function App() {
  return (
    <div className="w-full flex flex-grow bg-stone-100 font-sans">
      <BrowserRouter>
        <Routes>
          <Route path="/compte/regions" element={<RegionPage />} />
          <Route path="/compte/districts" element={<DistrictPage />} />
          <Route path="/compte/utilisateurs" element={<UtilisateurPage />} />
          <Route path="/compte/membres" element={<MemberPage />} />
          <Route path="/compte/pays" element={<PaysPage />} />
          <Route path="/compte/zones" element={<ZonePage />} />
          <Route path="/compte/clubs" element={<ClubPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
