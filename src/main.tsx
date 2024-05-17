import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SendEmail from "./pages/sendEmail.tsx";
import AddTemplate from "./pages/addTemplate.tsx";
import ViewLogs from "./pages/viewLogs.tsx";
import AddConfig from "./pages/addConfig.tsx";
import ErrorPage from "./pages/error.tsx";
import ManageUsers from "./pages/manageUsers.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/send-email",
    element: <SendEmail />,
  },
  {
    path: "/add-template",
    element: <AddTemplate />,
  },
  {
    path: "/view-logs",
    element: <ViewLogs />,
  },
  {
    path: "/add-config",
    element: <AddConfig />,
  },
  {
    path: "/manage-users",
    element: <ManageUsers />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
