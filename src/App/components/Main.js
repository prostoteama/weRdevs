import React from "react";
import { DateTable } from "./";
import "./styles/Main.scss";

export const Main = () => {
  return (
    <div className="main">
      <div className="wrapper">
        <div className="title">
          <h1 className="title__main">Choose the day for the meeting</h1>
          <p className="title__secondary">We encourage you to book your <br/> appointment online. <br/> This will save you time.</p>
        </div>
        <DateTable />
      </div>
    </div>
  );
};
