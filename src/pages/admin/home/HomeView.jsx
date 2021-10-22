import React from "react";
import { URL_IMAGE } from "../../../api";
import DataTableHomeView from "../../../components/datatable/DataTableHomeView";

export default function HomeView({
  user,
  stadistics,
  users,
  headCells,
  setItem,
}) {
  return (
    <>
      <div className="row">
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-capitalize font-weight-bold">
                      Empleados
                    </p>
                    <h5 className="font-weight-bolder mb-0">
                      {stadistics.employees}
                    </h5>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                    <i
                      className="fas fa-users"
                      style={{ fontSize: 20, color: "#fff" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-capitalize font-weight-bold">
                      Profesiones
                    </p>
                    <h5 className="font-weight-bolder mb-0">
                      {stadistics.professions}
                    </h5>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                    <i
                      className="fas fa-user-md"
                      style={{ fontSize: 20, color: "#fff" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-capitalize font-weight-bold">
                      Especilidades
                    </p>
                    <h5 className="font-weight-bolder mb-0">
                      {stadistics.specialties}
                    </h5>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                    <i
                      className="fas fa-user-tag"
                      style={{ fontSize: 20, color: "#fff" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-capitalize font-weight-bold">
                      Turnos del mes
                    </p>
                    <h5 className="font-weight-bolder mb-0">76</h5>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                    <i
                      className="fas fa-user-tag"
                      style={{ fontSize: 20, color: "#fff" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-7 mb-lg-0 mb-4">
          <div class="card">
            <div class="card-body p-3">
              <div class="row">
                <div class="col-lg-6" style={{ height: "100%" }}>
                  <div class="d-flex flex-column h-100">
                    <p class="mb-1 pt-2 text-bold">
                      {user.employee.specialty.profession.name}{" "}
                      {user.employee.specialty.name}
                    </p>
                    <h5 class="font-weight-bolder">
                      {user.employee.firstName} {user.employee.lastName}
                    </h5>
                    <p class="mb-5">
                      En el mundo deberían existir más maravillos profesionales
                      de la salud como usted.
                    </p>
                    {/* <a class="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto" href="javascript:;">
                      Read More
                      <i class="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                    </a> */}
                  </div>
                </div>
                <div
                  class="col-lg-5 ms-auto text-center mt-5 mt-lg-0"
                  style={{ height: "100%" }}
                >
                  {/* <div class=" border-radius-lg w-80 h-80"> */}
                  {/* <img
                      src={`${
                        user.employee.image
                          ? URL_IMAGE + user.employee.image
                          : "../assets/img/profile.jpg"
                      }`}
                      class="position-absolute h-100 w-50 top-0 d-lg-block d-none"
                      alt="waves"
                    /> */}
                  <div
                    class="position-relative d-flex align-items-center justify-content-center"
                    style={{ height: "100%" }}
                  >
                    <img
                      class="h-80 w-80 position-relative z-index-2"
                      style={{ borderRadius: 10 }}
                      src={`${
                        user.employee.image
                          ? URL_IMAGE + user.employee.image
                          : "../assets/img/profile.jpg"
                      }`}
                      alt="rocket"
                    />
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="card h-100 p-3">
            <div
              class="overflow-hidden position-relative border-radius-lg bg-cover h-100"
              style={{ backgroundImage: "url('../assets/img/bannerHome.jpg')" }}
            >
              <span class="mask bg-gradient-dark"></span>
              <div class="card-body position-relative z-index-1 d-flex flex-column h-100 p-3">
                <h5 class="text-white font-weight-bolder mb-4 pt-2">
                  ¡MUCHO ÁNIMO!
                </h5>
                <p class="text-white">
                  El coronavirus nos afecta a todos: a nuestras familias, a
                  nuestros amigos y, por supuesto, a las personas a las que
                  queremos ayudar. Por lo tanto, debemos tomarnos el tiempo para
                  cuidarnos y ofrecer nuestro apoyo y solidaridad.
                </p>
                {/* <a class="text-white text-sm font-weight-bold mb-0 icon-move-right mt-auto" href="javascript:;">
                  Read More
                  <i class="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <DataTableHomeView
          title="Turnos de la semana"
          data={users}
          headCells={headCells}
          setItem={()=>null}
          changeFilter={[]}
          changeState={[]}
          // week="Semana 1"
        />
      </div>
    </>
  );
}
