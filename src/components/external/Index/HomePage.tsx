import React from 'react';
import Footer from '../Common/Footer/Footer';
import Header from '../Common/Header/Header';
import Aboutus from '../Home/AboutUs/Aboutus';
import Academic from '../Home/Academic/Academic';
import Notice from '../Home/Notice/Notice';
import ShortTerm from '../Home/ShortTerm/ShortTerm';
import SlickSlider from '../Home/SlickSlider/SlickSlider';
const HomePage = () => {
    return (
        <>
            <Header />
            <SlickSlider />
            <Academic />
            <Aboutus />
            <Notice />
            <ShortTerm />
            <Footer />
        </>
    )
}

export default HomePage
