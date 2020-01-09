import React from 'react';
import '../assets/css/main.css';
import '../assets/css/bootstrap.min.css';
import Header from '../component/header';


class Home extends React.Component {
  render() {
    return (
      <div className="body">
        <Header/>
        <div className="container">
          <div style={{marginTop:"100px", textAlign:"center"}}><h1>OPSS SORRY, NOT MATCH</h1></div>
        </div>
      </div>
    );
  }
}
  
  export default Home;