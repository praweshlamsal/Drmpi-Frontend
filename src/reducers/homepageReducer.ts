import { Reducer } from "react";
import { Action } from "redux";
import { HomePageActionTypes, IHomepageAction } from "../actions/homepage/homepageAction";
import { IAboutUs, IAcademicPrograms, ISlider } from "../components/external/Home/SlickSlider/schema";
import { IBasicState } from "./basicReducer";

export interface IHomepageState {
    mainSlider: ISlider[] | null;
    academicPrograms: IAcademicPrograms | null;
    aboutUs: IAboutUs | null
}
const initialBasicState: IHomepageState = {
    mainSlider: [],
    academicPrograms: null,
    aboutUs: null
};

export interface ActionReducer<T, V extends Action = Action> {
    (state: T | undefined, action: V): T;
}

export const HomepageReducer: ActionReducer<IHomepageState, IHomepageAction> = (
    state = initialBasicState,
    action
) => {
    switch (action.type) {
        case HomePageActionTypes.HOMEPAGE: {
            return {
                ...state,
                mainSlider: action.payload.MainSlider,
                academicPrograms: action.payload.AcademicPrograms,
                aboutUs: action.payload.AboutUs
            };
        }
        case HomePageActionTypes.HOMEPAGE + "_SUCCESS": {
            return {
                ...state,
                mainSlider: action.payload.MainSlider,
                academicPrograms: action.payload.AcademicPrograms!,
                aboutUs: action.payload.AboutUs!

            }
        }
        default:
            return state;
    }
};