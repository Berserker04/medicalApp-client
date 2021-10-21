import React from "react";

export default function ModalEditProfesion({ form, formChange, update, professions,
  specialties, }) {
  const handleFiles = () => {
    let files = document.querySelector(`#upload-images`)?.files;

    if (files) {
      files = [files[0]]
      Object.keys(files).forEach((f, i) => {
        let reader = new FileReader();
        let preview = {};
        reader.onloadend = function () {
          if (files) {
            let base64 =
              typeof reader.result === "string" ? reader.result : "";
            // filesAdd(base64);
            // console.log(base64);
            formChange({ name: "image", value: base64 })
          }
        };

        if (files) {
          alert("xd")
          reader.readAsDataURL(files[i]);
        } else {
          if (preview) preview.src = "";
        }
      });
    }
  };

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
              Editando profesión
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="card-body">
              <form role="form text-left">
                <div className="row mt-3">
                  <div className="col">
                    <input onChange={({ target }) => formChange(target)} name="firstName" type="text" value={form.firstName} className="form-control" placeholder="Nombre" aria-label="Name" aria-describedby="email-addon" />
                  </div>
                  <div className="col">
                    <input onChange={({ target }) => formChange(target)} name="lastName" type="text" value={form.lastName} className="form-control" placeholder="Apellidos" aria-label="Name" aria-describedby="email-addon" />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <input onChange={({ target }) => formChange(target)} name="email" type="email" value={form.email} className="form-control" placeholder="Email" aria-label="Email" aria-describedby="email-addon" />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <input onChange={({ target }) => formChange(target)} name="document" type="text" value={form.document} className="form-control" placeholder="documento" aria-label="Email" aria-describedby="email-addon" />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <select name="profession_id" onChange={({ target }) => formChange(target)} name="profession_id" className="form-control">
                      {professions.map((e) =>
                        (<option key={e.id} value={e.id} selected={e.id == form.profession_id ? true : false}>{e.name}</option>)
                      )}
                    </select>
                  </div>
                  <div className="col">
                    <select onChange={({ target }) => formChange(target)} name="specialty_id" className="form-control">
                      {specialties.map((e) =>
                        (<option key={e.id} value={e.id} selected={e.id == form.specialty_id ? true : false}>{e.name}</option>)
                      )}
                    </select>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <input onChange={({ target }) => formChange(target)} name="cellPhone" type="text" value={form.cellPhone} className="form-control" placeholder="Telefono" aria-label="Email" aria-describedby="email-addon" />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <input onChange={({ target }) => formChange(target)} type="password" className="form-control" placeholder="contraseña" aria-describedby="email-addon" />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    {/* <input type="file" accept=".jpg,.png"  aria-describedby="email-addon" /> */}
                    <input
                      className="form-control"
                      id="upload-images"
                      type="file"
                      name="image"
                      multiple
                      onChange={handleFiles}
                      accept="image/*"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <button type="button" onClick={() => update()} className="btn bg-gradient-dark w-100 my-4 mb-2">Actulizar perfil</button>
                </div>

              </form>
            </div>
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
              onClick={() => update()}
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
