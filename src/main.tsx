import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import { RootLayout } from "./layouts/RootLayout";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import ErrorPage from "./pages/Error";
import { Home } from "./pages/Home";
import { Project } from "./pages/Project";
import { Projects } from "./pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contacts",
        element: <Contact />
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/projects/:projectId",
        element: <Project />
      }
    ]
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* NO SINGLE COMPONENT ANYMORE */}
    {/* NEED PROVIDER THAT PROVIDE DIFFERENT COMPONENTS (PAGES) */}
    <RouterProvider router={router} />
  </StrictMode>
);
