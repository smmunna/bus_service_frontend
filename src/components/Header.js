/* eslint-disable react/style-prop-object */
import React from "react";
import MenuIcon from "../images/menu.png";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="App">
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            IUBAT Bus Services
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span class="navbar-toggler-icon"></span> */}
            <span class="material-symbols-outlined">
              <img src={MenuIcon} alt="" height="30" width="30" srcset="" />
            </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {auth ? (
                <>
                  <li class="nav-item">
                    <Link class="nav-link" aria-current="page" to="/">
                      Home
                    </Link>
                  </li>

                  <li class="nav-item">
                    <Link class="nav-link" to="/show">
                      Show
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/login" onClick={logout}>
                      Logout
                    </Link>
                  </li>
                  <li class="nav-item">
                    <p className="wel-name"> Hello,{JSON.parse(auth).name}</p>
                  </li>
                </>
              ) : (
                <>
                  <li class="nav-item">
                    <Link class="nav-link" to="/signup">
                      Sign-Up
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <span class="navbar-text">Simple App for showing the Bus schedule</span>
          </div>
        </div>
      </nav>
    </div>
  );
}
