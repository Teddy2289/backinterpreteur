import React, { useEffect } from "react";
import "./dashboard.css";

export default function Dashboard() {
  const handleSubmit = () => {};
  return (
    <div className="dashboardPage">
      <div className="texts">
        <div className="logo">
          <a href="/dashboard">
            <img src="/deeplearning.png" alt="dashboard" />
            <h1>Interpreteur ChatGPT</h1>
          </a>
        </div>
        <div className="options">
          <div className="option">
            <img src="/chat.png" alt="" />
            <span>Create a New Chat</span>
          </div>
          <div className="option">
            <img src="/image.png" alt="" />
            <span>Analyze Images</span>
          </div>
          <div className="option">
            <img src="/code.png" alt="" />
            <span>Help me with my Code</span>
          </div>
        </div>
      </div>
      {/* <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <input type="text" name="text" placeholder="Ask me anything..." />
          <button>
            <img src="/arrow.png" alt="" />
          </button>
        </form>
      </div> */}
    </div>
  );
}
