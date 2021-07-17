import React, { useEffect } from 'react';
import Slider from "react-slick";
import item1 from "../../../../assets/images/slider/item1.jpg"
import item2 from "../../../../assets/images/slider/item2.jpg"
import item3 from "../../../../assets/images/slider/item3.jpg"
import { serverDetails } from '../../../../store/utils/enums';
import { ISlider } from './schema';

interface IProps {
    sliderProps: ISlider[] | null;

}
const SlickSlider = (props: IProps) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
    };
    useEffect(() => {
        console.log(props.sliderProps)
    }, [props.sliderProps])
    return (
        <section id="slider">
            <div className="slide-wrapper">
                <Slider className="slider-wrap" {...settings}>
                    {
                        props.sliderProps?.map((item: ISlider) => {
                            return (<div className="slide-img">
                                <img className="img img-responsive" src={serverDetails.REACT_END_POINT + item.sliderImage.url} />
                                <div className="slide-des">
                                    <h2>{item.Title}</h2>
                                    <p>{item.Description}</p>
                                    <div className="slide-btn">
                                        <a href="#">View More</a>
                                    </div>
                                </div>
                            </div>)
                        })
                    }

                </Slider>
            </div>
        </section>


    )
}

export default SlickSlider
