import React from "react";
import DataTableView from "../../../components/datatable/DataTableView";
import ModalAddProfesion from "./components/ModalAdd";
import ModalEditProfesion from "./components/ModalEdit";

export default function ProfessionView({
  professions,
  headCells,
  setItem,
  form,
  setState,
  save,
  update,
  changeFilter,
  changeState,
}) {
  return (
    <div className="row">
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header pb-0">
              <div className="col-12 row justify-content-center">
                <div className="col-md-3"></div>
                <div className="col-md-3">
                  <button
                    type="button"
                    className="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#addProfession"
                    onClick={() => setItem({ isNew: true })}
                  >
                    <i className="fas fa-plus"></i> Agregar profesión
                  </button>
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
            <div className="card-body px-0 pt-0 pb-2">
              <div className="table-responsive p-0 d-flex justify-content-center">
                <DataTableView
                title="profesiones"
                  data={professions}
                  headCells={headCells}
                  setItem={setItem}
                  changeFilter={changeFilter}
                  changeState={changeState}
                />
                <ModalEditProfesion form={form} setState={setState} update={update} />
                <ModalAddProfesion form={form} setState={setState} save={save} />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
