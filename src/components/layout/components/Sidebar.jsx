import React from 'react';
import Logo from '../../../assets/img/logos/MedicalApp.png'
import {NavLink} from "react-router-dom"

const Sidebar = () => {
    return (
        <>
            <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 ps ps--active-y bg-white" id="sidenav-main">
                <div className="sidenav-header">
                    <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                    <a className="navbar-brand m-0" href="#">
                        <img src={Logo} className="navbar-brand-img h-100" alt="main_logo" style={{borderRadius:50}} />
                        <span className="ms-1 font-weight-bold">MedicalApp</span>
                    </a>
                </div>
                <hr className="horizontal dark mt-0" />
                <div className="collapse navbar-collapse w-auto max-height-vh-100 h-100 ps" id="sidenav-collapse-main">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" exact to="/">
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                <i class="fas fa-user-clock" style={{fontSize:20, color:"#000"}}></i>
                                </div>
                                <span className="nav-link-text ms-1">Inicio</span>
                            </NavLink>
                            
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="horarios">
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                <i class="fas fa-user-clock" style={{fontSize:20, color:"#000"}}></i>
                                </div>
                                <span className="nav-link-text ms-1">Horaios</span>
                            </NavLink>
                            
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link  " to="empleados">
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="fas fa-users" style={{fontSize:20, color:"#000"}}></i>
                                </div>
                                <span className="nav-link-text ms-1">Empleados</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link  " to="profesiones">
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i class="fas fa-user-md"  style={{fontSize:20, color:"#000"}}></i>
                                </div>
                                <span className="nav-link-text ms-1">Profesiones</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link  " to="especialidades">
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i class="fas fa-user-tag"  style={{fontSize:20, color:"#000"}}></i>
                                </div>
                                <span className="nav-link-text ms-1">Especialidades</span>
                            </NavLink>
                        </li>
                        <hr className="horizontal dark mt-0" />
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link  " to="perfil">
                                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i class="fas fa-male" style={{fontSize:20, color:"#000"}}></i>
                                </div>
                                <span className="nav-link-text ms-1">Perfil</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>

            </aside>
        </>
    );
}

export default Sidebar;