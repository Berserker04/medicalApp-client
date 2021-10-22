import React from "react";
import Logo from "../../../assets/img/logos/MedicalApp.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const hiddenLateralNav = () => {
    document.getElementById("sidenav-main").classList.toggle("bg-white");
    document.getElementById("body-id").classList.toggle("g-sidenav-pinned");
  };

  const { user } = useSelector((state) => state.user);

  return (
    <>
      <aside
        className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 ps"
        id="sidenav-main"
      >
        <div className="sidenav-header">
          <i
            onClick={() => hiddenLateralNav()}
            className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-xl-none"
            aria-hidden="true"
            id="iconSidenav"
          ></i>
          <NavLink activeClassName="active" className="nav-link  " exact to="/">
            <img
              src={Logo}
              className="navbar-brand-img h-100"
              alt="main_logo"
              style={{ borderRadius: 50 }}
            />
            <span className="ms-1 font-weight-bold">MedicalApp</span>
          </NavLink>
        </div>
        <hr className="horizontal dark mt-0" />
        <div
          className="collapse navbar-collapse  w-auto  max-height-vh-100 h-100"
          id="sidenav-collapse-main"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                exact
                to="/"
              >
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i
                    class="fas fa-home"
                    style={{ fontSize: 20, color: "#000" }}
                  ></i>
                </div>
                <span className="nav-link-text ms-1">Inicio</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="horarios"
              >
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i
                    className="fas fa-user-clock"
                    style={{ fontSize: 20, color: "#000" }}
                  ></i>
                </div>
                <span className="nav-link-text ms-1">Horaios</span>
              </NavLink>
            </li>
            {user.role_id === 1 && (
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link  "
                  to="empleados"
                >
                  <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i
                      className="fas fa-users"
                      style={{ fontSize: 20, color: "#000" }}
                    ></i>
                  </div>
                  <span className="nav-link-text ms-1">Empleados</span>
                </NavLink>
              </li>
            )}
            {user.role_id === 1 && (
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link  "
                  to="profesiones"
                >
                  <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i
                      className="fas fa-user-md"
                      style={{ fontSize: 20, color: "#000" }}
                    ></i>
                  </div>
                  <span className="nav-link-text ms-1">Profesiones</span>
                </NavLink>
              </li>
            )}
            {user.role_id === 1 && (
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link  "
                  to="especialidades"
                >
                  <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i
                      className="fas fa-user-tag"
                      style={{ fontSize: 20, color: "#000" }}
                    ></i>
                  </div>
                  <span className="nav-link-text ms-1">Especialidades</span>
                </NavLink>
              </li>
            )}

            <hr className="horizontal dark mt-0" />
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link  "
                to="perfil"
              >
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i
                    className="fas fa-male"
                    style={{ fontSize: 20, color: "#000" }}
                  ></i>
                </div>
                <span className="nav-link-text ms-1">Perfil</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="ps__rail-x" style={{ left: "0px", bottom: "0px" }}>
          <div
            className="ps__thumb-x"
            style={{ left: "0px", width: "0px" }}
          ></div>
          <div
            className="ps__rail-y"
            style={{ top: "0px", height: "583px", right: "0px" }}
          >
            <div
              className="ps__thumb-y"
              style={{ top: "0px", height: "366px" }}
            ></div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
