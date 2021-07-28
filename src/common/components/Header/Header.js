/** @format */
import React from "react";
import PropTypes from "prop-types";

import { useHistory, useLocation, Link } from "react-router-dom";

const Header = ({ isSignedIn }) => {
  const location = useLocation();
  const history = useHistory();

  const { pathname } = location;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div className="container-fluid">
        <Link to="" className="navbar-brand" href="/">
          <img
            src="/e-nagar-palika.png"
            alt=""
            width="222"
            height="36"
            className="d-inline-block align-text-top"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="me-auto" />
          <ul className="navbar-nav">
            {pathname === "/" ||
              pathname === "/register" ||
              (pathname === "/login" && (
                <li className="nav-item">
                  <Link
                    to=""
                    className="nav-link "
                    onClick={() => {
                      window.scrollTo({
                        behavior: "smooth",
                        top: window.innerHeight,
                      });
                    }}
                  >
                    Issue Tracker
                  </Link>
                </li>
              ))}
            {pathname !== "/" ||
              pathname !== "/register" ||
              (pathname !== "/login" && (
                <li className="nav-item">
                  <Link
                    to=""
                    className="nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <i className="bi bi-bell" />
                  </Link>
                </li>
              ))}
            {isSignedIn && (
              <li className="nav-item">
                <div className="dropdown">
                  <Link
                    to=""
                    className="nav-link dropdown-toggle"
                    onClick={() => {}}
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-person-circle" />
                  </Link>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link
                        to=""
                        className="dropdown-item"
                        onClick={() => {
                          history.push("/account");
                        }}
                      >
                        Update Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="dropdown-item"
                        onClick={() => {
                          history.push("/account");
                        }}
                      >
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="dropdown-item" onClick={() => {fire}}>
                        Sign out
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  isSignedIn: PropTypes.bool,
};

Header.defaultProps = {
  isSignedIn: true,
};

export default Header;
