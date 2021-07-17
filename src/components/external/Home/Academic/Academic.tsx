import React from 'react'
import Heading from '../../Common/Heading/Heading'
import AcademicCommon from './AcademicCommon/AcademicCommon'
import icon1 from '../../../../assets/images/icon/icon1.png'
import icon2 from '../../../../assets/images/icon/icon2.png'
import { IAcademicPrograms, TAcademicCard } from '../SlickSlider/schema'
import { serverDetails } from '../../../../store/utils/enums'
import { useEffect } from 'react'

interface IProps {
    academicProps: IAcademicPrograms
}
const Academic = (props: IProps) => {

    useEffect(() => {

    }, [props.academicProps])

    return (
        <section id="block-two">
            <div className="container">
                <Heading titleName={props.academicProps?.SectionTitle} />
                <div className="row">
                    {
                        props.academicProps?.Cards.map((item: TAcademicCard, index) => {
                            return (<div className="col-md-6">
                                <AcademicCommon url={item.CardUrl} right={index % 2 == 0} icon={serverDetails.REACT_END_POINT + item.CardIcon.url} title={item.CardTitle} description={item.CardDescription} />
                            </div>)
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Academic
