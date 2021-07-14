import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faRetweet } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="foot-col">
                                <div className="foot-logo">
                                    <img className="img img-responsive" src="logo.png" />
                                </div>
                                <ul className="top-left">
                                    <li><div className="icon"><FontAwesomeIcon icon={faPhone} /></div>011-620323</li>
                                    <li><div className="icon"><FontAwesomeIcon icon={faEnvelope} /></div>drmpi,sindhu@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="link-center">
                                <div className="foot-col">
                                    <div className="foot-title">
                                        <h3>Quick Link</h3>
                                    </div>
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Gallery</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="foot-col">
                                <div className="foot-title">
                                    <h3>Download</h3>
                                </div>
                                <ul>
                                    <li><a href="#">Entrance_Result_Civil_Engineering_2077 - (Diploma in Civil Engineering)</a></li>
                                    <li><a href="#">Entrance_Result_Civil_Engineering_2077 - (Diploma in Civil Engineering)</a></li>
                                    <li><a href="#">Entrance_Result_Civil_Engineering_2077 - (Diploma in Civil Engineering)</a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="link-center">
                                <div className="foot-col">
                                    <div className="foot-title">
                                        <h3>Social Media</h3>
                                    </div>
                                    <ul className="top-right media">
                                        <li><a href="#"><FontAwesomeIcon icon={['fab', 'facebook-f']} className="fb" /><span>Facebook</span></a></li>
                                        <li><a href="#"><FontAwesomeIcon icon={['fab', 'instagram']} className="inst" /><span>Instagram</span></a></li>
                                        <li><a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} className="tw" /><span>Twitter</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
            <section id="copy-right">
                <div className="container">
                    <div className="row">
                        <div className="copy-text">
                            <h5>Copyright &copy; DRMPI. All rights reserved</h5>
                            <h5>Designed and Maintained by Three Idiots</h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
