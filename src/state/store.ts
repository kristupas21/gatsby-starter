import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';

export const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
