import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import RegionPage from "./pages/regions/RegionPage";
import DistrictPage from "./pages/districts/DistrictPage";

function App() {
  return (
    <div className="w-full">
      <BrowserRouter>
        <Routes>
          <Route path="/compte/regions" element={<RegionPage />} />
          <Route path="/compte/districts" element={<DistrictPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
