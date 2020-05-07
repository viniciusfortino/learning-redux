import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();
// const dev = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(rootSaga);

export default store;