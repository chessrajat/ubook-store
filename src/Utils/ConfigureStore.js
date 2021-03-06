import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "../Redux/Reducers/RootReducer";
import thunk from "redux-thunk";

export const configureStore = () => {
  const middlewares = [thunk];

  const composeEnhancer = composeWithDevTools(applyMiddleware(...middlewares));
  return createStore(rootReducer, composeEnhancer);
};
