// filepath: /c:/Users/HP 450/OneDrive/Bureau/Reactjs/chatgpt-clone/src/layouts/rootLayout/RootLayout.jsx
import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./rootLayout.css";

export default function RootLayout() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="rootlayout">
      <header>
        <Link className="logo" to="/dashboard">
          <img src="/deeplearning.png" alt="" />
          <span>Interpreteur ChatGPT</span>
        </Link>
        <div className="user">
          <img src="/user.png" alt="" />
          <span>{user ? user.name : "Guest"}</span>
          {user && (
            <button onClick={logout} className="logout-button">
              Logout
            </button>
          )}
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
