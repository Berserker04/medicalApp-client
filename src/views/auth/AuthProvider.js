import API from "../../api";

export default {
  // called when the user attempts to log in
  login: async ({ username, password }) => {
    await API.POST("/auth/login", { email: username, password })
      .then((data) => {
        //   localStorage.setItem("auth", data.access_token);
          localStorage.setItem('auth', JSON.stringify(data.access_token));
        localStorage.setItem("username", data.access_token);
      })
            .catch((e) => console.log(e));
        

    // accept all username/password combinations
    return Promise.resolve();
  },
  // called when the user clicks on the logout button
  logout: async () => {
    const token = localStorage.getItem("username");
    if (token) {
      const config = {
        headers: {
          Authorization: `bearer ${token}`,
        },
      };

      await API.POST("/auth/logout", {}, config)
        .then((data) => {
          localStorage.removeItem("auth");
          localStorage.removeItem("username");
        })
        .catch((e) => console.log(e));
    }

    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("auth");
      localStorage.removeItem("username");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    localStorage.removeItem("auth");
    return localStorage.getItem("username")
      ? Promise.resolve()
      : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};
