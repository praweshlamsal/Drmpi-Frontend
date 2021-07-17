import React, { useEffect } from 'react';
import { connect, ConnectedProps, RootStateOrAny } from 'react-redux';
import { homepageAction } from '../../../actions/homepage/homepageAction';
import { RootState } from '../../../store/store';
import Footer from '../Common/Footer/Footer';
import Header from '../Common/Header/Header';
import Aboutus from '../Home/AboutUs/Aboutus';
import Academic from '../Home/Academic/Academic';
import Notice from '../Home/Notice/Notice';
import ShortTerm from '../Home/ShortTerm/ShortTerm';
import SlickSlider from '../Home/SlickSlider/SlickSlider';
interface IProps extends propsFromRedux {

}
const HomePage = (props: IProps) => {
    const { sliderProps, academicProps, aboutUsProps } = props
    useEffect(() => {
        debugger;
        if (props.sliderProps?.length && props.academicProps?.Cards?.length) {
        }
        else {
            let data = props.homepageAction();
            console.log(data);
            data.then((response) => {
                return response
            }).catch((error) => {
                return error
            })
        }

    }, [props.homepageAction, props.homepage])


    return (
        <>
            <Header />
            <SlickSlider sliderProps={sliderProps} />
            <Academic academicProps={academicProps!} />
            <Aboutus aboutUsProps={aboutUsProps!} />
            <Notice />
            <ShortTerm />
            <Footer />
        </>
    )
}

const mapStateToProps = (state: RootState) => ({
    homepage: state.homepageState,
    sliderProps: state.homepageState.mainSlider,
    academicProps: state.homepageState.academicPrograms,
    aboutUsProps: state.homepageState.aboutUs
})
const mapDispatchToProps = {
    homepageAction: homepageAction
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type propsFromRedux = ConnectedProps<typeof connector>
export default connector(HomePage)
