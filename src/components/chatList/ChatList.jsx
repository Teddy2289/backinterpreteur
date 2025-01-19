import React from "react";
import "./chatList.css";
import { Link } from "react-router-dom";

export default function ChatList() {
  return (
    <div className="chatList">
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">Create a new Chat</Link>
      <Link to="/">Contact</Link>
      <hr />
      <span className="title">RECENT CHATS</span>
      <div className="list">
        <Link to="/dashboard/chat/1">Chat</Link>
      </div>
      <hr />
      <div className="upgrade">
        <img src="/deeplearning.png" alt="" />
        <div className="texts">
          <span>Interpreteur ChatGPT</span>
        </div>
      </div>
    </div>
  );
}
