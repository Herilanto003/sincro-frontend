import { createBrowserRouter } from "react-router-dom";
import DistrictPage from "../pages/districts/DistrictPage";
import RegionPage from "../pages/regions/RegionPage";
import ZonePage from "../pages/zones/ZonePage";
import AccueilPage from "../pages/accueil/AccueilPage.jsx";
import DashboardPage from "../pages/dashboard/DashboardPage.jsx";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <AccueilPage />,
  },
  {
    path: "/compte/tableau-de-bord",
    element: <DashboardPage />,
  },
  {
    path: "/compte/district",
    element: <DistrictPage />,
  },
  {
    path: "/compte/region",
    element: <RegionPage />,
  },
  {
    path: "/compte/zone",
    element: <ZonePage />,
  },
]);
