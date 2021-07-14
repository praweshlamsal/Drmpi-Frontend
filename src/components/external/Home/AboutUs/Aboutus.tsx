import React from 'react'
import Heading from '../../Common/Heading/Heading'
import item3 from "../../../../assets/images/slider/item3.jpg"

const Aboutus = () => {
    return (
        <section id="block-three">
            <Heading titleName="About Us" />
            <div className="container-fluid back-img">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-4">
                            <div className="abt-img">
                                <img className="img img-responsive" src={item3} />
                                <div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-8">
                            <div className="abt-text">
                                <h2>Dinesh Ramji Memorial Polytechnic Institute (DRMPI)</h2>
                                <p> Dinesh Ramji Memorial Polytechnic Institute (DRMPI) has been recently established in order to serve the nation by producing skilled technical workforce. DRMPI is trying to train the needy people in very low fee structure considering the economic status of majority of Nepalese. </p>
                                <div className="main-btn abt-btn">
                                    <a href="#">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aboutus
