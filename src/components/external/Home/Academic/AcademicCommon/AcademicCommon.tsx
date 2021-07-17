import React from 'react'
import icon1 from '../../../../../assets/images/icon/icon1.png'
import icon2 from '../../../../../assets/images/icon/icon2.png'
interface IProps {
    icon: string;
    title: string;
    description: string;
    right: boolean;
    url: string
}
const AcademicCommon = (props: IProps) => {
    const { icon, title, description, right } = props
    return (
        <>
            <div className={`prog-block row ${right ? "" : "custom-block"}`}>
                {
                    right ?
                        <>
                            <div className="col-md-8 col-sm-8 col-xs-8">
                                <div className="prog-content">
                                    <h4>{title}</h4>
                                    <p>{description}</p>
                                    <div className="main-btn left-btn">
                                        <a href={props.url}>View More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-4">
                                <div className="prog-icon">
                                    <img className="img img-responsive" src={icon} />
                                </div>
                            </div>
                        </> :
                        <>
                            <div className="col-md-4 col-sm-4 col-xs-4">
                                <div className="prog-icon">
                                    <img className="img img-responsive" src={icon} />
                                </div>
                            </div>
                            <div className="col-md-8 col-sm-8 col-xs-8">
                                <div className="prog-content">
                                    <h4>{title}</h4>
                                    <p>{description}</p>
                                    <div className="main-btn right-btn">
                                        <a href="#">View More</a>
                                    </div>
                                </div>
                            </div>
                        </>
                }

            </div>
        </>
    )
}

export default AcademicCommon
