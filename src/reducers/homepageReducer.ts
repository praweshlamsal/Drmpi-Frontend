import { Reducer } from "react";
import { Action } from "redux";
import { HomePageActionTypes, IHomepageAction } from "../actions/homepage/homepageAction";
import { IBasicState } from "./basicReducer";

export interface IHomepageState {
    property: any;
}
const initialBasicState: IHomepageState = {
    property: null
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
                property: action.property
            };
        }
        default:
            return state;
    }
};