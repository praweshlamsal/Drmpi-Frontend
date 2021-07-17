import axios from 'axios';
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { IMainSlider, ISlider } from '../../components/external/Home/SlickSlider/schema';
import { IHomepageState } from '../../reducers/homepageReducer';
import initDispatchTypes from '../../store/utils/dispatch_types/dispatctTypes';
import { serverDetails } from '../../store/utils/enums';
export enum HomePageActionTypes {
    HOMEPAGE = 'HOMEPAGE_DATA',
}
export interface IHomepageAction {
    type: HomePageActionTypes.HOMEPAGE;
    payload: IMainSlider;
}
export const homepageAction: ActionCreator<ThunkAction<Promise<any>, IHomepageState, null, IHomepageAction>> = () => async (dispatch: Dispatch) => {
    const dispatchTypes = initDispatchTypes(HomePageActionTypes.HOMEPAGE);
    dispatch({ type: dispatchTypes.progressDispatch, payload: null })
    await axios.get(serverDetails.REACT_END_POINT + "/homepage").then((response) => {
        dispatch({ type: dispatchTypes.successDispatch, payload: response.data })
    }).catch((error) => {
        dispatch({ type: dispatchTypes.failureDispatch, payload: error })
    })
}