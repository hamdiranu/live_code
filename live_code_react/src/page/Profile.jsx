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
        .post("https://api-todofancy.herokuapp.com/api/auth")
        .then(function(response){
            store.setState({ name: response.data.user_data.username});
            store.setState({ email: response.data.user_data.email});
            store.setState({ avatar: response.data.user_data.avatar});
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
    if (this.props.statusLogin === false) {
      return <Redirect to={{ pathname: "/signin" }} />;
    } else {
      return (
        <React.Fragment>
          <Header />
          <section className="content" style={{paddingTop:"150px",textAlign:"center"}}>
            <h1
              style={{
                textalign: "center"
              }}
            >
              Profile
            </h1>
            <div className="col-10 kotak_profile" style={{marginTop:"10px", marginLeft:"100px"}}>
              <div className="col-2 kotak_gambar">
                <img src={this.props.avatar} style={{width:"100%", height:"100%"}} alt=""/>
              </div>
              <div className="col-7">
                <p style={{fontSize:"24px", paddingTop:"17px"}}>
                  <label>Name:</label> {this.props.name}
                </p>
                <p style={{fontSize:"24px", paddingTop:"0px" }}>
                  <label>Email:</label> {this.props.email}
                </p>
              </div>
            </div>
              
          </section>
        </React.Fragment>
      );
    }
  }
};

export default connect("search, name, email, avatar, statusLogin", actions)(withRouter(Profile));