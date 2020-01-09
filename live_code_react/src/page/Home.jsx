import React from 'react';
import '../assets/css/main.css';
import '../assets/css/bootstrap.min.css';
import Header from '../component/header';
import DetailBerita from '../component/detail_berita';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    if (this.props.isLoadingDetailBerita === true) {
      return (
        <div className="body">
          <Header/>
            <div className="container" style={{marginTop:"100px"}}>
              <div className="isi-container" style={{textAlign:"center", display:"flex", marginBottom:"100px"}}>
                {/* Bagian Romance */}
                <div className="col-3 Romance">
                  <h1>Romance</h1>
                  <img src="https://m.media-amazon.com/images/M/MV5BOWJhMjJjMDItODQxYS00ODIyLWJhYzAtNTliMDhkZjM0YTA1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg" style={{width:"100%", height:"100%"}} alt=""/>
                  <button style={{marginTop:"20px", color:"white", backgroundColor:"#006CFF", borderRadius:"15%", width:"100px", height:"30px"}}>
                    <Link to="/romance" onClick={e =>this.props.handleClickContentStore("romance")} style={{color:"white"}}>See Movies</Link>
                  </button>
                </div>
                {/* Bagian Action */}
                <div className="col-3 Action">
                  <h1>Action</h1>
                  <img src="https://m.media-amazon.com/images/M/MV5BZmEzNjhiZWEtNTM5OS00ZmQyLThhYjEtNjY4ZDZhOGFkMzI4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" style={{width:"100%", height:"100%"}} alt=""/>
                  <button style={{marginTop:"20px", color:"white", backgroundColor:"#006CFF", borderRadius:"15%", width:"100px", height:"30px"}}>
                    <Link to="/action" onClick={e =>this.props.handleClickContentStore("action")} style={{color:"white"}}>See Movies</Link>
                  </button>
                </div>
                {/* Bagian Fiction */}
                <div className="col-3 Fiction">
                  <h1>Fiction</h1>
                  <img src="https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg" style={{width:"100%", height:"100%"}} alt=""/>
                  <button style={{marginTop:"20px", color:"white", backgroundColor:"#006CFF", borderRadius:"15%", width:"100px", height:"30px"}}>
                    <Link to="/fiction" onClick={e =>this.props.handleClickContentStore("fiction")} style={{color:"white"}}>See Movies</Link>
                  </button>
                </div>
                {/* Bagian Comedy */}
                <div className="col-3 Comedy">
                  <h1>Comedy</h1>
                  <img src="https://m.media-amazon.com/images/M/MV5BNTAyNDM0OGMtMmQ5OS00OGJiLTljMDUtY2Y1OTFlYmM2ZTk2XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg" style={{width:"100%", height:"100%"}} alt=""/>
                  <button style={{marginTop:"20px", color:"white", backgroundColor:"#006CFF", borderRadius:"15%", width:"100px", height:"30px"}}>
                    <Link to="/comedy" onClick={e =>this.props.handleClickContentStore("comedy")} style={{color:"white"}}>See Movies</Link>
                  </button>
                </div>
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
            <DetailBerita/>
            </div>
          </div>
        </div>
      );
    }   
  }
}
  
  export default connect("isLoadingDetailBerita", actions)(withRouter(Home));