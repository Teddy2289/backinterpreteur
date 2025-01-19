import React, { useEffect, useRef, useState } from "react";
import "./newPrompt.css";
import Upload from "../upload/Upload";
import Markdown from "react-markdown";
export default function NewPrompt() {
  return (
    <>
      <div className="message">
        <Markdown></Markdown>
      </div>
      <div className="endChat"></div>
      <form className="newForm">
        <Upload setImg={(setImg) => {}} />
        <input id="file" type="file" multiple={false} hidden />
        <input type="text" name="text" placeholder="Ask anything..." />
        <button>
          <img src="/arrow.png" alt="" />
        </button>
      </form>
    </>
  );
}
