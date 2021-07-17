import React from 'react'
import Heading from '../../Common/Heading/Heading'
import item3 from "../../../../assets/images/slider/item3.jpg"
import { IAboutUs } from '../SlickSlider/schema'
import { serverDetails } from '../../../../store/utils/enums'

interface IProps {
    aboutUsProps: IAboutUs
}
const Aboutus = (props: IProps) => {
    return (
        <section id="block-three">
            <Heading titleName={props.aboutUsProps?.SectionTitle} />
            <div className="container-fluid back-img">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-4">
                            <div className="abt-img">
                                <img className="img img-responsive" src={serverDetails.REACT_END_POINT + props.aboutUsProps?.AboutImage.url} />
                                <div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-8">
                            <div className="abt-text">
                                <h2>{props.aboutUsProps?.AboutTitle}</h2>
                                <p>{props.aboutUsProps?.AboutDescription}</p>
                                <div className="main-btn abt-btn">
                                    <a href={"#"}>View More</a>
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
