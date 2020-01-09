import React from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

class detailBerita extends React.Component {
        
        render() {
            
        const random_berita = this.props.listDetailBerita.filter((element) => element.Category === this.props.category)
        console.log("isi filter movie", random_berita)
        console.log("isi state category", this.props.category)

        if (this.props.isLoadingDetailBerita === false) {
            return (
                <div className="kumpulan_detail">
                    {random_berita.map((isi,i)=>(
                        <div style={{display:"flex", marginBottom:"30px"}}>
                            <div className="col-3">
                                <img src={isi.Poster} style={{width:"100%", height:"100%"}} alt=""/>
                            </div>
                            <div className="col-9">
                                <div className="col-md-12 detail_berita" style={{paddingLeft:"0px",paddingRight:"0px", margin:"0px"}}>
                                    <div className="col-md-12 judul_detail">
                                        <span >
                                            <a style={{fontSize:"45px"}} href="#">{isi.Title}</a>
                                        </span>
                                    </div>
                                    <div className="col-md-12 isi_detail">
                                        <span>
                                            <h4 style={{fontSize:"25px"}}>{isi.Year}</h4>
                                        </span>
                                    </div>
                                    <div className="col-md-12 isi_detail">
                                        <span>
                                            <h4 style={{fontSize:"20px"}}>{isi.Synopsis}</h4>
                                        </span>
                                    </div>
                                    <div className="col-md-12 last_update_detail">
                                        <span >
                                            <h4>Last update 3 mins ago</h4>
                                        </span>
                                    </div>
                                    <div className="col-md-12 love_share_down" style={{padding:"10px 0px 10px 0px", marginTop:"30px"}}>
                                        <div className="list-group list-group-horizontal">
                                            <a href="#" style={{textAlign:"center",height:"fit-content",border:"none",backgroundColor:"#F8F9FA"}} class="list-group-item list-group-item-action"><img src={require("../assets/img/love_icon.png")} style={{width:"10%", height:"10%"}} alt=""/></a>
                                            <a href="#" style={{textAlign:"center",height:"fit-content",border:"none",backgroundColor:"#F8F9FA"}} class="list-group-item list-group-item-action"><img src={require("../assets/img/share_icon.png")} style={{width:"10%", height:"10%"}} alt=""/></a>
                                            <a href="#" style={{textAlign:"center",height:"fit-content",border:"none",backgroundColor:"#F8F9FA"}} class="list-group-item list-group-item-action"><img src={require("../assets/img/downvote_icon.png")} style={{width:"10%", height:"10%"}} alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>   
                    )   
                    )}
                </div>
            )}
        else {
            return (
                <div style={{textAlign:"center"}}>Mohon Tunggu</div>
            )
        }
    }
  }
  
  export default connect("listDetailBerita, isLoadingDetailBerita, category", actions)(withRouter(detailBerita));