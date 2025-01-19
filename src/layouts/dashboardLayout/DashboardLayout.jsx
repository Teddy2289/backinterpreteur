import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ChatList from "../../components/chatList/ChatList";
import "./dashboardLayout.css";

export default function DashboardLayout() {
  const navigate = useNavigate();

  return (
    <div className="dashboardLayout">
      <div className="menu">
        <ChatList />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
