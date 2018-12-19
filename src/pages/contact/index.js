import React from 'react';
import { FaFacebook, FaLinkedinIn, FaTwitterSquare, FaPhoneSquare,FaEnvelope  } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
const Contact = () => {
    return (
    // <Jumbotron fluid>
        <section id="contact">
           <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                        <h2 className="section-heading">Let's Get In Touch!</h2>
                        <hr className="my-4 hr-contact"/>
                        <p className="mb-5 content">We are here to answer any questions you may have regarding to our development.
                                            You can contact the following people and they will respond as soon as possible.
                         </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 ml-auto text-center">
                        <i className="sr-contact-1"><FaPhoneSquare/></i>
                        <p>+27738210358</p>
                    </div>
                    <div className="col-lg-4 mr-auto text-center">
                        <i className="sr-contact-2"><FaEnvelope/></i>
                        <p><a className="email" href="mailto:centaneyouthdev@gmail.com">centaneyouthdev@gmail.com</a></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                    <div className="col-lg-6">
                            <div className="contact-button">
                            <div className="list-contact-button libutton">
                                        <a href="https://web.facebook.com/Centane-Youth-Development-Structure-NPO-2215209148737440/?modal=admin_todo_tour" className="btn btn-default btn-lg button-network"><i className="fa fa-facebook fa-fw">
                                        </i><span className="network-name"> <FaFacebook className="iconFa"/>Facebook</span></a>
                                    <br/>
                                        <a href="https://twitter.com/centaneyoutdev" className="btn btn-default btn-lg button-network"><i>
                                        </i><span className="network-name"> <FaTwitterSquare className="iconFa"/> Twitter</span></a>
                                    <br/>
                                        <a href="#" className="btn btn-default btn-lg button-network"><i>
                                        </i><span className="network-name"> <FaLinkedinIn className="iconFa"/>LinkedIn</span></a>
                
                            </div>
                            </div>
                     </div>
                    </div>
                </div>
           </div>
         </section>
        //  </Jumbotron>
    )
}
export default Contact;