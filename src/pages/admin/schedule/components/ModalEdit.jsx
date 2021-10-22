import React from "react";
import { URL_IMAGE } from "../../../../api";

export default function ModalEditTurn({
  form,
  formChange,
  update,
  professions,
  specialties,
}) {
console.log(form, "JODER");
  return (
    <div
      className="modal fade"
      id="editProfession"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Editando medico
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
              <div className="d-flex justify-content-center">
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
              </div>
              <form role="form text-left">
                <div className="row mt-3">
                  <div className="col">
                    <label htmlFor="">Nombre</label>
                    <input
                      onChange={({ target }) => formChange(target)}
                      name="firstName"
                      type="text"
                      value={form.firstName}
                      className="form-control"
                      placeholder="Nombre"
                      aria-label="Name"
                      aria-describedby="email-addon"
                      disabled
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="">Apellido</label>
                    <input
                      onChange={({ target }) => formChange(target)}
                      name="lastName"
                      type="text"
                      value={form.lastName}
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
                    <label htmlFor="">Correo eléctronico</label>
                    <input
                      onChange={({ target }) => formChange(target)}
                      name="email"
                      type="email"
                      value={form.email}
                      className="form-control"
                      placeholder="Email"
                      aria-label="Email"
                      aria-describedby="email-addon"
                      disabled
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <label htmlFor="">Documento</label>
                    <input
                      onChange={({ target }) => formChange(target)}
                      name="document"
                      type="text"
                      value={form.document}
                      className="form-control"
                      placeholder="documento"
                      aria-label="Email"
                      aria-describedby="email-addon"
                      disabled
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <label htmlFor="">Celular</label>
                    <input
                      onChange={({ target }) => formChange(target)}
                      name="cellPhone"
                      type="text"
                      value={form.cellPhone}
                      className="form-control"
                      placeholder="Telefono"
                      aria-label="Email"
                      aria-describedby="email-addon"
                      disabled
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <label htmlFor="">Profesión</label>
                    <input
                      onChange={({ target }) => formChange(target)}
                      name="cellPhone"
                      type="text"
                      value={form.specialty?.profession.name}
                      className="form-control"
                      placeholder="Especialidad"
                      aria-label="Email"
                      aria-describedby="email-addon"
                      disabled
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="">Especialidad</label>
                    <input
                      onChange={({ target }) => formChange(target)}
                      name="cellPhone"
                      type="text"
                      value={form.specialty?.name}
                      className="form-control"
                      placeholder="Especialidad"
                      aria-label="Email"
                      aria-describedby="email-addon"
                      disabled
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
