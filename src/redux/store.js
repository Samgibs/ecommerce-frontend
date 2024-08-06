import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer'; 
import rootSaga from './sagas/rootSaga';


const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const composeEnhancers = composeWithDevTools({}) || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

export default store;

