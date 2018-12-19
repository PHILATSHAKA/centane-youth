import React from 'react'
import { FaFacebook, FaLinkedinIn, FaTwitterSquare } from 'react-icons/fa';
import Team from '../team/index';
import './index.css';

class Home extends React.Component {
  render(){
    return(
      <div className="intro-header bg">
        <div className="bg-overlay">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="intro-message">
                  <h1 className="heading">Centane Youth Development Structure</h1>
                  <hr className="intro-divider"/>
                  <Team/>
                  <div className="communication">
                  <a href="https://web.facebook.com/Centane-Youth-Development-Structure-NPO-2215209148737440/?modal=admin_todo_tour" className="btn btn-default btn-lg button-network">
                    <i className="FaFacebook">
                    <span className="network-name"> <FaFacebook className="iconFa"/>Facebook</span></i>
                  </a>
                  <a href="https://twitter.com/centaneyoutdev" className="btn btn-default btn-lg button-network">
                    <i className="fa fa-twitter fa-fw">
                    <span className="network-name"> <FaTwitterSquare className="iconFa"/> Twitter</span></i>
                  </a>
                  <a href="#" className="btn btn-default btn-lg button-network">
                    <i className="fa fa-linkedin  fa-fw">
                    <span className="network-name"><FaLinkedinIn className="iconFa"/>LinkedIn</span></i>
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home
