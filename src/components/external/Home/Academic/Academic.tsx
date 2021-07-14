import React from 'react'
import Heading from '../../Common/Heading/Heading'
import AcademicCommon from './AcademicCommon/AcademicCommon'
import icon1 from '../../../../assets/images/icon/icon1.png'
import icon2 from '../../../../assets/images/icon/icon2.png'

const Academic = () => {
    return (
        <section id="block-two">
            <div className="container">
                <Heading titleName={"Academic Programs"} />
                <div className="row">
                    <div className="col-md-6">
                        <AcademicCommon right icon={icon1} title={"Diploma in Civil Engineering"} description={"Civil Engineering is one of the prominent and popular disciplines within engineering. Many people in the.."} />
                    </div>
                    <div className="col-md-6">
                        <AcademicCommon right={false} icon={icon2} title={"Diploma in Civil Engineering"} description={"Civil Engineering is one of the prominent and popular disciplines within engineering. Many people in the.."} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Academic
