// filepath: /c:/Users/HP 450/OneDrive/Bureau/Reactjs/chatgpt-clone/src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/homePage/HomePage";
import ChatPage from "./routes/chatPage/Chat.jsx";
import Dashboard from "./routes/dashboard/Dashboard";
import RootLayout from "./layouts/rootLayout/RootLayout.jsx";
import DashboardLayout from "./layouts/dashboardLayout/DashboardLayout.jsx";
import SingUpPage from "./routes/singUpPage/SingUpPage.jsx";
import SingInPage from "./routes/singInPage/SingInPage.jsx";
import MfaVerification from "./components/mfaverification/MfaVerification.jsx";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/sign-in/*",
        element: <SingInPage />,
      },
      {
        path: "/sign-up/*",
        element: <SingUpPage />,
      },
      {
        path: "/mfa-verification",
        element: <MfaVerification />,
      },
      {
        element: (
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        ),
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "/dashboard/chat/:id",
            element: <ChatPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
