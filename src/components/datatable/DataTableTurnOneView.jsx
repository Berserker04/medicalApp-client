import React from "react";
import { URL_IMAGE } from "../../api";
import "./styles.css"

export default function DataTableTurnOneView({
  headCells,
  data = [],
  setItem,
  placeholder,
  btnAddTitle,
  changeFilter,
  changeState,
  title,
}) {
  if (data.length) data = [data[0]]
  return (
    <div className="row">
      <div className="col-12">
        <div className="card mb-4">
          <div className="card-header pb-0 col-sm-12 col-md-12 col-lg-6">
            <h4>{title}</h4>
            {/* <input
              className="form-control"
              type="text"
              placeholder={`Buscar...`}
              onChange={({ target }) => changeFilter(target)}
            /> */}
          </div>
          <div className="card-body px-0 pt-0 pb-2">
            <div className="table-responsive p-0">
              <table className="table align-items-center mb-0 col-md-8">
                <thead>
                  <tr>
                    {/* <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Author</th>
                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Function</th>
                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Employed</th>
                  <th className="text-secondary opacity-7"></th> */}
                    {headCells.map((h) => (
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        {h.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((d, i) => (
                    <tr>
                      <td className="text-center">{i + 1}</td>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img

                              data-bs-toggle="modal"
                              data-bs-target="#editProfession"
                              onClick={() => setItem({ ...d, ...d.employee })}
                              src={`${d.employee.image
                                  ? URL_IMAGE + d.employee.image
                                  : "../assets/img/profile.jpg"
                                }`}
                              className="avatar avatar-sm me-3 iconTurn"
                              alt="user1"
                            />
                            {/* </button> */}
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">{`${d.employee.firstName} ${d.employee.lastName}`}</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                      </td>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img

                              data-bs-toggle="modal"
                              data-bs-target="#editProfession"
                              onClick={() => setItem({ ...d, ...d.employee })}
                              src={`${d.employee.image
                                  ? URL_IMAGE + d.employee.image
                                  : "../assets/img/profile.jpg"
                                }`}
                              className="avatar avatar-sm me-3 iconTurn"
                              alt="user1"
                            />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">{`${d.employee.firstName} ${d.employee.lastName}`}</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                      </td>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img

                              data-bs-toggle="modal"
                              data-bs-target="#editProfession"
                              onClick={() => setItem({ ...d, ...d.employee })}
                              src={`${d.employee.image
                                  ? URL_IMAGE + d.employee.image
                                  : "../assets/img/profile.jpg"
                                }`}
                              className="avatar avatar-sm me-3 iconTurn"
                              alt="user1"
                            />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">{`${d.employee.firstName} ${d.employee.lastName}`}</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                      </td>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img

                              data-bs-toggle="modal"
                              data-bs-target="#editProfession"
                              onClick={() => setItem({ ...d, ...d.employee })}
                              src={`${d.employee.image
                                  ? URL_IMAGE + d.employee.image
                                  : "../assets/img/profile.jpg"
                                }`}
                              className="avatar avatar-sm me-3 iconTurn"
                              alt="user1"
                            />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">{`${d.employee.firstName} ${d.employee.lastName}`}</h6>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
