import React from 'react'
import Heading from '../../Common/Heading/Heading'
import item3 from "../../../../assets/images/slider/item3.jpg"
let SingleProgram = () => {
    return <>
        {
            Array.from(Array(3), (e, i) => {
                return <div className="col-md-4 col-sm-4">
                    <div className="short-prog">
                        <div className="short-prog-img">
                            <img className="img img-responsive" src={item3} />
                            <div className="short-prog-wrap">
                                <div className="short-prog-des">
                                    <h3>Tailoring</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <a className="learn-more">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            })
        }
    </>

}
const ShortTerm = () => {
    return (
        <section id="block-five">
            <Heading titleName="Short Term Program" />
            <div className="block-five-wrap">
                <div className="container">
                    <div className="row">
                        <SingleProgram />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShortTerm
