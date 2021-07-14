import React from 'react';
import Slider from "react-slick";
import item1 from "../../../../assets/images/slider/item1.jpg"
import item2 from "../../../../assets/images/slider/item2.jpg"
import item3 from "../../../../assets/images/slider/item3.jpg"

interface IProps {
    images: string[]
}
const SlickSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
    };
    return (
        <section id="slider">
            <div className="slide-wrapper">
                <Slider className="slider-wrap" {...settings}>
                    <div className="slide-img">
                        <img className="img img-responsive" src={item1} />
                        <div className="slide-des">
                            <h2>Dinesh Ramji Memorial Polytechnic Institute</h2>
                            <p> Dinesh Ramji Memorial Polytechnic Institute (DRMPI), is a newly established TEVT institute of Bagmati province. It is  situated at Chautara Sangachowkgadi Municipality ward no. 5, Chautara,Sindhupalchowk.</p>
                            <div className="slide-btn">
                                <a href="#">View More</a>
                            </div>
                        </div>
                    </div>
                    <div className="slide-img">
                        <img className="img img-responsive" src={item2} />
                        <div className="slide-des">
                            <h2>Dinesh Ramji Memorial Polytechnic Institute</h2>
                            <p> Dinesh Ramji Memorial Polytechnic Institute (DRMPI), is a newly established TEVT institute of Bagmati province. It is  situated at Chautara Sangachowkgadi Municipality ward no. 5, Chautara,Sindhupalchowk.</p>
                            <div className="slide-btn">
                                <a href="#">View More</a>
                            </div>
                        </div>
                    </div>
                    <div className="slide-img">
                        <img className="img img-responsive" src={item3} />
                        <div className="slide-des">
                            <h2>Dinesh Ramji Memorial Polytechnic Institute</h2>
                            <p> Dinesh Ramji Memorial Polytechnic Institute (DRMPI), is a newly established TEVT institute of Bagmati province. It is  situated at Chautara Sangachowkgadi Municipality ward no. 5, Chautara,Sindhupalchowk.</p>
                            <div className="slide-btn">
                                <a href="#">View More</a>
                            </div>
                        </div>
                    </div>



                </Slider>
            </div>
        </section>


    )
}

export default SlickSlider
