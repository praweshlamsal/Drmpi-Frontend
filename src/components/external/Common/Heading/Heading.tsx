import React from 'react'
import title from "../../../../assets/images/title/title.png"

interface IProps {
    titleName: string;
}
const Heading = (props: IProps) => {
    const { titleName } = props
    return (
        <div className="section-title">
            <h2>{titleName}</h2>
            <div className="divider">
                <img className="img img-responsive" src={title} />
            </div>
        </div>
    )
}

export default Heading
