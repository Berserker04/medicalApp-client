import React from "react";

export default function DataTableView({
  headCells,
  data=[],
  setItem,
  placeholder,
  btnAddTitle,
  changeFilter,
  changeState,
}) {
  console.log(data, "# dfdf");
  return (
    <div className="row">
      <div className="col-12">
        <div className="card mb-4">
          <div className="card-header pb-0">
            <h6>Lista de profesiones</h6>
            <input
              className="form-control content"
              type="text"
              placeholder={`Buscar profesion ...`}
              onChange={({ target }) => changeFilter(target)}
            />
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
                  {data.map((d) => (
                    <tr>
                      <td>
                        <p>{d.name}</p>
                      </td>
                      {d.profession && (
                        <td>
                          <p>{d.profession.name}</p>
                        </td>
                      )}
                      <td className="align-middle text-center text-sm">
                        <button
                          type="button"
                          onClick={() => changeState(d)}
                          className="btn"
                          // disabled
                        >
                          <span
                            className={`badge badge-sm ${
                              d.state
                                ? "bg-gradient-success"
                                : "bg-gradient-danger"
                            }`}
                            onClick={() => setItem(d)}
                          >
                            {d.state ? "Activo" : "Desactivo"}
                          </span>
                        </button>
                      </td>
                      <td className="align-middle">
                        <button
                          type="button"
                          onClick={() => setItem(d)}
                          className="btn btn-outline-info"
                          data-bs-toggle="modal"
                          data-bs-target="#editProfession"
                        >
                          <i
                            className="fas fa-edit"
                            // style={{ fontSize: 18 }}
                          ></i>
                        </button>
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
