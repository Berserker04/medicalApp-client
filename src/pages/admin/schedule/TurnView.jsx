import React from "react";
import DataTableEmployeeView from "../../../components/datatable/DataTableEmployeeView";
import DataTableTurnView from "../../../components/datatable/DataTableTurnView";
import ModalAddProfesion from "./components/ModalAdd";
import ModalEditProfesion from "./components/ModalEdit";

export default function TurnView({
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
                                    data-bs-target="#addTurn"
                                    onClick={() => setItem({ isNew: true })}
                                >
                                    <i className="fas fa-plus"></i> Agregar medico
                                </button>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                    </div>
                    <div className="card-body px-0 pt-0 pb-2 row justify-content-center">
                        <div className="table-responsive col-md-12 col-md-8 col-lg-10">
                            <DataTableTurnView
                                title="Semana 1"
                                data={users}
                                headCells={headCells}
                                setItem={setItem}
                                changeFilter={changeFilter}
                                changeState={changeState}
                                // week="Semana 1"
                            />
                            <DataTableTurnView
                                title="Semana 2"
                                data={users}
                                headCells={headCells}
                                setItem={setItem}
                                changeFilter={changeFilter}
                                changeState={changeState}
                                // week="Semana 1"
                            />
                            <DataTableTurnView
                                title="Semana 3"
                                data={users}
                                headCells={headCells}
                                setItem={setItem}
                                changeFilter={changeFilter}
                                changeState={changeState}
                                // week="Semana 1"
                            />
                            <DataTableTurnView
                                title="Semana 4"
                                data={users}
                                headCells={headCells}
                                setItem={setItem}
                                changeFilter={changeFilter}
                                changeState={changeState}
                                // week="Semana 1"
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
