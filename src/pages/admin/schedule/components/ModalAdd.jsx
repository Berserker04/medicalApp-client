import React from "react";
import { URL_IMAGE } from "../../../../api";

const categories = [
  {
    id: 1,
    name: "Ventilados",
  },
  {
    id: 2,
    name: "Niños",
  },
  {
    id: 3,
    name: "Medicamentos ",
  },
  {
    id: 4,
    name: "Generales",
  },
];

export default function ModalAddTurn({
  form,
  formChange,
  save,
  professions,
  specialties,
}) {
  return (
    <div
      className="modal fade"
      id="addTurn"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Genrar turnos
            </h5>
            <button
              type="button"
              className="btn btnModalClose"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div className="modal-body">
            <div className="card-body">
              {/* <div className="d-flex justify-content-center">
                <img
                  src={`${
                    form.image
                      ? URL_IMAGE + form.image
                      : "../assets/img/profile.jpg"
                  }`}
                  height="100"
                  width="100"
                  style={{ borderRadius: 10 }}
                  alt="user1"
                />
              </div> */}
              <form role="form text-left">
                <div className="row mt-3">
                  <div className="col">
                    <label htmlFor="">Total de pacientes</label>
                    <input
                      onChange={({ target }) => formChange(target)}
                      name="firstName"
                      type="text"
                      value={0}
                      className="form-control"
                      placeholder="Total de pacientes"
                      aria-label="Name"
                      aria-describedby="email-addon"
                      disabled
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="">Total de horas registradas</label>
                    <input
                      onChange={({ target }) => formChange(target)}
                      name="lastName"
                      type="text"
                      value={0}
                      className="form-control"
                      placeholder="Apellidos"
                      aria-label="Name"
                      aria-describedby="email-addon"
                      disabled
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <label htmlFor="">Total de clientes</label>
                    <input
                      onChange={({ target }) => formChange(target)}
                      name="email"
                      type="email"
                      value={0}
                      className="form-control"
                      placeholder="Email"
                      aria-label="Email"
                      aria-describedby="email-addon"
                      disabled
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="">Trabajadores por día</label>
                    <select
                      name="profession_id"
                      onChange={({ target }) => formChange(target)}
                      name="profession_id"
                      className="form-control"
                    >
                      <option value="0" disabled selected>
                        Seleccionar cantidad
                      </option>
                      {[
                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                        17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                      ].map((e) => (
                        <option key={e} value={e}>
                          {e}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <hr className="horizontal  mt-0" />
                <hr className="horizontal  mt-0" />
                <hr className="horizontal dark mt-0" />
                <hr className="horizontal  mt-0" />
                <div className="row mt-3">
                  <div className="col">
                    <label htmlFor="">Cantidad de pacientes</label>
                    <input
                      onChange={({ target }) => formChange(target)}
                      name="email"
                      type="number"
                      // value={""}
                      className="form-control"
                      placeholder="Total pacientes"
                      aria-label="Email"
                      aria-describedby="email-addon"
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="">Horas estimadas</label>
                    <input
                      onChange={({ target }) => formChange(target)}
                      name="email"
                      type="number"
                      // value={""}
                      className="form-control"
                      placeholder="Total horas"
                      aria-label="Email"
                      aria-describedby="email-addon"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <label htmlFor="">Categoria del paciente</label>
                    <select
                      name="profession_id"
                      onChange={({ target }) => formChange(target)}
                      name="profession_id"
                      className="form-control"
                    >
                      <option value="0" disabled selected>
                        Seleccionar categoria
                      </option>
                      {categories.map((e) => (
                        <option key={e.id} value={e.id}>
                          {e.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => save()}
                    className="btn bg-gradient-dark w-100 my-4 mb-2"
                  >
                    Generar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
