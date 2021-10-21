import React, { Component } from "react";
import { API } from "../../api";
import { connect } from "react-redux";
import { Token, delStorage, refreshHeader } from "../../redux/actions/auth";
import { User } from "../../redux/actions/users";
import { Redirect } from "react-router";
import Logo from "../../assets/img/logos/MedicalApp.png";

class CheckAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isCheck: false,
    };
  }

  componentDidMount() {
    this.checkToken();
  }

  async checkToken() {
    let token = localStorage.getItem("token");
    if (token) {
      try {
        let config = {
          headers: {
            authorization: `bearer ${token}`,
          },
        };
        await API.POST("/auth/me", {}, config).then(({ data }) => {
          if (!data.id) {
            this.props.delStorage("token");
          } else {
            this.props.setUser(data);
            // alert(token)
            this.props.setHeader(token);
            setTimeout(() => {
              this.setState({ isCheck: true });
            }, 500);
          }
        });
      } catch (error) {
        console.log(error);
      }
    }

    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  render() {
    if (this.state.loading) {
      return (
        <div
          className="container d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <img
            src={Logo}
            height="100"
            alt="main_logo"
            style={{ borderRadius: 50, marginRight: 10 }}
          />{" "}
          <h1>Cargando...</h1>
        </div>
      );
    } else if (this.state.isCheck || this.props.getToken) {
      return this.props.children;
    }

    return <Redirect from="/" to="/login" />;
  }
}

const mapStateToProps = (reducers) => {
  return {
    getToken: reducers.authReducer.token,
  };
};

const mapDispatchToProps = (Dispatch) => {
  return {
    setToken: (newToken) => Dispatch(Token(newToken)),
    setUser: (user) => Dispatch(User(user)),
    delStorage: (key) => Dispatch(delStorage(key)),
    setHeader: (token) => Dispatch(refreshHeader(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckAuth);
