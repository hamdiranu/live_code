import React from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';


import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

class BeritaTerkini extends React.Component {
    render() {
        console.log("cek listberitaterkini", this.props.listBeritaTerkini);
        
        const top_berita = this.props.listBeritaTerkini.filter((element,i) => i<=4);
        console.log("cek list top berita", top_berita)
        if (this.props.isLoadingBeritaTerkini === false) {
            return (
                <div className="col-md-5">
                    <div className="berita_terkini">
                        <div className="col-8">
                            <h5>BERITA TERKINI</h5>
                        </div>
                        <div className="col-4">
                            <a href="about_me.html">lihat semua</a>
                        </div>
                    </div>
                    {top_berita.map((isi,i) => (
                        <div className="isi_berita_terkini">
                        <div className="col-md-12">
                            <div className="col-md-2 col-sm-3 nomor" style={{paddingRight:"35px", paddingLeft:"0px"}}>
                                <h6 className="col-2" style={{textAlign:"center"}}>#{i+1}</h6>
                            </div>
                        </div>
                        <div className="judul">
                            <a href={isi.url}>{isi.title}</a>
                        </div>
                        </div>
                        )
                    )}
                </div>
                );
            }
        else {
            return (
                <div style={{textAlign:"center"}}>Mohon Tunggu</div>
            )
        }
    }
}
  
export default connect("listBeritaTerkini, isLoadingBeritaTerkini", actions)(withRouter(BeritaTerkini));