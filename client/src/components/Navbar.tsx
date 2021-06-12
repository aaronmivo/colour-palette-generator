//@ts-nocheck
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between items-center shadow-lg">
      <div className="flex justify-between items-center my-4">
        <div className="mx-4">
          <h1 className="text-2xl">
            <NavLink to="/">UNNAMED APP</NavLink>
          </h1>
        </div>
        <div className="mx-4">
          <NavLink to="/palette">Palette</NavLink>
        </div>
        <div className="mx-4">
          <NavLink to="/demo">Demo</NavLink>
        </div>
        <div className="mx-4">
          <NavLink to="/templates">Templates</NavLink>
        </div>
      </div>
      <div className="mx-4">
        <p>Register (modal)</p>
      </div>
    </div>
  );
}

export default Navbar;