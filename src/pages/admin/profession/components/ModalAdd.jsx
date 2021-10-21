import React from "react";

export default function ModalAddProfesion({ form, setState, save }) {
  return (
    <div
      className="modal fade"
      id="addProfession"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Registrando profesión
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label for="recipient-name" className="col-form-label">
                  Profesión:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="recipient-name"
                  name="name"
                  value={form.name}
                  onChange={({ target }) => setState(target)}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary btnModalClose"
              data-bs-dismiss="modal"
              id="btnModalClose"
            >
              Cerrar
            </button>
            <button
              type="button"
              onClick={() => save()}
              className="btn btn-primary"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
