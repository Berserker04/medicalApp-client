import React, { useCallback, useEffect, useState } from "react";
import { fetchUtils, Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./views/user/UserList";
import { PublicationList } from "./views/publication/components/PublicationList";
import { PublicationEdit } from "./views/publication/components/PublicationEdit";
import { PublicationCreate } from "./views/publication/components/PublicationCreate";
import NoFound from "./views/noFound";
import { PeopleAlt, LibraryBooks } from "@material-ui/icons";
import { Dashboard } from "./views/dashboard/Dashboard";
import AuthProvider from "./views/auth/AuthProvider";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }

  const token = localStorage.getItem("username");

  options.headers.set("Authorization", `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = jsonServerProvider(
  "http://127.0.0.1:8000/api",
  httpClient
);

const App = () => {
  return (
    <Admin
      dashboard={Dashboard}
      authProvider={AuthProvider}
      dataProvider={dataProvider}
      catchAll={NoFound}
    >
      <Resource
        name={`publication`}
        list={PublicationList}
        edit={PublicationEdit}
        create={PublicationCreate}
        icon={LibraryBooks}
      />
      <Resource name="user" list={UserList} icon={PeopleAlt} />
    </Admin>
  );
};

export default App;
