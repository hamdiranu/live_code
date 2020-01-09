import React from 'react';
import { Redirect} from 'react-router-dom';
import '../assets/css/main.css';
import '../assets/css/bootstrap.min.css';
import Header from '../component/header';

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

import axios from "axios";
import { store } from "../store";

class Profile extends React.Component {

  getApiResponse = () =>{
    axios
        .post("https://react-challenge1.free.beeceptor.com/")
        .then(function(response){
            store.setState({ name: response.data.name});
            store.setState({ email: response.data.email});
            store.setState({ api_key: response.data.api_key});
            // handle success
            // console.log(response.data);
        })
        .catch(function(error){
            store.setState({ isLoadingDetailBerita: false});
            // handle error
            // console.log(error)
        });
  }

  render() {

    this.getApiResponse()
    // console.log("cek state statusLogin", this.props.statusLogin);
    console.log("cek state name", this.props.name);
    console.log("cek state email", this.props.email);
    console.log("cek state api_key", this.props.api_key);
    if (this.props.statusLogin === false) {
      return <Redirect to={{ pathname: "/signin" }} />;
    } else {
      return (
        <React.Fragment>
          <Header />
          <section className="content" style={{paddingTop:"222px",textAlign:"center"}}>
            <h1
              style={{
                textalign: "center"
              }}
            >
              Profile
            </h1>
            <p>
              
              <label>Name:</label> {this.props.name}
            </p>
            <p>
              <label>Email:</label> {this.props.email}
            </p>
            <p>
              <label>Api Key:</label> {this.props.api_key}
            </p>
          </section>
        </React.Fragment>
      );
    }
  }
};

export default connect("search, name, email, api_key, statusLogin", actions)(withRouter(Profile));