import React from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';


import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

class detailBerita extends React.Component {
        
        render() {
            
        const random_berita = this.props.listDetailBerita.filter((element,i) => i<=4)

        if (this.props.isLoadingDetailBerita === false) {
            return (
                <div className="col-md-6 kumpulan_detail">
                    {random_berita.map((isi,i)=>(
                        <div className="col-md-12 detail_berita" style={{paddingLeft:"0px",paddingRight:"0px"}}>
                            <img src={isi.urlToImage} alt="Gambar detail berita"/>
                        <div className="col-md-12 judul_detail">
                            <span >
                                <a href={isi.url}>{isi.title}</a>
                            </span>
                        </div>
                        <div className="col-md-12 isi_detail">
                            <span>
                                <h4>{isi.description}</h4>
                            </span>
                        </div>
                        <div className="col-md-12 last_update_detail">
                            <span >
                                <h4>Last update 3 mins ago</h4>
                            </span>
                        </div>
                        <div className="col-md-12 love_share_down" style={{padding:"10px 0px 10px 0px"}}>
                            <div className="list-group list-group-horizontal">
                                <a href="#" style={{textAlign:"center",height:"fit-content",border:"none",backgroundColor:"#F8F9FA"}} class="list-group-item list-group-item-action"><img src={require("../assets/img/love_icon.png")} style={{width:"10%", height:"10%"}} alt=""/></a>
                                <a href="#" style={{textAlign:"center",height:"fit-content",border:"none",backgroundColor:"#F8F9FA"}} class="list-group-item list-group-item-action"><img src={require("../assets/img/share_icon.png")} style={{width:"10%", height:"10%"}} alt=""/></a>
                                <a href="#" style={{textAlign:"center",height:"fit-content",border:"none",backgroundColor:"#F8F9FA"}} class="list-group-item list-group-item-action"><img src={require("../assets/img/downvote_icon.png")} style={{width:"10%", height:"10%"}} alt=""/></a>
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
  
  export default connect("listDetailBerita, isLoadingDetailBerita", actions)(withRouter(detailBerita));