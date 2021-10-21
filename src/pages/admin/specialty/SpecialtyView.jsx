import React from "react";
import DataTableView from "../../../components/datatable/DataTableView";
import ModalAddSpecialty from "./components/ModalAdd";
import ModalEditSpecialty from "./components/ModalEdit";

export default function SpecialtyView({
  professions,
  specialties,
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
                  <i className="fas fa-plus"></i> Agregar especialidad
                </button>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
          <div className="card-body px-0 pt-0 pb-2">
            <div className="table-responsive p-0 d-flex justify-content-center">
              <DataTableView
                data={specialties}
                headCells={headCells}
                setItem={setItem}
                changeFilter={changeFilter}
                changeState={changeState}
              />
              <ModalEditSpecialty
                form={form}
                setState={setState}
                update={update}
                professions={professions}
              />
              <ModalAddSpecialty
                professions={professions}
                form={form}
                setState={setState}
                save={save}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
