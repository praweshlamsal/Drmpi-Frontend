/*  Imports from Redux:
 applyMiddleware: Applies middleware to the dispatch method of the Redux store
 combineReducers: Merges reducers into one
 createStore: Creates a Redux store that holds the state tree
 Store: The TS Type used for the store, or state tree
 */
import { applyMiddleware, combineReducers, compose, createStore, Store } from 'redux';
/*  Thunk
Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.
*/
import thunk from 'redux-thunk';
// Import reducers and state type
import { IBasicState, basicReducer } from '../reducers/basicReducer';
import { HomepageReducer, IHomepageState } from '../reducers/homepageReducer';

// Create an interface for the application state
export interface IAppState {
  basicState: IBasicState,
  homepageState: IHomepageState
}


// Create the root reducer
const rootReducer = combineReducers<IAppState>({
  basicState: basicReducer,
  homepageState: HomepageReducer
});

export type RootState = ReturnType<typeof rootReducer>;


// Create a configure store function of type `IAppState`
export default function configureStore(): Store<IAppState, any> {
  const composeEnhancer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose) || compose;
  const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
  return store;
}