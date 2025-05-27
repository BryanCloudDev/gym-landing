import { createBrowserRouter, RouterProvider } from "react-router";
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import App from './App'
import PersonalTrainingPage from "./pages/PersonalTrainingPage";
import SportsTherapyPage from "./pages/SportsTherapyPage";
import DayPassPage from "./pages/DayPassPage";
import OnlineTrainingPage from "./pages/OnlineTrainingPage";
import NutritionPlansPage from "./pages/NutritionPlansPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    index: true,
  },
  {
    path: "/personal-training",
    element: <PersonalTrainingPage />,
  },
  {
    path: "/sports-therapy",
    element: <SportsTherapyPage />,
  },
  {
    path: "/day-pass",
    element: <DayPassPage />
  },
  {
    path: "/online-training",
    element: <OnlineTrainingPage />,
  },
  {
    path: "/nutrition-plans",
    element: <NutritionPlansPage/>,
  }
]);


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
