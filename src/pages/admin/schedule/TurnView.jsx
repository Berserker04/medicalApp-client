import React from "react";
import DataTableEmployeeView from "../../../components/datatable/DataTableEmployeeView";
import DataTableTurnOneView from "../../../components/datatable/DataTableTurnOneView";
import DataTableTurnView from "../../../components/datatable/DataTableTurnView";
import ModalAddProfesion from "./components/ModalAdd";
import ModalEditProfesion from "./components/ModalEdit";
import pdf from "../../../assets/img/pdf.png"

export default function TurnView({
    user,
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
    turns,
    deleteData,
    newData
}) {
    console.log(users, " FILTRO");
    return (
        <div className="row">
            <div className="col-12">
                <div className="card mb-4">
                    <div className="card-header pb-0">
                        <div className="col-12 row justify-content-center">
                            <div className="col-md-3"></div>
                            {
                                user.role_id == 1 && (<div className="col-md-6 d-flex">
                                    <button
                                        type="button"
                                        className="btn btn-success"
                                        data-bs-toggle="modal"
                                        data-bs-target="#addTurn"
                                        onClick={() => setItem({ isNew: true })}
                                        style={{marginRight:20}}
                                    >
                                        <i className="fas fa-plus"></i> Nuevos turnos
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-success"
                                        onClick={() => setItem({ isNew: true })}
                                    >
                                       <img src={pdf} alt="" height="30"/>
                                    </button>
                                </div>)
                            }

                            <div className="col-md-3"></div>
                        </div>
                    </div>
                    <div className="card-body px-0 pt-0 pb-2 row justify-content-center">
                        <div className="table-responsive col-md-12 col-md-8 col-lg-10">
                            {
                                user.role_id == 1 ?
                                    [1, 2, 3, 4].map(d => (
                                        <DataTableTurnView
                                            title={`Semana ${d}`}
                                            data={users}
                                            headCells={headCells}
                                            setItem={setItem}
                                            changeFilter={changeFilter}
                                            changeState={changeState}
                                        />
                                    ))
                                    :
                                    [1, 2, 3, 4].map(d => (
                                        <DataTableTurnOneView
                                            title={`Semana ${d}`}
                                            data={users}
                                            headCells={headCells}
                                            setItem={setItem}
                                            changeFilter={changeFilter}
                                            changeState={changeState}
                                        />
                                    ))
                            }


                            <ModalAddProfesion professions={professions}
                                specialties={specialties}
                                form={form}
                                formChange={formChange}
                                save={save}
                                employees={users}
                                turns={turns}
                                deleteData={deleteData}
                                newData={newData}
                            />
                            <ModalEditProfesion
                                professions={professions}
                                specialties={specialties}
                                form={form}
                                formChange={formChange}
                                update={update}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
