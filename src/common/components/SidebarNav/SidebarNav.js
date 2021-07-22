/** @format */
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useLocation } from "react-router";
import classnames from "classnames";

import { Container } from "./styles";

const SidebarNav = ({ accountType }) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <Container className="d-flex flex-column flex-shrink-0 bg-light">
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li className="nav-item">
          <Link
            to="/dashboard"
            className={classnames("nav-link py-3 border-bottom", {
              active: pathname === "/dashboard",
            })}
            aria-current="page"
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Home"
          >
            <i className="bi bi-house-door" style={{ fontSize: "32px" }}></i>
          </Link>
        </li>
        {accountType === "USER" && (
          <li>
            <Link
              to="/grievances/new"
              className={classnames("nav-link py-3 border-bottom", {
                active: pathname === "/grievances/new",
              })}
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Add Grievances"
            >
              <i className="bi bi-plus-circle" style={{ fontSize: "32px" }}></i>
            </Link>
          </li>
        )}
        <li>
          <Link
            to="/grievances"
            className={classnames("nav-link py-3 border-bottom", {
              active: pathname === "/grievances",
            })}
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Timeline"
          >
            <i className="bi bi-kanban" style={{ fontSize: "32px" }}></i>
          </Link>
        </li>

        <li>
          <Link
            to="/contact-us"
            className={classnames("nav-link py-3 border-bottom", {
              active: pathname === "/contact-us",
            })}
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Contact Us"
          >
            <i
              className="bi bi-question-circle"
              style={{ fontSize: "32px" }}
            ></i>
          </Link>
        </li>
      </ul>
    </Container>
  );
};

SidebarNav.propTypes = {
  accountType: PropTypes.oneOf(["USER", "MANAGER", "ADMIN"]),
};

SidebarNav.defaultProps = {
  accountType: "USER",
};

export default SidebarNav;
