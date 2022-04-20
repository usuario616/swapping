import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { data, ui, dataDetails } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const enhancers: any = [];
const middleware = [thunk];

const configureStore = (preloadedState: Object) => {
  const store = createStore(
    combineReducers({ data, ui, dataDetails }),
    preloadedState,
    composeWithDevTools(applyMiddleware(...middleware), ...enhancers),
  );
  return store;
};

export default configureStore;
