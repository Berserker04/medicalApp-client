import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles.css";

import CheckAuth from "../pages/login/CheckAuth";
import LoginContainer from "../pages/login/LoginContainer";
import RegisterContainer from "../pages/login/RegisterContainer";
import NoFound from "../pages/noFound";
import Layout from "../components/layout/Layout";
import ScheduleContainer from "../pages/admin/schedule/ScheduleContainer";
import ProfileContainer from "../pages/admin/profile/ProfileContainer";
import ProfessionContainer from "../pages/admin/profession/ProfessionContainer";
import SpecialtyContainer from "../pages/admin/specialty/SpecialtyContainer";
import HomeContainer from "../pages/admin/home/HomeContainer";
import EmployeeContainer from "../pages/admin/employee/EmployeeContainer";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/registrar" component={RegisterContainer} />
      <Route exact path="/login" component={LoginContainer} />
    </Switch>
    <CheckAuth>
      {/* <div className="dashboard-header"> */}
      <div id="body-id" className="g-sidenav-show  bg-gray-100">
        <Layout>
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/empleados" component={EmployeeContainer} />
            <Route exact path="/horarios" component={ScheduleContainer} />
            <Route exact path="/perfil" component={ProfileContainer} />
            <Route exact path="/profesiones" component={ProfessionContainer} />
            <Route
              exact
              path="/especialidades"
              component={SpecialtyContainer}
            />
            <Route component={NoFound} />
          </Switch>
        </Layout>
      </div>
      {/* <HeaderContainer /> */}

      {/* </div> */}
    </CheckAuth>
  </BrowserRouter>
);

export default App;
