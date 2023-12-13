import React from "react";
import "./HomeComponent.css";
import {NavLink } from "react-router-dom";

function HomeComponent() {
    return (
      <div className="home">
        <h2 style={{fontSize: "50px"}}>Quiz App</h2>
        <NavLink to="/Quiz">
          <button className="home-bt">Play</button>
        </NavLink>
      </div>
    );
  }

export default HomeComponent;