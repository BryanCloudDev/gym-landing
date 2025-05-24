import { createBrowserRouter, RouterProvider } from "react-router";
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import App from './App'
import PersonalTrainingPage from "./pages/PersonalTrainingPage";

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
]);


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
