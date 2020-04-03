/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-04-03 15:06:24
 * @Description: 
 */

import {
    applyMiddleware,
    compose,
    createStore
} from "redux";
import createSagaMiddleware from "redux-saga";

import {
    persistStore
} from "redux-persist";

import rootReducer from '../common/rootReducer'
import rootSaga from '../common/rootSaga'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;