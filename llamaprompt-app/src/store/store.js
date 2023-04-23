import _ from 'lodash';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');

    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const persistedState = loadState();
const middleware = [thunk];
const applied = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(rootReducer, persistedState, applied);

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
    //Ignorar
  }
};

store.subscribe(
  _.throttle(() => {
    saveState(store.getState());
  }, 1),
);

export default store;