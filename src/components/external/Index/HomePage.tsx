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
    useEffect(() => {
        if (props.sliderProps?.length) {

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

    }, [props.homepageAction, props.sliderProps])


    return (
        <>
            <Header />
            <SlickSlider sliderProps={props.sliderProps} />
            <Academic />
            <Aboutus />
            <Notice />
            <ShortTerm />
            <Footer />
        </>
    )
}

const mapStateToProps = (state: RootState) => ({
    sliderProps: state.homepageState.mainSlider,
})
const mapDispatchToProps = {
    homepageAction: homepageAction
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type propsFromRedux = ConnectedProps<typeof connector>
export default connector(HomePage)
