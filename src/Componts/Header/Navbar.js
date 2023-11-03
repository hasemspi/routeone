import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" To={'/'}>
            CodeDev
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link active" aria-current="page" to={'/'}>
                Home
              </NavLink>
              <NavLink className="nav-link" to={'/about'}>
                About Us
              </NavLink>
              <NavLink className="nav-link" to={'/service'}>
                Service
              </NavLink>
              <NavLink className="nav-link" to={'/blog'}>
                Blog 
              </NavLink>
              <NavLink className="nav-link" to={'/contact'}>
                Contact 
              </NavLink>
             
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
