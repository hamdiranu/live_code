import React from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import { store } from "../store";

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";


class Header extends React.Component {
    
    // fungsi untuk mengeluarkan tampilan saat search bar diinput
    handleSearchContent=(e)=>{
        this.props.handleSearch(e)
        this.props.getDetailBerita()
    }

    // fungsi untuk SignOut
    getOut = () => {
        store.setState({ statusLogin: false});
        store.setState({ isLoadingBeritaTerkini: true});
        store.setState({ isLoadingDetailBerita: true});
        console.log("cek state statusLogin", this.props.statusLogin)
        // localStorage.clear()
        this.props.history.push("/");
    }

    goBackHome = () => {
        store.setState({isLoadingDetailBerita : true});
        console.warn("cek isloading", store.getState().isLoadingBeritaTerkini)
    }

    render() {

    return (
        <div className="header">
            <div className="container-fluid background_header">
                <div className="row align-items-center">
                    <div className="col-md-3 col-sm-12 altalogo">
                        <div>
                            <Link to="/" onClick={e => this.goBackHome()}><img src={logo} style={{width:"60px", height:"60px"}} className="App-logo" alt="logo" /></Link>
                        </div>
                        <div className="kabarkabar">
                        <Link to="/" onClick={e => this.goBackHome()}><h3 style={{color:"#1F406C"}}>Movies</h3></Link>
                        </div>
                    </div>
                    <div className="col-md-4 option1" style={{display:"contents", textAlign:"center"}}>
                        <div className="header-nav1">
                            <ul className="header-nav__list1 list-unstyled">
                                <li>
                                    <Link to="/romance" onClick={e =>this.props.handleClickContentStore("romance")}>Romance</Link>
                                </li>
                                <li>
                                    <Link to="/action" onClick={e => this.props.handleClickContentStore("action")}>Action</Link>
                                </li>
                                <li>
                                    <Link to="/fiction" onClick={e =>this.props.handleClickContentStore("fiction")}>Fiction</Link>
                                </li>
                                <li>
                                    <Link to="/comedy" onClick={e =>this.props.handleClickContentStore("comedy")}>Comedy</Link>
                                </li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <button class="dropdown-toggle" type="button" data-toggle="dropdown">Lainnya
                            </button>
                            <ul class="dropdown-menu">
                            <li><Link to="/Adult" onClick={e =>this.props.handleClickContentStore("romance")}>Adult</Link></li>
                            <li><Link to="/Children" onClick={e =>this.props.handleClickContentStore("action")}>Children</Link></li>
                            <li><Link to="/Science" onClick={e =>this.props.handleClickContentStore("comedy")}>Science</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-12 search_bar" style={{textAlign:"center"}}>
                        <form action="/action_page.php" style={{display:"inline-flex"}}>
                            <input onChange={e => this.handleSearchContent(e)} value={this.props.search} type="text" placeholder="search" name="category" style={{width:"150px"}}/>
                            <button type="submit" ><i class="fa fa-search"></i></button>
                        </form>
                    </div>
                    <div className="col-md-3 nav_bar">
                        <div className="header-nav1">
                            <ul className="header-nav__list1 list-unstyled">
                                <li>
                                    <Link to="/SignIn" >Masuk</Link>
                                </li>
                                <li>
                                    <Link onClick={this.getOut}>Keluar</Link>
                                </li>
                                <li>
                                    <Link to="/Profile">Profile</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default connect("search, statusLogin, isLoadingBeritaTerkini, isLoadingDetailBerita", actions)(withRouter(Header));