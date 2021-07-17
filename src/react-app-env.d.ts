/// <reference types="react-scripts" />

interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
}

interface DefaultDispatchType {
    progressDispatch: string;
    successDispatch: string;
    failureDispatch: string;
}
type DefaultAction<TPayload = any> = {
    type: string;
    payload?: TPayload
}
