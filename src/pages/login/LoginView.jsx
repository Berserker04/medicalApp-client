import React from "react";

// import logo from "../../assets/images/logo.png";
import Logo from "../../assets/img/logos/MedicalApp.png";
import "./styles/styles.css";

const LogiView = ({
  // Variables
  singIn,
  loading,
  // Funtions
  onChange,
}) => (
  <>
    <div className="container position-sticky z-index-sticky top-0">
      <div className="row">
        <div className="col-12">
          <nav className="navbar navbar-expand-lg blur blur-rounded top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
            <div className="container-fluid">
              <a
                className="navbar-brand font-weight-bolder ms-lg-0 ms-3 d-flex align-items-center "
                href="../pages/dashboard.html"
              >
                <img
                  src={Logo}
                  height="60"
                  alt="main_logo"
                  style={{ borderRadius: 50, marginRight: 10 }}
                />{" "}
                <h2>Medical App</h2>
              </a>
              {/* <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon mt-2">
                  <span className="navbar-toggler-bar bar1"></span>
                  <span className="navbar-toggler-bar bar2"></span>
                  <span className="navbar-toggler-bar bar3"></span>
                </span>
              </button> */}
              <div className="collapse navbar-collapse" id="navigation">
                <ul className="navbar-nav mx-auto">
                  {/* <li className="nav-item">
                    <a className="nav-link d-flex align-items-center me-2 active" aria-current="page" href="../pages/dashboard.html">
                      <i className="fa fa-chart-pie opacity-6 text-dark me-1"></i>
                      Dashboard
                    </a>
                  </li> */}
                  {/* <li className="nav-item">
                    <a className="nav-link me-2" href="../pages/profile.html">
                      <i className="fa fa-user opacity-6 text-dark me-1"></i>
                      Profile
                    </a>
                  </li> */}
                  {/* <li className="nav-item">
                    <a className="nav-link me-2" href="../pages/sign-up.html">
                      <i className="fas fa-user-circle opacity-6 text-dark me-1"></i>
                      Registrarse
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link me-2" href="../pages/sign-in.html">
                      <i className="fas fa-key opacity-6 text-dark me-1"></i>
                      Sign In
                    </a>
                  </li> */}
                </ul>
                <ul className="navbar-nav d-lg-block d-none">
                  <li className="nav-item">
                    {/* <a href="https://www.creative-tim.com/product/soft-ui-dashboard" className="btn btn-sm btn-round mb-0 me-1 bg-gradient-dark">Free download</a> */}
                    Creaci??n de horario medico automatizado
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <main className="main-content  mt-0">
      <section>
        <div className="page-header min-vh-75">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                <div className="card card-plain mt-8">
                  <div className="card-header pb-0 text-left bg-transparent">
                    <h3 className="font-weight-bolder text-info text-gradient">
                      Bienvenido de nuevo
                    </h3>
                    <p className="mb-0">
                      Ingrese su correo electr??nico y contrase??a para iniciar
                      sesi??n
                    </p>
                  </div>
                  <div className="card-body">
                    <form>
                      <label>Correo el??ctronico</label>
                      <div className="mb-3">
                        <input
                          onKeyUp={onChange}
                          name="email"
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          aria-label="Email"
                          aria-describedby="email-addon"
                        />
                      </div>
                      <label>Contrase??a</label>
                      <div className="mb-3">
                        <input
                          onKeyUp={onChange}
                          name="password"
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          aria-label="Password"
                          aria-describedby="password-addon"
                        />
                      </div>
                      {/* <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="rememberMe" checked="" />
                        <label className="form-check-label" for="rememberMe">Remember me</label>
                      </div> */}
                      <div className="text-center">
                        <button
                          type="button"
                          onClick={singIn}
                          className="btn bg-gradient-info w-100 mt-4 mb-0"
                          disabled={loading}
                        >
                          {loading ? "Validando..." : "Ingresar"}
                        </button>
                      </div>
                    </form>
                  </div>
                  {/* <div className="card-footer text-center pt-0 px-lg-2 px-1">
                    <p className="mb-4 text-sm mx-auto">
                      ??No tienes una cuenta? {"  "}  
                      <Link exact to="/registrar" className="text-info text-gradient font-weight-bold">
                        Registrase
                      </Link>
                    </p>
                  </div> */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                  {/* <div className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6" style="background-image:url('../assets/img/curved-images/curved6.jpg')"></div> */}
                  <div className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6 banner-login"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer className="footer py-5">
      <div className="container">
        {/* <div className="row">
          <div className="col-lg-8 mb-4 mx-auto text-center">
            <a href="#" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
              Company
            </a>
            <a href="#" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
              About Us
            </a>
            <a href="#" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
              Team
            </a>
            <a href="#" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
              Products
            </a>
            <a href="#" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
              Blog
            </a>
            <a href="#" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
              Pricing
            </a>
          </div>
          <div className="col-lg-8 mx-auto text-center mb-4 mt-2">
            <a href="#" target="_blank" className="text-secondary me-xl-4 me-4">
              <span className="text-lg fab fa-dribbble"></span>
            </a>
            <a href="#" target="_blank" className="text-secondary me-xl-4 me-4">
              <span className="text-lg fab fa-twitter"></span>
            </a>
            <a href="#" target="_blank" className="text-secondary me-xl-4 me-4">
              <span className="text-lg fab fa-instagram"></span>
            </a>
            <a href="#" target="_blank" className="text-secondary me-xl-4 me-4">
              <span className="text-lg fab fa-pinterest"></span>
            </a>
            <a href="#" target="_blank" className="text-secondary me-xl-4 me-4">
              <span className="text-lg fab fa-github"></span>
            </a>
          </div>
        </div> */}
        <div className="row">
          <div className="col-8 mx-auto text-center mt-1">
            <p className="mb-0 text-secondary">
              Copyright ??{" "}
              <script>document.write(new Date().getFullYear())</script> SENASOFT
              by Team Juan David.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default LogiView;
