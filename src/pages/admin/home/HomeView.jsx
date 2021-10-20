import React from 'react'

export default function HomeView() {
    return (
        <>
           <div className="row">
                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="card-body p-3">
                            <div className="row">
                                <div className="col-8">
                                <div className="numbers">
                                    <p className="text-sm mb-0 text-capitalize font-weight-bold">Empleados</p>
                                    <h5 className="font-weight-bolder mb-0">
                                    0
                                    </h5>
                                </div>
                                </div>
                                <div className="col-4 text-end">
                                <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                                    <i className="fas fa-users" style={{fontSize:20, color:"#fff"}}></i>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="card-body p-3">
                            <div className="row">
                                <div className="col-8">
                                <div className="numbers">
                                    <p className="text-sm mb-0 text-capitalize font-weight-bold">Profesiones</p>
                                    <h5 className="font-weight-bolder mb-0">
                                        0
                                    </h5>
                                </div>
                                </div>
                                <div className="col-4 text-end">
                                <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                                    <i className="fas fa-user-md"  style={{fontSize:20, color:"#fff"}}></i>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="card-body p-3">
                            <div className="row">
                                <div className="col-8">
                                <div className="numbers">
                                    <p className="text-sm mb-0 text-capitalize font-weight-bold">Especilidades</p>
                                    <h5 className="font-weight-bolder mb-0">
                                    0
                                    </h5>
                                </div>
                                </div>
                                <div className="col-4 text-end">
                                <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                                <i className="fas fa-user-tag"  style={{fontSize:20, color:"#fff"}}></i>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            <div className="row mt-5">
                <div className="col-lg-4">
                  <div className="d-flex flex-column h-100">
                    <p className="mb-1 pt-2 text-bold">Built by developers</p>
                    <h5 className="font-weight-bolder">Soft UI Dashboard</h5>
                    <p className="mb-5">From colors, cards, typography to complex elements, you will find the full documentation.</p>
                    <a className="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto" href="javascript:;">
                      Read More
                      <i className="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 ms-auto text-center mt-5 mt-lg-0">
                  <div className="bg-gradient-primary border-radius-lg h-100">
                    <img src="../assets/img/shapes/waves-white.svg" className="position-absolute h-100 w-50 top-0 d-lg-block d-none" alt="waves"/>
                    <div className="position-relative d-flex align-items-center justify-content-center h-100">
                      <img className="w-100 position-relative z-index-2 pt-4" src="../assets/img/illustrations/rocket-white.png" alt="rocket"/>
                    </div>
                  </div>
                </div>
            </div>
            
            
            
        </>
    )
}
