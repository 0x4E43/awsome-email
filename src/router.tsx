import { RouteObject } from "react-router-dom";
import SendEmail from "./pages/sendEmail.tsx";
import LoginPage from "./pages/loginPage.tsx";
import AddConfig from "./pages/addConfig.tsx";
import AddTemplate from "./pages/addTemplate.tsx";
import ErrorPage from "./pages/error.tsx";
import ManageUsers from "./pages/manageUsers.tsx";
import ViewLogs from "./pages/viewLogs.tsx";
import { ProtectedRoute } from "./hooks/AuthProvider.tsx";

import "./index.css";
import Dashboard from "./pages/dashboard.tsx";

export const routes: RouteObject[] = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <LoginPage />, // Redirect to LoginPage if not authenticated
  },
  {
    path: "",
    element: <ErrorPage />,
  }, // Default child route

  {
    path: "send-email",
    element: <ProtectedRoute element={<SendEmail />} />,
  },
  {
    path: "dashboard",
    element: <ProtectedRoute element={<Dashboard />} />,
  },
  {
    path: "add-template",
    element: <ProtectedRoute element={<AddTemplate />} />,
  },
  { path: "view-logs", element: <ProtectedRoute element={<ViewLogs />} /> },
  {
    path: "add-config",
    element: <ProtectedRoute element={<AddConfig />} />,
  },
  {
    path: "manage-users",
    element: <ProtectedRoute element={<ManageUsers />} />,
  },
  // children: [
  //   { path: "", element: <ErrorPage /> }, // Default child route
  //   {
  //     path: "send-email",
  //     element: <ProtectedRoute element={<SendEmail />} />,
  //   },
  //   {
  //     path: "dashboard",
  //     element: <ProtectedRoute element={<Dashboard />} />,
  //   },
  //   {
  //     path: "add-template",
  //     element: <ProtectedRoute element={<AddTemplate />} />,
  //   },
  //   { path: "view-logs", element: <ProtectedRoute element={<ViewLogs />} /> },
  //   {
  //     path: "add-config",
  //     element: <ProtectedRoute element={<AddConfig />} />,
  //   },
  //   {
  //     path: "manage-users",
  //     element: <ProtectedRoute element={<ManageUsers />} />,
  //   },
  // ],
];
