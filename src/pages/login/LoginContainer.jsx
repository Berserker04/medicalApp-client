import React, { Component } from "react";
import { connect } from "react-redux";
import Swal from "sweetalert2";

import LoginView from "./LoginView";
import { API } from "../../api";
import { Token, setStorage } from "../../redux/actions/auth";
import { Me } from "../../redux/actions/users";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      form: {
        email: "",
        password: "",
      },
    };
  }

  onChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  singIn = async () => {
    this.setState({ loading: true });
    await API.POST("/auth/login", this.state.form).then(({ data }) => {
      if (data.access_token) {
        this.props.setTokenStorage("token", data.access_token);
        // this.props.setUser(data.body.user);
        this.props.setToken(data.access_token);
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: data.message,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
    this.setState({ loading: false });
  };

  render() {
    if (this.props.getToken) {
      window.location.href = "/"
    }
    return <LoginView loading={this.state.loading} onChange={this.onChange} singIn={this.singIn} />;
  }
}

const mapStateToProps = (state) => {
  return {
    getToken: state.authReducer.token,
  };
};

const mapDispatchToProps = (Dispatch) => {
  return {
    setToken: (newToken) => Dispatch(Token(newToken)),
    setUser: (user) => Dispatch(Me(user)),
    setTokenStorage: (key, value) => Dispatch(setStorage(key, value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
