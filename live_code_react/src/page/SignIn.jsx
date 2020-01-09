import React from 'react';
import '../assets/css/main.css';
import '../assets/css/bootstrap.min.css';
import Header from '../component/header';

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { store } from "../store";

class SignIn extends React.Component {
  
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