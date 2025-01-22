// filepath: /c:/Users/HP 450/OneDrive/Bureau/Reactjs/chatgpt-clone/src/components/PrivateRoute.jsx
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/sign-in" />;
  }

  return children;
};

export default PrivateRoute;
