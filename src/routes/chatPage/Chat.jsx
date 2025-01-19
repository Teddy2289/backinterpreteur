import React from "react";
import "./chatPage.css";
import NewPrompt from "../../components/NewPrompt/NewPrompt";

export default function Chat() {
  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <NewPrompt />
        </div>
      </div>
    </div>
  );
}
