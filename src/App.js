// import './App.css';

import React from "react";
import { Provider } from "react-redux";

import Routes from "./routes";
import store from "./redux/store";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./index.css";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
