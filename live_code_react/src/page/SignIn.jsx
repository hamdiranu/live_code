import React from 'react';
import '../assets/css/main.css';
import '../assets/css/bootstrap.min.css';
import Header from '../component/header';

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { store } from "../store";

class SignIn extends React.Component {
  // state = { 
  //   username: "", 
  //   password: "" 
  // };

  // changeInput = e => {
  //   console.warn("cek event target", e.target.value);

  //   this.setState({ [e.target.name]: e.target.value });
  // };

  // postLogin = () => {
  //   const { username, password } = this.state;
  //   const data = {
  //     username: username,
  //     password: password
  //   };
  //   const self = this;
  //   console.log("cek self", self)
  //   axios
  //     .post("https://react-challenge.free.beeceptor.com/", data)
  //     .then(function (response) {
  //       console.log(self.props);
  //       if (response.data.hasOwnProperty("api_key")) {
  //         localStorage.setItem("name", response.data.name);
  //         localStorage.setItem("email", response.data.email);
  //         localStorage.setItem("api_key", response.data.api_key);
  //         localStorage.setItem("statusLogin", true);
  //         self.props.history.push("/Profile");
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };


  getLogin = () => {
    store.setState({ statusLogin: true });
    console.log("cek status login", this)
    // localStorage.clear()
    this.props.history.push("/profile");
  }

  render() {
      return (
        <div className="body">
          <Header/>
          <div className="container" style={{textAlign:"center"}}>
            <div className="col-md-4"></div>
              <div className="col-md-4 kotak_sign_in" style={{marginTop:"222px"}}>
                <h1>Sign In</h1>
                <input type="text" placeholder="username"/><br/><br/>
                <input type="password" placeholder="password"/><br/><br/>
                <button onClick={() => this.getLogin()}>Sign In</button>
              </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      );
    }
  }
  
  export default connect("", actions)(withRouter(SignIn));