import React from "react";
import DataTableEmployeeView from "../../../components/datatable/DataTableEmployeeView";
import ModalAddProfesion from "./components/ModalAdd";
import ModalEditProfesion from "./components/ModalEdit";

export default function EmployeeView({
    users,
    headCells,
    setItem,
    form,
    formChange,
    save,
    update,
    changeFilter,
    changeState,
    professions,
    specialties,
}) {
    console.log(users, " FILTRO");
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
                                    data-bs-target="#addEmployee"
                                    onClick={() => setItem({ isNew: true })}
                                >
                                    <i className="fas fa-plus"></i> Agregar medico
                                </button>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                    </div>
                    <div className="card-body px-0 pt-0 pb-2">
                        <div className="table-responsive p-0 d-flex justify-content-center">
                            <DataTableEmployeeView
                                title="empleados"
                                data={users}
                                headCells={headCells}
                                setItem={setItem}
                                changeFilter={changeFilter}
                                changeState={changeState}
                            />
                            <ModalEditProfesion
                                professions={professions}
                                specialties={specialties}
                                form={form} formChange={formChange} update={update} />
                            <ModalAddProfesion professions={professions}
                                specialties={specialties} form={form} formChange={formChange} save={save} />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}