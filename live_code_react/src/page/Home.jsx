import React from 'react';
import '../assets/css/main.css';
import '../assets/css/bootstrap.min.css';
import Header from '../component/header';
import BeritaTerkini from '../component/beritaTerkini';
import DetailBerita from '../component/detail_berita';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

class Home extends React.Component {
  render() {
    if (this.props.isLoadingBeritaTerkini === true || this.props.isLoadingDetailBerita === true) {
      return (
        <div className="body">
          <Header/>
          <div className="container">
            <div style={{marginTop:"222px", textAlign:"center"}}>
              <h1>THIS IS HOME</h1>
            </div>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="body">
          <Header/>
          <div className="container">
            <div className="row">
            <BeritaTerkini/>
            <DetailBerita/>
            </div>
          </div>
        </div>
      );
    }   
  }
}
  
  export default connect("isLoadingBeritaTerkini, isLoadingDetailBerita", actions)(withRouter(Home));