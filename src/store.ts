import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import createHistory from "history/createBrowserHistory";
import rootReducer from "./reducers/index";

import rootSaga from "./sagas/Index";
export const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const enhancers: any[] = [];
const middleware = [sagaMiddleware, routerMiddleware(history)];

// if (process.env.NODE_ENV === "development") {
//   const devToolsExtension = window.devToolsExtension || {};

//   if (typeof devToolsExtension === "function") {
//     enhancers.push(devToolsExtension());
//   }
// }

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export const store = createStore(rootReducer, {}, composedEnhancers);

sagaMiddleware.run(rootSaga);

export default store;
