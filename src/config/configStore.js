import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../store/reducers/root";

/**
 * Configuration function for handling all
 * configurations to the createStore method.
 *
 * Split from index.js for better maintainability.
 *
 * @param {object} preloadedState - Added in case we need to add
 * a preloaded state later.
 */
export default function configureStore(preloadedState) {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}
