import axios from "axios";

const URL_BASE = "http://127.0.0.1:8000";
const URL_API = `${URL_BASE}/api`;

const API = {
  POST: (url, data = {}, config) => {
    return axios
      .post(`${URL_API}${url}`, data, config)
      .then(({ data }) => data)
      .catch((e) => console.log(e));
  },
};

export default API;
