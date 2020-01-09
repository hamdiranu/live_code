import React from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';

class Footer extends React.Component {
    render() {
      return (
        <div className="container-fluid foot">
            <div className="container footer1">
                <div className="row">
                    <div className="col-md-4 col-6">
                        <img src={require("../assets/img/logo-ALTA-v2.png" )} style={{width:"109.5px", height:"57px"}}/>
                    </div>
                    <div className="col-md-4 col-6 media_sosial">
                        <p>Social Media</p>
                        <div className="sosial">
                            <a href="https://www.facebook.com/alterra.academy/?ref=br_rs" target="_blank"><img src={require("../assets/img/ic_fb.png" )} style={{width:"20px", height:"20px"}}/></a>
                            <a href="https://twitter.com/garrycussoy" target="_blank"><img src={require("../assets/img/ic-twitter.png" )} style={{width:"20.5px", height:"16.5px"}}/></a>
                            <a href="https://instagram.com/aamfatur?igshid=czh27j1em8yl" target="_blank"><img src={require("../assets/img/ic-instagram.png" )} style={{width:"20.3px", height:"20.3px"}}/></a>
                            <a href="https://id.linkedin.com/in/lelianto1?trk=people-guest_profile-result-card_result-card_full-click" target="_blank"><img src={require("../assets/img/ic-linkedin.png" )} style={{width:"20px", height:"20px"}}/></a>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 copyright">
                        <span>Copyright © 2019 Alterra</span> 
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Footer;