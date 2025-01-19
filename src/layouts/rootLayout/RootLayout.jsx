import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./rootLayout.css";

export default function RootLayout() {
  return (
    <div className="rootlayout">
      <header>
        <Link className="logo" to="/dashboard">
          <img src="/deeplearning.png" alt="" />
          <span>Interpreteur ChatGPT</span>
        </Link>
        <div className="user">
          <img src="/user.png" alt="" />
          <span>John Doe</span>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
