import React from 'react'
import Heading from '../../Common/Heading/Heading'

let SingleNotice = () => {
    return <>
        {
            Array.from(Array(4), (e, i) => {
                return <div className="col-md-6 col-sm-6">
                    <div className="notice-wrapper left-notice">
                        <div className="date-box">
                            <span>2077/11/25</span>
                        </div>
                        <h2>Digital Transformation Conference in Chautara</h2>
                        <div className="main-btn notice-btn">
                            <a href="#">View More</a>
                        </div>
                    </div>
                </div>
            })
        }
    </>

}
const Notice = () => {
    return (
        <section id="block-four">
            <div className="container">
                <Heading titleName={"Notice"} />
                <div className="row">
                    <SingleNotice />
                </div>
            </div>

        </section>
    )
}

export default Notice
